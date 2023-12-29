const heading=React.createElement("div",{id:"parent"},
React.createElement("div",{id:"child"},
[React.createElement("h1",{id:"heading"},"how are you doing"),React.createElement("h2",{id:"parent"},"if you want to craete sibling elment than club them as an array")]))

const root=ReactDOM.createRoot(document.getElementById("root"))

root.render(heading)