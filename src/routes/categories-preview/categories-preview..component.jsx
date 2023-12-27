import { useContext, Fragment } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../../components/product-card/product-card.component";
import CategoryPreview from "../../components/category-preview/category-preview.component";

export const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  console.log("Vlaue correspond to categories map are", categoriesMap);
  // console.log("Products are", products);
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((key) => {
        const products = categoriesMap[key];
        return <CategoryPreview key={key} title={key} products={products} />;
      })}
    </Fragment>
  );
};
