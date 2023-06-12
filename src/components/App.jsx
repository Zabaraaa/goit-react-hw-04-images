import { Component } from "react"; 
import { SearchBar } from "./Gallery/Gallery/Searchbar/Searchbar";
import { getData } from "./Gallery/Gallery/API/api";
import { ImageGallery } from "./Gallery/Gallery/ImageGallery/ImageGallery";
import { LoadMore } from "./Gallery/Gallery/Button/Button";
import { Loader } from "./Gallery/Gallery/Loader/Loader";
import { ModalOverlay } from "./Gallery/Gallery/Modal/Modal";

export class App extends Component{
  state = {
    images: [],
    searchQuery: '',
    page: 1,
    largeImage: '',
    error: null,
    isModalOpen: false,
    isLoading: false,
    
  }
// Якщо оновився стейт рендеримо картинки
  componentDidUpdate(_, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.getDataImages();
    }
  }

    // При сабміті форми приймає значення інпуту і скидає images та page
  handleSubmitSearchQuery = searchQuery => {
    this.setState({ images: [], searchQuery, page: 1 });
  };

// Витягуємо дані з фетча і записуємо в стейт
  getDataImages = async () => {
    const { searchQuery, page } = this.state;

    this.setState({ isLoading: true });
    
    try {
      const hits = await getData(searchQuery, page);
      
      this.setState(({ images, page }) => ({
        images: [...images, ...hits],
        page: page + 1,
      }));

    } catch (error) {
      this.setState({ error: 'Oops something went wrong...' });
    } finally {
      this.setState({ isLoading: false });
    }

  };

  // Отримуємо Оригінальне зображення по кліку і відкриваємо модалку
  getLargeImage = largeImage => {
    this.setState({ largeImage, isModalOpen: true });
  };

 // Тогл модалки
  toggleShowModal = () => {
    this.setState(({ isModalOpen }) => ({ isModalOpen: !isModalOpen }));
  };


  render() {
    const lengthImages = this.state.images.length >= 12;
    
    return (
    <div>
        <SearchBar onSubmit={this.handleSubmitSearchQuery} /> 
        <ImageGallery items={this.state.images} getItemClick={this.getLargeImage} />
        {this.state.isLoading && <Loader />}
        {lengthImages && <LoadMore onLoadMore={() => this.getDataImages} />}
        {this.state.isModalOpen && (<ModalOverlay
          largeImageURL={this.state.largeImage}
          onClick={this.toggleShowModal}
        />)}
    </div>
  );
};

  }
  
  