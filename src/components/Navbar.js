import { NavLink } from "react-router-dom";
import Searchbar from "./Searchbar";

export default function iNavbar({ query, setQuery, recipes }) {
  // console.log({ recipes });
  return (
    <nav className="nav">
      <NavLink to="/" className="site-title">
        Tasteful.
      </NavLink>
      <Searchbar query={query} setQuery={setQuery} recipes={recipes} />
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/About">About</NavLink>
        </li>
        <li>
          <NavLink to="/RecipeList" onClick={(e) => setQuery("")}>
            Recipes
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
