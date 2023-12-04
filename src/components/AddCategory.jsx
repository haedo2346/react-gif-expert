import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 0) {
      //setCategories([...categories, inputValue]);
      onNewCategory(inputValue.trim());
      setInputValue("");
    }
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={inputValue}
          placeholder="Buscar gifs"
          onChange={onInputChange}
        />
      </form>
    </>
  );
};

export default AddCategory;
