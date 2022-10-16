// import PropTypes from 'prop-types';
// import { Formik } from 'formik';
import { BiSearchAlt2 } from 'react-icons/bi';
import { Header, SearchForm, Button, Input } from './Searchbar.styled';

function Searchbar({ onSubmit }) {
  return (
    <Header>
      <SearchForm>
        <Button type="submit">
          <BiSearchAlt2 size={24} />
          {/* <Span>Search</Span> */}
        </Button>

        <Input
          class="input"
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </Header>
  );
}

export default Searchbar;

// SearchBar.propTypes = {
//     onSubmit: PropTypes.func.isRequired,
//   };
