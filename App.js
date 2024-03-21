
/*
    <div class="parent">
    <div class="child1">
            <h1>Hello 1</h1>
            <h2>Hello 2</h2>
        </div>    
    <div class="child2">
            <h1>Hello 1</h1>
            <h2>Hello 2</h2>
        </div>
    </div>
*/
const parent = React.createElement("div", 
{className:"parent"}, 
[React.createElement("div", 
{className:"child1"}, 
[React.createElement("h1", 
{}, 
"Hello 1"), React.createElement("h2", 
{}, 
"Hello 2")]), React.createElement("div", 
{className:"child2"}, 
[React.createElement("h1", 
{}, 
"Hello 1"), React.createElement("h2", 
{}, 
"Hello 2")])]);
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(parent);