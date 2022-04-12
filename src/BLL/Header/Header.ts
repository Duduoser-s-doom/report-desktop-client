import { action, computed, makeObservable, observable } from "mobx";

class Header {
  searchText = "";
  constructor(){
    makeObservable(this,{
        searchText: observable,
        getSearchText: computed,
        setSearchText: action,
        resetDates: action
    })
  }
  get getSearchText (): string {
    return this.searchText;
  };
  setSearchText = (text: string): void => {
    this.searchText = text;
  };
  resetDates = (): void => {
    this.searchText = "";
  };
}

export const header = new Header();
