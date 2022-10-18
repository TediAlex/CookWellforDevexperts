// Import Components
import { RecipesItem } from './RecipesItem';

export const RecipesList = ({ recipesList }) => {
  return (
    <section>
      <div className="container">
        <ul className="list-recipes">
          {recipesList.length > 0 ? (
            recipesList.map((x) => (
              <li key={x.id + x.title}>
                <RecipesItem
                  productKey={x.id}
                  title={x.title}
                  timeToPrepare={x.timeToPrepare}
                  imageUrl={x.imageUrl}
                  ingredients={x.ingredients}
                  portions={x.portions}
                  preparationMethod={x.preparationMethod}
                />
              </li>
            ))
          ) : (
            <p>No have recipes</p>
          )}
        </ul>
      </div>
    </section>
  );
};
