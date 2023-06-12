import { Form, Button, Input } from './Searchbar.styled';
import { useState } from "react";

export default function SearchBar({onSubmit}) {
    const [searchQuery, setSearchQuery] = useState('')

   // Записуємо в стейт значення інпута
    const handleChangeSearchQuery = e => {
    
        setSearchQuery(e.currentTarget.value.toLowerCase())
    };

    // Передаємо в App значення searchQuery і очищуємо форму
    const handleSubmit = (e ) => {
        e.preventDefault();
        
        if (searchQuery.trim() === '') {
            return;
        } 

    onSubmit(searchQuery);
    
    setSearchQuery("");

    }

        return (
            <header>
    <Form onSubmit={handleSubmit} >
    <Button type="submit">
    <span>Search</span>
    </Button>

<Input
    type="text"
    autoComplete="off"
    autoFocus
    placeholder="Search images and photos"
    value={searchQuery}
    onChange={handleChangeSearchQuery}
    />
    </Form>
</header>
        )
    }

