import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import FilmDetail from './components/FilmDetail';
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Times New Roman", Times, serif;
    font-size: 18px;
    font-weight: noraml;
    color: #000;
    background: #212129;
    height: calc(100% - 180px);
  }
`;


function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <GlobalStyle />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/films/:id" component={FilmDetail} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
