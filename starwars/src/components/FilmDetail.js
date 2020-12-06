import React from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";

const MovieCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", arial, sans-serif;
  flex-direction: column;
  width: 50rem;
  height: 30rem;
  margin: auto;
`;

const MovieInfo = styled.div`
  color: #fff;
  color: #fff;
  width: 25rem;
  height: 100%;
  margin: 1rem;
  padding: 1rem;
`;

const MovieImage = styled.div`
  height: 100%;
  width: 20rem;
  background: url(https://starwars-visualguide.com/assets/img/films/${(props) =>
    props.imgNumber}.jpg);
  background-size: cover;
  background-position: center;
`;

const BackButton = styled(Link)`
  color: white;
  font-size: 1.5em;
  margin: 1em;
  padding: 0.4em 2em;
  display: block;
  text-decoration: none;
  color: white;
  text-decoration: none;
`;

const FilmDetail = (props) => {
  let { id } = useParams();
  const { film } = props.location.state;

  return (
    <React.Fragment>
      <BackButton to="/">
        <i className="fa fa-arrow-left"></i> Go Back to Actors
      </BackButton>

      <MovieCard className="card">
        <MovieImage imgNumber={id} className="portada"></MovieImage>
        <MovieInfo className="title-total">
          <h2>{film.title}</h2>

          <div className="desc">{film.opening_crawl}</div>
        </MovieInfo>
      </MovieCard>
    </React.Fragment>
  );
};

export default FilmDetail;
