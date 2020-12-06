import React, { useState, useEffect } from "react";

import CardItem from "./CardItem";
import SearchForm from "./SearchForm";

const Home = () => {
  const [actors, setActors] = useState([]);
  const [films, setFilms] = useState();
  const [searchInput, setSearchInput] = useState("");
  const [filter, setFilter] = useState();

  useEffect(() => {
    const abortController = new AbortController();

    const fetchAllFilms = async () => {
      try {
        await fetch("https://swapi.dev/api/films/", {
          signal: abortController.signal,
        })
          .then((res) => res.json())
          .then((data) => {
            setFilms(data.results);
          });
      } catch (err) {
        console.error(err);
      }
    };
    const actorsArray = [];
    const fetchAllActors = async (URL) => {
      try {
        await fetch(URL, { signal: abortController.signal })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);

            data.results.forEach((element) => {
              let id;
              if (actorsArray.length >= 9) {
                id = element.url.slice(
                  element.url.length - 3,
                  element.url.length - 1
                );
                element.id = id;
                actorsArray.push(id);
                setActors((actors) => [...actors, element]);
              } else {
                id = element.url.charAt(element.url.length - 2);
                element.id = id;
                actorsArray.push(id);
                setActors((actors) => [...actors, element]);
              }
            });

            let url = data.next;
            if (url != null) {
              fetchAllActors(url);
            }
          });
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          console.error("Uh oh, an error!", err);
        }
      }
    };

    fetchAllActors(`https://swapi.dev/api/people/?page=${1}`);
    fetchAllFilms();
    return () => {};
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();\
    if (searchInput.length >= 3) {
      const fitler = actors.filter((actor) => actor.name.includes(searchInput));
      setFilter(fitler);
      filter && console.log(filter);
      setSearchInput("");
    }
  };

  const handleOnChange = (e) => {
    setSearchInput(e.target.value);
    if (e.target.value === "") {
      setFilter(undefined);
    }
  };

  return (
    <React.Fragment>
      <SearchForm
        handleSubmit={handleSubmit}
        searchInput={searchInput}
        handleOnChange={handleOnChange}
      />
      <CardItem actors={filter || actors} films={films} />
    </React.Fragment>
  );
};

export default Home;
