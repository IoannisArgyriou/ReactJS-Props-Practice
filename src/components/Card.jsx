import React from "react";

function Card(props){
    return(
    <div className="card">
        <img src={props.img} className="ted" alt="tedesco"/>
        <div className="card-stats">
            <img src="./images/star.png" className="star" alt="star"/>
            <span>{props.rating}</span>
            <span className="gray">{props.reviewCount}. </span>
            <span className="gray">{props.country}</span>
        </div>
        <p>{props.title}</p>
        <p><b>From {props.price}$</b> / person</p>
    </div>);
}

export default Card;