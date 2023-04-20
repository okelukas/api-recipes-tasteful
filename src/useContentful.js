import { createClient } from "contentful";

const useContentful = () => {

    const client = createClient({
      space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
      accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
      host: "preview.contentful.com",
    });

    const getRecipe = async (query) => {
      try {
        const entries = await client.getEntries({
          content_type: "recipe",
          select: "fields,sys",
          order: "fields.title",
          "fields.title[match]": query,
        });
        return entries.items.map((item) => sanitizeRecipe(item));
      } catch (error) {
        console.log(`Error fetching recipes: ${error}`);
      }
    };

    const sanitizeRecipe = (recipe) => {
      //console.log(recipe);
      const cleanRecipe = {
        ...recipe.fields,
        id: recipe.sys.id,
        image: recipe.fields.photoMeal.fields.file.url,
      };
      //console.log(cleanRecipe)

      return cleanRecipe;
    };

    return { getRecipe };
  }
;

export default useContentful;
