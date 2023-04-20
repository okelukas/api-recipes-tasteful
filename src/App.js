import { useEffect, useState } from "react";
import useContentful from "./useContentful";
import { Routes, Route, useParams } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import RecipePage from "./components/RecipePage";
import RecipeList from "./components/RecipeList";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
  let { title } = useParams();
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState();
  const { getRecipe } = useContentful();

  useEffect(() => {
    getRecipe(query).then((response) => setRecipes(response));
  }, [query]);

  // console.log(recipes);

  return (
    <>
      <div className="App">
        <Navbar query={query} setQuery={setQuery} recipes={recipes} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/RecipeList"
            element={
              <RecipeList
                setRecipes={setRecipes}
                recipes={recipes}
                setQuery={setQuery}
              />
            }
          >
            <Route path={`:title`} element={<RecipePage recipes={recipes} />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

export const getSingleRecipe = async (id) => {};
