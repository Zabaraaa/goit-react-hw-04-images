import { Component } from 'react';
import { Form, Button, Input} from './Searchbar.styled';

export class SearchBar extends Component {
    state = {
        searchQuery: '',
    };

    // Записуємо в стейт значення інпута
    handleChangeSearchQuery = e => {
        const searchQuery = e.currentTarget.value.toLowerCase();

        this.setState({ searchQuery });
    };

// Передаємо в App значення searchQuery і очищуємо форму
    handleSubmit = e => {
        e.preventDefault();

        const { searchQuery } = this.state;
        const { onSubmit } = this.props;
        
        if (searchQuery.trim() === '') {
            return;
        } 

    onSubmit(searchQuery);
    
    this.setState({ searchQuery: '' });

    }

    
    render() {
        const searchQuery = this.state.searchQuery
        
        return (
            <header>
    <Form onSubmit={this.handleSubmit} >
    <Button type="submit">
    <span>Search</span>
    </Button>

<Input
    type="text"
    autoComplete="off"
    autoFocus
    placeholder="Search images and photos"
    value={searchQuery}
    onChange={this.handleChangeSearchQuery}
    />
    </Form>
</header>
        )
    }
}
