import React from "react";

export default function InputLabel({ children, margin=0, fontSize='14px'}){
    const style = {
        marginBottom: margin,
        fontSize
    };

    return (
        <div style ={style}>{children}</div>
    );
}