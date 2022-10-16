import { Header, SearchForm } from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
  return (
    <Header>
      <SearchForm>
        <button type="submit" class="button">
          <span class="button-label">Search</span>
        </button>

        <input
          class="input"
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </Header>
  );
};

export default Searchbar;
