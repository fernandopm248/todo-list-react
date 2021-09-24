import React from "react";
import './list.css'

export default function List(props){
    return(
        <div className="list">
            <div className="checkbox"></div>
            <span className="tarefa">{props.tarefa}</span>
        </div>



    )


}