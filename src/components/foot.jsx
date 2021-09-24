import './foot.css'
import React, { useState } from 'react'
import List from './list'
import { Fragment } from 'react/cjs/react.production.min'

export default function Foot({novaTarefa}) {

    
    const [card,Setcard] = useState({})


 
    

    
    console.log(card)

    return (
       
        <Fragment> 
        
            <div className='list-cont'>
            {novaTarefa.map((atribute) => {
            return(
                <List tarefa={atribute}/>
                

                
            )


        })}

               
                <div className="foot">
                    <span>total items</span>
                    <span>all active completed</span>
                    <span>clear completed</span>
                </div>
            </div>
        </Fragment>
    )





}