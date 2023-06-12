import  SearchBar  from "./Gallery/Gallery/Searchbar/Searchbar";
import { getData } from "./Gallery/Gallery/API/api";
import { ImageGallery } from "./Gallery/Gallery/ImageGallery/ImageGallery";
import { LoadMore } from "./Gallery/Gallery/Button/Button";
import { Loader } from "./Gallery/Gallery/Loader/Loader";
import  ModalOverlay  from "./Gallery/Gallery/Modal/Modal";
import { useState, useEffect } from "react";

export default function App() {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [largeImage, setLargeImage] = useState('');
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

 const getDataImages = async () => {
       try {
         setIsLoading(true);

      const hits = await getData(searchQuery, page);
      
      setImages(prevImages => [...prevImages, ...hits])
      setPage(page + 1)

    } catch (error) {
      setError('Oops something went wrong...')
    } finally {
     setIsLoading(false)
    }

    };

  useEffect(() => {
    if (searchQuery === "") return;
    getDataImages();
  }, [searchQuery]);


   // При сабміті форми приймає значення інпуту і скидає images та page
  const handleSubmitSearchQuery = searchQuery => {
    setImages([]);
    setSearchQuery(searchQuery);
    setPage(1)
    setError(null)
  };

  // Отримуємо Оригінальне зображення по кліку і відкриваємо модалку
  const getLargeImage = largeImage => {
    setLargeImage(largeImage);
    setIsModalOpen(true);
  };

 // Тогл модалки
  const toggleShowModal = () => {
    setIsModalOpen(isModalOpen => !isModalOpen);
  };
  
  const lengthImages = images.length >= 12;
  
  return (
    <div>
      <SearchBar onSubmit={handleSubmitSearchQuery} /> 
      {error}
        <ImageGallery items={images} getItemClick={getLargeImage} />
        {isLoading && <Loader />}
        {lengthImages && <LoadMore onLoadMore={() => getDataImages} />}
        {isModalOpen && (<ModalOverlay
          largeImageURL={largeImage}
          onClick={toggleShowModal}
        />)}
    </div>
  );

}

