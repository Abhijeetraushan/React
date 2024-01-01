import React from 'react';
import ReactDOM from 'react-dom/client';

// const heading=React.createElement("h1",{},"Namste React , this is rendered")

// const heading=<h1>Namaste mate, 
// JSX is compiled by babel is not
// </h1> 

const Heading=()=>(<h1>Helllo this is abhijeet</h1>);

const HeadingComponent=()=>(
<div><h1>
This is react functionl component
</h1>
<Heading/>
</div>);

root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<HeadingComponent/>);