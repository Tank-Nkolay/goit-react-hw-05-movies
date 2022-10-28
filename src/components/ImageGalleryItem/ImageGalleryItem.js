import { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';

import { Li, Img } from './ImageGalleryItem.styled';

export default function ImageGlleryItem({ item }) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(showModal => !showModal);
  };

  return (
    <>
      <Li id={item.id}>
        <Img src={item.webformatURL} alt={item.tags} onClick={toggleModal} />
        {showModal && <Modal image={item} toggleModal={toggleModal} />}
      </Li>
    </>
  );
}

ImageGlleryItem.propTypes = {
  item: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
};
