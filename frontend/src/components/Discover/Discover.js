import React from "react";
import Card from "../Card/Card";
import "./Discover.css";
import DeafultLayout from "../Layout/layout";

const cardData = {
    title: "Card Title",
    content: "This is some example content for the card.",
    options: [
        { label: "Option 1", onClick: () => alert("Option 1 selected") },
        { label: "Option 2", onClick: () => alert("Option 2 selected") }
    ]
};

const cardData2 = {
    title: "Card Title 2",
    content: "This is some example content for the second card.",
    options: [
        { label: "Option 1", onClick: () => alert("Option 1 selected") },
        { label: "Option 2", onClick: () => alert("Option 2 selected") }
    ]
};

export default function Discover() {
    return (
        <DeafultLayout>
            <div className="scenario">
                <h1>Explore Scenarios</h1>
                <div className="scenario-container-row">
                    <Card title={cardData.title} content={cardData.content} options={cardData.options} />
                </div>
                <div className="scenario-container-row">
                    <Card title={cardData2.title} content={cardData2.content} options={cardData2.options} />
                </div>
            </div>
        </DeafultLayout>
    );
}
