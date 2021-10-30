import React from "react";

function Input(props){
    return(
        <div>
            <input
            type={props.type} 
            placeholder={props.placeholder} 
            id={props.id} name={props.name} 
            autoComplete={props.autoComplete} 
            value={props.value}
            />
        </div>
    );
}

export default Input;