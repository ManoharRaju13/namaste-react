
import React from "react";
import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root"));

//Functional Component using return in Arrow functions.
const Title =  (
    <h1>I am  a React Element in side a React functional component  </h1>
);
const Subtitle = () => (
    <h1>I am a functional component inside a componet : Functional composition</h1>
);

// with out using return in Arrow functions and also functional composition.
const Heading = () => (
    <div id="container">
    {Title}
    <Subtitle/>
    <h1>I am a Heading componet</h1>
    </div>
);
root.render(<Heading/>);