export const Header = ({changeHandler,searchValue }) => {
  return (
    <header id="header" className="header d-flex align-items-center">
      <div className="container-fluid container">
        <div className="row">
          <div className="col-md-4 company-logo">
            <img
              className="img-responsive"
              src="https://howtodrawforkids.com/wp-content/uploads/2022/01/how-to-draw-a-tomato.jpg"
              alt="headerImage"
            />
            <div className="header-text">
              <p>CookWell</p>
              <span>by Devexperts</span>
            </div>
          </div>
          <div className="col-md-8 search-bar">
            <div className="filter-input">
              <span>Filter Ingredients</span>
              <input
                type="text"
                className="form-control  float-md-right"
                id="searchValue"
                name="searchValue"
                value={searchValue}
                onChange={changeHandler}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
