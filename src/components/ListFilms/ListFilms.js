import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { Ul, FilmCard, Img, MovieTitle } from './ListFilms.styled';

import images from '../../images/noPicture.png';
import { routes } from 'routes';

export default function ListFilms({ films }) {
  const location = useLocation();
  const IMG_URL = 'https://image.tmdb.org/t/p/w500';

  return (
    <Ul>
      {films &&
        films.map(({ poster_path, title, id }) => (
          <Link
            key={id}
            to={`/${routes.MOVIES}/${id}`}
            state={{ from: location }}
          >
            <FilmCard>
              {poster_path ? (
                <Img src={IMG_URL + poster_path} alt={title} />
              ) : (
                <Img src={images} alt={title} />
              )}

              <MovieTitle> {title}</MovieTitle>
            </FilmCard>
          </Link>
        ))}
    </Ul>
  );
}

ListFilms.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
    })
  ),
};
