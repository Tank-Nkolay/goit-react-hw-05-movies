import React from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { ModalOverlay, ModalWindow, Img } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends React.Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleEsc = event => {
    if (event.code === 'Escape') {
      this.props.toggleModal();
    }
  };

  handleClikOverlay = event => {
    if (event.currentTarget === event.target) {
      this.props.toggleModal();
    }
  };

  render() {
    const { image } = this.props;
    return createPortal(
      <ModalOverlay onClick={this.handleClikOverlay}>
        <ModalWindow onClick={this.handleEsc}>
          <Img src={image.largeImageURL} alt={image.tags} />
        </ModalWindow>
      </ModalOverlay>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  image: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
  toggleModal: PropTypes.func.isRequired,
};
