import React from 'react';
import Footer from './Footer';




const Header = (props) => {
    
    return (
        <div>
            <h1>Header Component</h1>
            <h2>{props.name}</h2>
            <Footer address={props.address} pelak={props.pelak} date={props.date} />
        </div>
    )
};

export default Header