import { header } from "./Header";

describe("Test Header state", () => {
  beforeEach(() => {
    header.resetDates();
  });
  test("Is text changes", () => {
    const text = "header";
    header.setSearchText(text);
    expect(header.searchText).toBe(text);
  });
  test("Is getSearchText work", ()=>{
    const text = "header"  
    header.setSearchText(text)
    expect(header.getSearchText).toBe(text)
  })
  test("Is dates reset", ()=>{
    header.setSearchText("header")
    header.resetDates()
    expect(header.searchText).toBe("") 
  })
});
