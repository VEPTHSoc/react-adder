import React from 'react';

const Button = (props)=>{
    return(
        <React.Fragment>
            <button onClick={props.clicked}>{props.children}</button>
        </React.Fragment>
    )
}

export default Button;