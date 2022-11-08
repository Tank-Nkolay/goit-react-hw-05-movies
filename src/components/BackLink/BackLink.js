import PropTypes from 'prop-types';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { LinkStyled } from './BackLink.styled';

export default function BackLink({ to, children }) {
  return (
    <LinkStyled to={to}>
      <FaArrowCircleLeft size="36" />
      {children}
    </LinkStyled>
  );
}

BackLink.propTypes = {
  to: PropTypes.PropTypes.object.isRequired,
  children: PropTypes.node,
};
