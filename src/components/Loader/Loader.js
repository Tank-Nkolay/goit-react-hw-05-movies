import { ThreeDots } from 'react-loader-spinner';
import { Container } from './Loader.styled';

export default function Loader() {
  return (
    <Container>
      <ThreeDots
        height="200"
        width="200"
        radius="9"
        color="#386bd1"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </Container>
  );
}
