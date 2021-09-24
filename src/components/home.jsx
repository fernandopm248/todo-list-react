import React, { useState } from "react"
import img from '../images/dark.jpg'
import './home.css'
import styled from "styled-components"
import'./geral.css'
import Foot from "./foot"
import Sun from "./sun"
import Moon from "./moon"
import img2 from '../images/light.jpg'




export default function Home(){
    const [mode,setMode] = useState()
    const [tarefa,setTarefa] = useState([])
    console.log(tarefa)

    const Container = styled.div`
background-repeat: no-repeat;
display:flex;
justify-content: center;


background-image: url(${mode? img2: img } ) ;
height: 100vh;
background-color:${mode?"white": "black"} ;
`

    function Enter(e) {
        if(e.key === "Enter")
            setTarefa([...tarefa, e.target.value])
            console.log("enter")
    }

   

    function changeMode() {
        if(mode == false){
            setMode(true)
        }else{
            setMode(false)
        }



    }


    return(
        <Container>
        <div className="contents">
           
                <div className="header">

                 <span className="todo">t o d o</span>

                 <button onClick={changeMode} className="sol">{mode? <Moon/> : <Sun/>}</button>   

                </div>
                <div className="newtodo">
                    <input type='text' placeholder="create new todo" onKeyUp={(e) => Enter(e)} />




                </div>
                <Foot novaTarefa={tarefa}/>
             



                </div>


              



            

        </Container>
       





    )





}