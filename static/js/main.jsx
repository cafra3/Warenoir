import React from "react"
import image from './background.png'
// const mainstyle = {
//   backgroundImage: url("./background.png")
//   backgroundColor:"blue"
// }

const mainstyle = {
  backgroundImage: 'url('+image+')',
  height: '500px',
  textAlign: 'center',
  padding: '200px 0',
  color: 'white'
}
const noirstyle = {
    textDecoration: 'underline yellow'
// borderBottom: '1px solid yellow',
// paddingBottom: '3px'
}

function Main() {

    return(
    <div style={mainstyle}>
    =
        <h2 style={noirstyle}>Ware Noir</h2>
      

      <h1>Store Cheaper</h1>
    </div>

)
}

export default Main
