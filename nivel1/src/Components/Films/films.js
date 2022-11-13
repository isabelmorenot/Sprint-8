import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import {Box} from "../fichasStyles";
import { Button } from "../../generalStyles";

const Films = (props) => {
    const [filmsArray, setFilmsArray] = useState([]);
    const [films, setFilms] = useState([]);

    useEffect(() => {
        const result = filmsArray.map(film => axios.get(film))
        Promise.all(result)
        .then(res => setFilms(res.map(r=> r.data)))
        console.log(films)
    },[filmsArray])

    const [active, setActive] = useState(false)
    const [filmsButton, setFilmsButton] = useState('Show Films')

    const handleClick = () => {
        setActive(!active);
        setFilmsButton(active? 'Show Films' : 'Hide Films');
        
        if (filmsButton ==='Show Films') {
            setFilmsArray(props.shipFilms)
        } else{
            setFilmsArray([])
        }
     }

    return(
        <>
        <Button onClick={handleClick}>{filmsButton}</Button>
        {films.map((film, index) => 
            <div key={index}>
                <Box>
                    <p>Director: {film.director}</p> 
                    <p>Producer: {film.producer}</p>
                    <p>Title: {film.title}</p> 
                    <p>Episode: {film.episode_id}</p> 
                    <p>Created: {film.created}</p> 
                    <p>Opening: {film.opening_crawl}</p>  
                    <p>Release date: {film.release_date}</p> 
                    <p>Edited: {film.title}</p>
                </Box>
            </div>
        )}
        </>
    )
}
export default Films;