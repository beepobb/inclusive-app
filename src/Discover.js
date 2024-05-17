import React from "react";
import Card from "./Card";
import "./Discover.css";

const cardData = {
    title: "Card Title",
    content: "This is some example content for the card."
};

const cardData2 = {
    title: "Card Title 2",
    content: "This is some example content for the second card."
};


export default function Discover(){
    const handleClickCard = (n) => {
        alert(`You clicked on card ${n}`);
    };

    return(
        <div className="scenario">
            <h1>Explore Scenarios</h1>
            <div className="scenario-container-row">
                <Card onClick={() => handleClickCard("1")} title={cardData.title} content={cardData.content}/>
                <Card onClick={() => handleClickCard("2")} title={cardData2.title} content={cardData2.content}/>
            </div>
            <div className="scenario-container-row">
                <Card onClick={() => handleClickCard("1")} title={cardData.title} content={cardData.content}/>
                <Card onClick={() => handleClickCard("2")} title={cardData2.title} content={cardData2.content}/>
            </div>
        </div>
    );
}