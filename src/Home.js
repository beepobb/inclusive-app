import React from "react";
import Card from "./Card";

const Home = () => {
  const cardData = {
    title: "Scenario Title",
    content: "This is some example content for the card.",
  };
  const forum = {
    title: "Title",
    content: "This is some example content for the card.",
  };

  return (
    <div>
      <h1>Hello, beepobb</h1>
      <Card title={cardData.title} content={cardData.content} />
      <h1>Spotlight</h1>
      <Card title={forum.title} content={forum.content} />
    </div>
  );
};

export default Home;
