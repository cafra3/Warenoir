import React from 'react';

function ListingsCard (props){
  return(
    <div className="listings-card">
        <img src={props.listing.imgUrl}/>
        <p>Area: Towson, MD</p>
        <p>Long Term Storage: $10 per week per bag</p>
        <p>Short Term Storage: $10 per day per</p>
        <p>Phone: {props.listing.phone}</p>
        <p>Email: {props.listing.email}</p>

    </div>
  )
}
export default ListingsCard
