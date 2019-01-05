import React from "react";
import ListingsCard from "./ListingsCard"

export default class CurrentListings extends React.Component{
  render (){
    return <div className="listings">
              <h2> Current Listings </h2>
              <ListingsCard
                listing={{imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf7WxfwOSq6dfa6f9k617Z6UgC_UjDiBGOjBQjvEfas9gUUIch",
              phone:"(443) 515-7044",email:"warenoir@gmail.com"}}
              />
          </div>

  }
}
