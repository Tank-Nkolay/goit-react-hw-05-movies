import { ThreeDots } from 'react-loader-spinner';
import { Container } from './Loader.styled';

function Loader() {
  return (
    <Container>
      <ThreeDots
        height="200"
        width="200"
        radius="9"
        color="#4fa94d"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </Container>
  );
}

export default Loader;
