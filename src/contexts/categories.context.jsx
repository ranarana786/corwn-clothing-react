import { createContext, useEffect, useState } from "react";
import {
  addCollectionAndDocuments,
  getCategoriesAndDocuments,
} from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  // useEffect(() => {
  //   addCollectionAndDocuments("collections", SHOP_DATA);
  // }, []);

  useEffect(() => {
    const getMapCategories = async () => {
      const categoriesMap = await getCategoriesAndDocuments();
      console.log(categoriesMap);
      setCategoriesMap(categoriesMap);
    };
    getMapCategories();
  }, []);

  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
