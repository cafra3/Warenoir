import React from "react"
import image from '../background.png'
import Style from '../style.css'
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


function Main() {

    return(
    <div style={mainstyle}>
      <div className="share-style">
        <h2>Storackk</h2>
        <h1>Store Cheaper</h1>
      </div>
    </div>

)
}

export default Main
