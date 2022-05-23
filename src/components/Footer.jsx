import React from "react";
import Test from "./Test";


const Footer = (props) =>{
    return(
        <div>
            
            <p>Hello shaghayegh</p>
            <h2>address : {props.address}</h2>
            <h2>pelak : {props.pelak}</h2>
            <Test date={props.date} />
        </div>
    )
}


export default Footer;