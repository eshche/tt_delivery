import React from "react";

export default function Input({onChange, value, color = 'black'}){
    const style = {
        border: '1px green solid',
        borderRadius: '15px',
        outline: 'none',
        color
    };
    return <input type="text" style={style} onChange={onChange} value={value}/>
}