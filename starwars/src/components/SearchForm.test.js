import { fireEvent, render } from "@testing-library/react";

import SearchForm from "./SearchForm";

test("renders searchForm correctly", () => {
  const { queryByTestId, queryByPlaceholderText } = render(<SearchForm />);

  expect(queryByTestId("search-icon")).toBeTruthy();  // Test if seachIcon was rendered 
  expect(queryByPlaceholderText("Type to search")).toBeTruthy(); // Test if input field was rendered 
});

test("Form can be submited & OnChange can be handled & input value is changeable", () => {
  const mockSubmit = jest.fn();
  const mockOnChange = jest.fn();

  const { queryByTestId, queryByPlaceholderText } = render(
    <SearchForm handleSubmit={mockSubmit} handleOnChange={mockOnChange} />
  );

  const searchIcon = queryByTestId("search-icon");
  const searchInput = queryByPlaceholderText("Type to search");

  fireEvent.submit(searchIcon);
  fireEvent.change(searchInput, { target: { value: "tehe" } });

  expect(mockSubmit).toHaveBeenCalled(); // Test if handleSubmit has been called
  expect(mockOnChange).toHaveBeenCalled(); // Test if handleOnChange has been called
  expect(searchInput.value).toBe("tehe"); // Test if value changes onChange
});
