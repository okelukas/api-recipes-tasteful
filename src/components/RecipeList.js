import { Link, Outlet, useNavigate } from "react-router-dom";
import useContentful from "../useContentful";
import { List } from "semantic-ui-react";

import { useEffect } from "react";

export default ({ recipes, setQuery, setRecipes }) => {
  const { getRecipe } = useContentful();
  const navigate = useNavigate();

  /*  useEffect(() => {
      getRecipe().then((response) => setRecipes(response));
  }, []);
  console.log(recipes); */

  return (
    <>
      <div className="grid-container">
        <div className="grid-item">
          {
            <>
              <div className="ui middle aligned selection list">
                {recipes &&
                  recipes.map((recipe) => (
                    <div className="item" key={recipe.id}>
                      <img class="ui avatar image" src={recipe.image}></img>
                      <Link
                        to={`/RecipeList/${recipe.title}`}
                        className="black"
                        style={{ paddingLeft: "10px" }}
                      >
                        {recipe.title}
                      </Link>
                    </div>
                  ))}
              </div>
              <button
                class="ui button"
                id="button"
                onClick={(e) => {
                  navigate("/RecipeList");
                  setQuery("");
                  
                }}
              >
                Show all
              </button>
            </>
          }
          <Outlet />
        </div>
      </div>
    </>
  );
};
