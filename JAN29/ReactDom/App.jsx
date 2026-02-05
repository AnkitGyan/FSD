console.log("Hiii")
const parent = document.getElementById('container');
const root = ReactDOM.createRoot(parent);
const h2 = React.createElement("h2", {}, "welcome to React dev");
const li1 = React.createElement("li", {}, "java programming");
const li2 = React.createElement("li", {}, "python programming");
const ul = React.createElement("ul", {}, [li1, li2]);
const div = React.createElement("div", {}, h2, ul);
root.render(div);