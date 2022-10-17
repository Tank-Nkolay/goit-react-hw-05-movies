import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';

import { Li, Img } from './ImageGalleryItem.styled';

class ImageGlleryItem extends React.Component {
  state = { showModal: false };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;
    const { item } = this.props;
    return (
      <>
        <Li id={item.id}>
          <Img
            src={item.webformatURL}
            alt={item.tags}
            onClick={this.toggleModal}
          />
          {showModal && <Modal image={item} toggleModal={this.toggleModal} />}
        </Li>
      </>
    );
  }
}

export default ImageGlleryItem;

ImageGlleryItem.propTypes = {
  item: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
};
