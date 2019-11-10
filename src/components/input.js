import React from 'react';

const Input = props =>{
    return(
        <React.Fragment>
        <input type={props.type} onChange={props.changed}></input>
        </React.Fragment>
    )
}

export default Input;
