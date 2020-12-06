import styled from "styled-components";
import { Link } from "react-router-dom";

const ListItem = styled.li`
  list-style: none;
  padding: 4px;
  text-decoration: none;
`;

const MovieItem = styled(Link)`
  text-decoration: none;
`;

const FilmList = (props) => {
  props.films.forEach((film) => {
    const id = film.url.charAt(film.url.length - 2);
    film.id = id;
  });

  return (
    <>
      {props.films.map(
        (film) =>
          film.url === props.filmURL && (
            <ListItem key={film.id}>
              <MovieItem
                to={{
                  pathname: `/films/${film.id}`,
                  state: {
                    film,
                  },
                }}
              >
                {film.title}
              </MovieItem>
            </ListItem>
          )
      )}
    </>
  );
};

export default FilmList;
