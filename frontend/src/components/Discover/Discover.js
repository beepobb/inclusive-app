import React from "react";
import "./Discover.css";
import DeafultLayout from "../Layout/layout";
import Scenario from "../Card/Scenario";
import image1 from "../../assets/img1.png";
import image2 from "../../assets/img2.png";


export default function Discover() {
    return (
        <DeafultLayout>
            <div className="scenario">
                <h1>Inclusivity Rush</h1>
                <div className="scenario-container">
                    <Scenario 
                        image={image2} 
                        title="Welcoming a New Team Member"
                        content="A new team member has joined, and you want to make them feel welcome. What can you do to help them integrate smoothly?"
                        options={['Show them around, introduce to the team.', 'Invite them to join a team lunch.']} 
                    />
                    <Scenario 
                        image={image1} 
                        title="Encouraging Diverse Perspectives" 
                        content="You notice quieter team members rarely share ideas. How can you encourage them?"
                        options={['Directly ask for their input in meetings.', 'Create anonymous suggestion boxes.']} 
                    />
                </div>
            </div>
        </DeafultLayout>
    );
}
