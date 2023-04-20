import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Searchbar = ({ setQuery, recipes, query }) => {
  const queryRef = useRef();
  const navigate = useNavigate();
  const hello = recipes[0];

  const handleSubmit = (event) => {
    event.preventDefault();
    setQuery(queryRef.current.value);
    queryRef.current.value = "";
    navigate(`/RecipeList/${hello.title}`);
  };



  return (
    <>
      <div className="right menu">
        <form onSubmit={handleSubmit}>
          <div className="ui small action input">
            <input type="text" placeholder="Search recipes" ref={queryRef} />

            <button
              type="submit"
              className="ui button"
              id="button"
              /*  onClick={(e) => {
                navigate(`/RecipeList/${hello.title}`)}} */
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Searchbar;
