import React, { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({setCategories}) => { // props destructurado
  const handleAdd = (e) => {
    e.preventDefault();
    setCategories( cats => [newCategory, ...cats]); // no es necesario llamar a categories ya que setCategories tiene este callback 
    setNewCategory(" ")
  };

  const [newCategory, setNewCategory] = useState('');

  return (
    <form onSubmit={handleAdd}>
      <input
        type="text"
        value={newCategory}
        onChange={(e) => setNewCategory(e.target.value)}
      />
      <button>Add Category</button>
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
