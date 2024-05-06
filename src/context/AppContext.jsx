import { createContext, useContext, useEffect, useState } from "react";
import { fetchYoutubeData } from "../utils/api";

export const Context = new createContext(null);


export const AppContext = (props) => {
  const [loading, setLoading] = useState(false);
  const [searchResults, setsearchResults] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    fetchDataFromApi(selectedCategory);
  }, [selectedCategory]);

  const fetchDataFromApi = (quary) => {
    setLoading(true);
    fetchYoutubeData(`search/?q=${quary}`).then(({contents}) => {
      console.log()
      setsearchResults(contents);
    });
    setLoading(false);
}
    return (
      <Context.Provider
        value={{
          loading,
          setLoading,
          searchResults,
          selectedCategory,
          setSelectedCategory,
          mobileMenu,
          setMobileMenu,
        }}
      >
        {props.children}
      </Context.Provider>
    );
};
