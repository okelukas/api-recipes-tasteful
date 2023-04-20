import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Segment, Image, List } from "semantic-ui-react";

export default ({ recipes }) => {
  const { title } = useParams();
  const [recentRecipe, setRecentRecipe] = useState("");

  useEffect(() => {
    recipes?.filter((e) => {
      if (e?.title === title) {
        setRecentRecipe(e);
      }
    });
  }, [title, recipes]);

  // console.log(recipes)

  return (
    <>
      <Segment>
        <Image src={recentRecipe.image} size="medium" floated="left" />
        <h1>{recentRecipe.title}</h1>
        <List>
          {recentRecipe.ingredients &&
            recentRecipe.ingredients.map((i, index) => (
              <li>{recentRecipe.ingredients[index]}</li>
            ))}
        </List>
        <h2>Steps</h2>
        <p>{recentRecipe.steps}</p>
      </Segment>
      {/*       <Outlet />
       */}{" "}
    </>
  );
};
