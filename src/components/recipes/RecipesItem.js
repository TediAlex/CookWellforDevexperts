// Import Default
import { useState } from 'react';

export const RecipesItem = ({
  productKey,
  title,
  timeToPrepare,
  imageUrl,
  ingredients,
  preparationMethod,
}) => {
  const [isActive, setIsActive] = useState(null);
  const getMoreDetails = () => {
    setIsActive((current) => !current);
  };
  const closeOverlay = () => {
    setIsActive((current) => !current);
  };

  return (
    <>
      <div className="wrapper-section">
        <h4>{title}</h4>
        <span>{timeToPrepare}</span>
        <img src={imageUrl} alt={title} />
        <div>
          <ul className="ingredients">
            {ingredients.length > 0 ? (
              ingredients.map((x, i) => <li key={i + productKey}>{x}</li>)
            ) : (
              <p>No have ingredients</p>
            )}
          </ul>
        </div>
        <div className="more-details" onClick={getMoreDetails}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-up-right-square"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"
            />
          </svg>
        </div>
      </div>
      <div className={isActive ? 'overlay isActivOverlay' : 'overlay'}>
        <div className="overlay-close" onClick={closeOverlay}></div>
        <div className="text">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            onClick={closeOverlay}
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-x"
            viewBox="0 0 16 16"
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
          <ol>
            {preparationMethod.length > 0 ? (
              preparationMethod.map((x, i) => <li key={i}>{x.text}</li>)
            ) : (
              <p>No have preparation method</p>
            )}
          </ol>
        </div>
      </div>
    </>
  );
};
