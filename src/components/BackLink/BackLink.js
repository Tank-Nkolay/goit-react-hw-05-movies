import PropTypes from 'prop-types';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { StyledLinkBack } from './BackLink.styled';

export default function BackLink({ to, children }) {
  return (
    <StyledLinkBack to={to}>
      <FaArrowCircleLeft size="36" color="#9bb9f4" />
      {children}
    </StyledLinkBack>
  );
}

BackLink.propTypes = {
  to: PropTypes.PropTypes.object.isRequired,
  children: PropTypes.node,
};
