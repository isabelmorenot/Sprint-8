import React, { useState,useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
    Container,
    DetailsContainer,
    FeaturesContainer, 
    Left, 
    Right,
    BoxDetails,
    PilotsAndFilms,
} from "./fichasStyles";
import Pilots from "./Pilots/pilots";
import Films from "./Films/films";

const Fichas = () => {
    const {id} = useParams();
    const [getNaveId, setGetNaveId] = useState([]);
    console.log(getNaveId)
    useEffect(() => {
        const obtenerNave = async () =>{
            const url = `https://swapi.dev/api/starships/${id}/`;
            const result = await axios.get(url);
            setGetNaveId(result.data);
        }
        obtenerNave();
    },[id, getNaveId]);
    const [imageId, setImageId] = useState(`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`)
    //console.log(imageId);
    return (
            <Container>
                <div className="sub-main">
                    <div className="box">
                        <img src={imageId} alt={`${getNaveId.name}`} />
                        <DetailsContainer>
                            <FeaturesContainer>
                                <Left>
                                    <h2>Name: {getNaveId.name}</h2>
                                    <p>Model: {getNaveId.model}</p>
                                    <p>Manufacturer: {getNaveId.manufacturer}</p>
                                    <p>Class: {getNaveId.starship_class}</p>
                                    <p>Cost: {getNaveId.cost_in_credits} credits</p>
                                </Left>
                                <Right>
                                    <p>Speed: {getNaveId.max_atmosphering_speed}</p>
                                    <p>Hyperdrive Rating: {getNaveId.hyperdrive_rating}</p>
                                    <p>MGLT: {getNaveId.MGLT}</p>
                                    <p>Length: {getNaveId.length}</p>
                                    <p>Passengers: {getNaveId.passengers}</p>
                                </Right>
                            </FeaturesContainer>
                        </DetailsContainer>
                        <PilotsAndFilms>
                            <BoxDetails>
                                <Pilots pilotsArray={getNaveId.pilots}></Pilots>
                            </BoxDetails>
                            <BoxDetails>
                                <Films shipFilms={getNaveId.films}></Films>
                            </BoxDetails>
                        </PilotsAndFilms>
                    </div>
                </div>
            </Container>
    )
};

export default Fichas;
