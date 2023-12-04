import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

const GifExpertApp = () => {
  // const category = useRef(null);
  const initialState = ["Shingeki no Kyojin"];
  const [categories, setCategories] = useState(initialState);
  // const onAddCategory = () => {
  //   setCategories([...categories, category.current.value]);
  // };
  const onAddCategory = (newCategory) => {
    //categories.push(newCategory);
    if (categories.includes(newCategory)) return;
    setCategories([...categories, newCategory]);
  };

  return (
    <>
      <AddCategory onNewCategory={onAddCategory} />

      <h1>Gif expert app</h1>

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};

export default GifExpertApp;
