import React from 'react'
const App = ()=> {
let text="name"
const handleClick=()=>{
return "button clicked"
}
let age=20
return (
  <div>
    <h1>welcome to CSBS</h1>
<p>fullstack developer</p>
<p>hi {text}</p>
<p style={{color: 'blue' }}>multiplication {5*10}</p>
<h1>{handleClick()}</h1>
<h1>{(age>18)?"eligible":"not eligible"}</h1>
<div className=" text-red-500 flex flex-row-1 gap-4">
<h1>Hello, World !</h1>
<h2>Welcome to React !</h2>
<h3>tailwind css</h3>
</div>
</div>)
}


export default App