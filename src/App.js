// Import Components
import { Header } from './components/header/Header';
import { RecipesList } from './components/recipes/RecipesList';
// Import Default
import { useEffect, useState } from 'react';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const changeHandler = (e) => {
    setSearchValue(e.target.value);
  };

  const [recipesList, setRecipesList] = useState([]);
  useEffect(() => {
    fetch('https://api.jsonbin.io/v3/b/62d56dbd5ecb581b56c3e44d')
      .then((response) => response.json())
      .then((result) => {
        setRecipesList(result.record.recipes);
      });
  }, []);
  const recipesListFilter = [];
  for (let i = 0; i < recipesList.length; i++) {
    for (let y = 0; y < recipesList[i].ingredients.length; y++) {
      if (recipesList[i].ingredients[y].includes(searchValue)) {
        recipesListFilter.push(recipesList[i]);
        break;
      }
    }
  }
  return (
    <div className="App">
      <Header changeHandler={changeHandler} />
      <RecipesList recipesList={recipesListFilter} />
    </div>
  );
}
export default App;
