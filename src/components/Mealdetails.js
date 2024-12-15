import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Mealdetails = () => {
    const {id}=useParams()
    console.log(id);
    const[mealdata,setmealdata]=useState([])

    useEffect(()=>{
        axios.get(`http://localhost:8000/restmenu?mealType=${id}`)
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            setmealdata(res.data)
        }).catch((e)=>{
            console.log(e);
        })
    },[id])
    return (
        <div>
            <h1>Meal Details</h1>
            {
            mealdata.map((item)=>{
                return(
                    <>
                    <div>
                    <div><img src={item.restaurant_thumb} alt="img1" height="300px" width="300px"/></div>
                    <b>Restaurant Name: </b>{item.restaurant_name}<br/>
                    <b>Average rating: </b>{item.average_rating}<br/>
                    <b>Address: </b>{item.address}<br/>
                    </div>                    
                    </>
                )
            })
            }
        </div>
    );
}

export default Mealdetails;
