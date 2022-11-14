import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import {Box} from "../fichasStyles";
import {Button} from "../../generalStyles";

const Pilots = (props) => {

    const [getPilots, setGetPilots] = useState([]);
    const [pilots, setPilots] = useState([]);


    useEffect(() => {
        const promiseResult = getPilots.map(pilots => axios.get(pilots))
        Promise.all(promiseResult)
        .then(res => setPilots(res.map(r=> r.data)))
        console.log(pilots)
    },[getPilots])

    const [active, setActive] = useState(false)
    const [pilotsButton, setPilotsButton] = useState('Show Pilots')

    const handleClick = () => {
        setActive(!active);
        setPilotsButton(active? 'Show Pilots' : 'Hide Pilots');
        
        if (pilotsButton ==='Show Pilots') {
            setGetPilots(props.pilotsArray)
        } else{
            setGetPilots([])
        }
     }
     
   
    return(
        <>
        <Button onClick={handleClick}>{pilotsButton}</Button>
        {pilots.map((pilot, index) => 
            <div key={index}>
                <Box>
                    <p >Name: {pilot.name}</p> 
                    <p >Gender: {pilot.gender}</p> 
                    <p >Birth: {pilot.birth_year}</p> 
                    <p >Height: {pilot.height}cm</p>
                    <p >Hair-color: {pilot.hair_color}</p> 
                    <p >Eyes-color: {pilot.eye_color}</p>  
                    <p >Skin-color: {pilot.skin_color}</p> 
                    <p >Created: {pilot.created}</p> 
                    <p >Edited: {pilot.edited}</p> 
                </Box>
            </div>
        )}
       </>
    )
}



export default Pilots;