import styled from "styled-components";

const SearchWrapper = styled.div`
  display: block;
  width: 35rem;
  margin: 50px auto;
  @media (max-width: 768px) {
    width: 25rem;
  }
`;

const Search = styled.form`
  width: 100%;
  display: flex;
`;

const Input = styled.input`
  width: 100%;
  border: 3px solid #fff;
  border-right: none;
  padding: 5px;
  height: 2rem;
  border-radius: 5px 0 0 5px;
  outline: none;
  color: black;
  font-size: 20px;
`;

const SearchButton = styled.button`
  width: 3rem;
  height: 3rem;
  border: 1px solid red;
  background: red;
  text-align: center;
  color: #fff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 20px;
`;

const SearchForm = (props) => {
  return (
    <SearchWrapper>
      <Search className="input-holder" onSubmit={props.handleSubmit} data-testid="searchForm">
        <Input
          type="text"
          value={props.searchInput}
          className="div-input"
          placeholder="Type to search"
          onChange={props.handleOnChange}
        />
        <SearchButton>
          <i className="fa fa-search" data-testid="search-icon"></i>
        </SearchButton>
      </Search>
    </SearchWrapper>
  );
};

export default SearchForm;
