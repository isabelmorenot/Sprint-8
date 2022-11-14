import React, {useState,useEffect} from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { NavesStyle } from "./navesStyles"
import { Button } from "../generalStyles"
//import InfinityScroll from 'react-infinite-scroll-component'

function NavesSW () {

    const [naves,getNaves]=useState([]);
    const [page,setPage] = useState(1);

    useEffect(() =>{

        const obtenerNaves = async () =>{
            const url = `https://swapi.dev/api/starships/?page=${page}`;
            const result =  await axios.get(url);
            console.log(result.data.results);
            getNaves (result.data.results);    
                    
        }
        obtenerNaves();

    },[page]);
    console.log(getNaves);

    return(
        <NavesStyle>
            <ul>
                {naves.length === 0 && <p>Cargando...</p>}
                {
                    naves.map((nave,index)=>{
                        const id = nave.url.split('/').slice(-2,-1).toString();
                        console.log(id);
                        return(
                            <li key={index}>
                                <Link to={`/fichas/${id}`} >
                                    <h3>Nave: {nave.name}</h3>
                                </Link>
                                <p>Model: {nave.model}</p>
                            </li>
                        )
                    })
                }
            </ul>
            <div className="buttons">
                <Button className='button' onClick={()=> setPage(page > 1? page - 1: page)}>BACKWARD</Button>
                <Button className='button' onClick={()=> setPage(page < 4? page + 1: page)}>FORWARD</Button>
            </div>
        </NavesStyle>

    )
}
export default NavesSW;

