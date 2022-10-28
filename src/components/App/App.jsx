import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
// глобальные стили
import GlobalStyles from '../GlobalStyles';
// импорт функции разметки
import Section from '../Section/Section';
import { Markup } from './App.styled';
import getImg from '../api';
import Searchbar from '../Searchbar';
import ImageGallery from '../ImageGallery';
import LoadMoreBtn from '../Button';
import Loader from '../Loader';

export default function App() {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!query) {
      return;
    }
    async function fetchImg(query, page) {
      try {
        setIsLoading(true);

        const response = await getImg(query, page);
        const images = response.hits;

        if (images.length === 0) {
          toast.error('Sorry, no images available. Try again!');
          return;
        }
        setItems(items => [...items, ...images]);
      } catch {
        setError('Something went wrong!');
      } finally {
        setIsLoading(false);
      }
    }
    fetchImg(query, page);
  }, [page, query]);

  useEffect(() => {
    if (error !== false) {
      toast.error(error);
    }
  }, [error]);

  const handlerFormSubmit = values => {
    if (query !== values.searchQuery.trim()) {
      setPage(1);
      setItems([]);
      setQuery(values.searchQuery.trim());
      setError(false);
      setIsLoading(false);
    }
  };

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
    setIsLoading(true);
  };

  return (
    <Section>
      <GlobalStyles />
      <Markup>
        <Searchbar onSubmit={handlerFormSubmit} />
        {isLoading && <Loader />}
        <ImageGallery items={items} />
        {items.length > 0 && <LoadMoreBtn onClick={loadMore} />}
        {isLoading && <Loader />}
        <Toaster />
      </Markup>
    </Section>
  );
}

// =================================================================
// ВАРИАНТ БЕЗ ХУКОВ
// =================================================================
// export class App extends React.Component {
//   state = {
//     items: [],
//     error: false,
//     query: '',
//     page: 1,
//     isLoading: false,
//   };

//   componentDidUpdate(_, prevState) {
//     const { page, query, error } = this.state;
//     const { page: prevPage, query: prevQuery, error: prevError } = prevState;

//     if (query === '') {
//       toast.error('Please, write something!');
//       return;
//     } else if (prevPage !== page || prevQuery !== query) {
//       this.fetchImg(query, page);

//       if (prevError !== error) {
//         toast.error(error);
//       }
//     }
//   }

//   handlerFormSubmit = values => {
//     const { query } = this.state;
//     if (query !== values.searchQuery.trim()) {
//       this.setState({
//         page: 1,
//         isLoading: false,
//         error: false,
//         items: [],
//         query: values.searchQuery.trim(),
//       });
//     }
//   };

//   fetchImg = async (query, page) => {
//     try {
//       this.setState({ isLoading: true });

//       const response = await getImg(query, page);
//       const images = response.hits;

//       if (images.length === 0) {
//         toast.error('Sorry, no images available. Try again!');
//         return;
//       }

//       this.setState(({ items }) => ({
//         items: [...items, ...images],
//       }));
//     } catch {
//       this.setState({ error: 'Something went wrong!' });
//     } finally {
//       this.setState({ isLoading: false });
//     }
//   };

//   loadMore = () => {
//     this.setState(prevState => ({
//       page: prevState.page + 1,
//       isLoading: true,
//     }));
//   };

//   render() {
//     const { items, isLoading } = this.state;
//     return (
//       <Section>
//         <GlobalStyles />
//         <Markup>
//           <Searchbar onSubmit={this.handlerFormSubmit} />
//           {isLoading && <Loader />}
//           <ImageGallery items={items} />
//           {items.length > 0 && <LoadMoreBtn onClick={this.loadMore} />}
//           <Toaster />
//         </Markup>
//       </Section>
//     );
//   }
// }
// =================================================================
// =================================================================
