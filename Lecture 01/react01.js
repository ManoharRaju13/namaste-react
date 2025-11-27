const root = ReactDOM.createRoot(document.getElementById("root"));
const parent = React.createElement(
    "div",
    {id : "parent"},
    [React.createElement(
        "div",
        {id : "child01"},
        [React.createElement("h1", {}, "Iam h1 tag"), React.createElement("h2", {}, "Iam h2 tag")]
    ),
    React.createElement(
        "div",
        {id : "child02"},
        [React.createElement("h1", {}, "Iam h1 tag"), React.createElement("h2", {}, "Iam h2 tag")]
    )]
);
root.render(parent);
