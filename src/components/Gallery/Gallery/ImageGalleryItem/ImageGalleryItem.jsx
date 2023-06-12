import PropTypes from 'prop-types';
import { Image, Item } from './ImageGalleryItem.styled';

export const GalleryItem = ({item, getItemClick}) => {
  // Передаємо по кліку на зображення його оригінальний розмір
  const onClickImage = () => {
    getItemClick(item.largeImageURL);
  };

  return (
    <Item>
      <Image src={item.webformatURL} alt={item.tags} onClick={onClickImage} />
    </Item>
  );
};

GalleryItem.propTypes = {
  item: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
  getItemClick: PropTypes.func.isRequired,
};