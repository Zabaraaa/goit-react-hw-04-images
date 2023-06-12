import PropTypes from 'prop-types';
import { ImageGalleryUl } from './ImageGallery.styled';
import { GalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ items,  getItemClick }) => {
    return (
        <ImageGalleryUl>
            {items.map(item => (
                        <GalleryItem  key={item.id} item={item} getItemClick={getItemClick}/>))}
        </ImageGalleryUl>
    )
}


ImageGallery.propTypes = {
    items: PropTypes.array.isRequired,
    getItemClick: PropTypes.func.isRequired,
}