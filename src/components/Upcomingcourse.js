import React from "react";
import '../styles/card.css';


function Upcomingcourse(props){
    return( <div className="card">
    <div className="card-top">
    <img src={props.img} alt="web_development"/>
    </div>
    <div className="card-bottom">
        <h2>{props.caption1}<br/>{props.caption2}</h2>
    </div>
    <div className="h"></div>
    <div className="bt1">
        <p className="price"><b>{props.price1}</b></p>
        <p className="price-off"><b><s>{props.price2}</s></b></p>
        <p className="discount1"><b>{props.dis}</b></p>
    </div>
</div>

    );
}

export default Upcomingcourse;