// import PropTypes from 'prop-types';
import { Ul } from './ImageGallery.styled';
import ImageGlleryItem from '../ImageGalleryItem';

function ImageGallery({ items }) {
  return (
    <Ul>
      {items.map(item => (
        <ImageGlleryItem key={item.id} item={item} />
      ))}
    </Ul>
  );
}

// ImageGallery.propTypes = {
//   items: PropTypes.arrayOf(
//     PropTypes.shape({ id: PropTypes.number.isRequired })
//   ),
// };

export default ImageGallery;
