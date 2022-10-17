import React from 'react';
// import OnlyScroll from 'only-scrollbar';
// import toast, { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast';
// глобальные стили
import GlobalStyles from './GlobalStyles';
// импорт функции разметки
import Section from './Section/Section';
import { Markup } from './App.styled';
import getImg from './api';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import LoadMoreBtn from './Button';
// import Loader from 'components/Loader/Loader';

// new OnlyScroll(window, {
//   damping: 0.5,
// });

export class App extends React.Component {
  state = {
    items: [],
    error: false,
    query: '',
    page: 1,
    isLoading: false,
  };

  componentDidUpdate(_, prevState) {
    const { page, query, error } = this.state;
    const { page: prevPage, query: prevQuery, error: prevError } = prevState;

    if (query === '') {
      toast.error('Write something!');
      return;
    } else if (prevPage !== page || prevQuery !== query) {
      this.fetchImg(query, page);

      if (prevError !== error) {
        toast.error(error);
      }
    }
  }

  handlerFormSubmit = values => {
    const { query } = this.state;
    if (query !== values.searchQuery.trim()) {
      this.setState({
        page: 1,
        isLoading: false,
        error: false,
        items: [],
        query: values.searchQuery.trim(),
      });
    }
  };

  fetchImg = async (query, page) => {
    try {
      this.setState({ isLoading: true });

      const response = await getImg(query, page);
      const images = response.hits;

      if (images.length === 0) {
        toast.error(
          'Sorry, there are no images matching your query. Please try again.'
        );
        return;
      }

      this.setState(({ items }) => ({
        items: [...items, ...images],
      }));
    } catch {
      this.setState({ error: 'Can`t load images!' });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
      isLoading: true,
    }));
  };

  render() {
    const { items, isLoading } = this.state;
    return (
      <Section>
        <GlobalStyles />
        <Markup>
          <Searchbar onSubmit={this.handlerFormSubmit} />
          {/* {isLoading && <Loader />} */}
          <ImageGallery items={items} />
          {items.length > 0 && <LoadMoreBtn onClick={this.loadMore} />}
          {/* {isLoading && <Loader />} */}
        </Markup>
      </Section>
    );
  }
}
