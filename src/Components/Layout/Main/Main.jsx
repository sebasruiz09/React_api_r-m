import React, { useEffect, useState } from 'react';
import './Main.css';
import { Select } from "../../UI/Select/Select";
import { Card } from "../../UI/Card/Card";


export const Main =()=>{

    useEffect(() =>{
        Fetch_URL()
    },[])

    const [data, setData] = useState([{name:' ',image:'',gender:' '}]);
    const [dato, setDato]=useState({name:' ', image:' ',gender:' '}) 
    const URL = 'https://rickandmortyapi.com/api/character/';

    const Fetch_URL=()=> { 
        fetch(URL)
        .then(response=>response.json())
        .then(data=>setData(data.results))
    }
    const Cards =(event)=>{
        data.map(element=>{
            if (event.target.value == element.id){
                setDato(element);
            }
        })
    }


    
    return(
        <>
            <main className="Main">
                <Select datos={data} evento={Cards}/>
                <Card data={dato}></Card>
            </main>
        </>
    );
}