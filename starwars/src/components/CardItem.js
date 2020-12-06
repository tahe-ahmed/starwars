import React from "react";
import styled from "styled-components";

import FilmList from "./FilmList";

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 50vh;
  font-family: "Roboto", arial, sans-serif;
  color: #222;
`;

const Card = styled.div`
  height: 15rem;
  width: 30rem;
  margin: 1rem 2rem;
  padding: 5px 5px 5px 21px;
  border-radius: 5px;
  background: #fff;
  position: relative;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  font-size: 16px;
  flex-direction: column;
  @media (max-width: 768px) {
    flex-direction: row;
    width: 18rem;
    height: auto;
  }
`;

const Avatar = styled.div`
  height: 100px;
  width: 100px;
  background: url(https://starwars-visualguide.com/assets/img/characters/${(
    props
  ) => props.number}.jpg);
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 70px;
  left: -42px;
  border-radius: 50%;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
`;

const CardInfo = styled.div`
  padding: 10px 0px 10px 0px;
  margin: 4px 0px;
`;

const ListTitle = styled.p`
  list-style: none;
  padding: 4px;
  font-size: 20px;
  font-weight: bold;
`;

const ListItem = styled.li`
  list-style: none;
  padding: 4px;
  text-decoration: none;
`;

const CardItem = (props) => {
  const { actors, films } = props;
  return (
    <CardContainer>
      {actors &&
        films &&
        actors.map((actor, index) => (
          <Card key={index}>
            <Avatar number={actor.id}></Avatar>
            <CardInfo>
              <ul>
                <ListTitle data-testid="title">
                  Title : {actor.name + actor.id}
                </ListTitle>

                <ListItem>Born in {actor.birth_year}</ListItem>
                <ListItem>Height {actor.height}</ListItem>
                <ListItem>{actor.gender}</ListItem>
              </ul>
            </CardInfo>

            <CardInfo>
              <ul>
                <ListTitle>Movies</ListTitle>
                {actor.films &&
                  actor.films.map((filmURL, index) => (
                    <FilmList filmURL={filmURL} films={films} id={index} />
                  ))}
              </ul>
            </CardInfo>
          </Card>
        ))}
    </CardContainer>
  );
};
export default CardItem;
