import React, { useState } from 'react';
import "./cards.css"
function Card(props) {

          
    return (

        <div className="cardDiv">
            <div className="imageSection">
                <img className="thummbnail" src={props.Thumbnail} onClick={()=>props.showThumbnail(props.id)} alt="" />
            </div>
            <div className="infoSection">
                <div className="name">
                    <h3 className="nameField">{props.Name.title} {props.Name.first} {props.Name.last}</h3>
                </div>
                <div className="otherInfo">
                    <div className="left">
                        <div className="email">
                            <p className="otherFields">{props.Email}</p>
                        </div>
                        <div className="phone">
                            <p className="otherFields">Contact No: {props.Phone}</p>
                        </div>
                    </div>
                    <div className="right">

                        <div className="gender">
                       
                            <p className="otherFields">Gender: {props.Gender}</p>
                        </div>
                        <div className="nationality">
                            <p className="otherFields">Country: {props.Country}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card