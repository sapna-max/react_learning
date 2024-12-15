import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'


const Location = () => {
    const [locationurl,setlocation]=useState([])
    const [resturl,setrest]=useState([])
    const [searchmenu,setmenu]=useState([])
    const [restall,setrestall]=useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/location')
    .then((res)=>{
        console.log(res.data);
        setlocation(res.data)
    }).catch((e)=>{
        console.log(e);
    })
},[])


useEffect(()=>{
    axios.get('http://localhost:8000/quicksearch')
.then((res)=>{
    console.log(res.data);
    setmenu(res.data)
}).catch((e)=>{
    console.log(e);
})
},[])

const handleCity=(event)=>{
    console.log(event.target.value);
    const stateId = event.target.value;
    axios.get(`http://localhost:8000/restaurant/${stateId}`)
    .then((res)=>{
        console.log(res.data);
        setrest(res.data)
    }).catch((e)=>{
        console.log(e);
    })
}

const restdetials=(event)=>{
    console.log(event.target.value);
    const id=event.target.value
    axios.get(`http://localhost:8000/restall/${id}`)
    .then((res)=>{
        console.log(res.data);
        setrestall(res.data)
    }).catch((e)=>{
        console.log(e);
    })
}

    return (     
        <> 
        <div>
          <select onChange={handleCity}>
            <option>---SELECT LOCATION---</option>
            {
                locationurl.map((item)=>{
                    return(
                        <>
                       <option value={item.state_id} key={item.state_id}>
                        {item.state}
                      </option>
                        </>
                    )
                })
            }
          </select> 

             <select onChange={restdetials}>
             <option>----------SELECT restaurant------------</option>
                {
                  resturl.map((item)=>{
                    return(
                        <>
                        <option value={item.restaurant_id}>
                            {item.restaurant_name} | {item.address}
                        </option>
                        </>
                    )
                  })  
                }
            
          </select>  
          <div>

            </div>  
            {
                restall.map((item)=>{
                    return(
                        <>
                        <img src={item.restaurant_thumb} alt="img1" height="300px" width="300px"/><br/>
                        {item.restaurant_name}<br/>
                        {item.address}<br/>
                        {item.average_rating}<br/>
                        {item.rating_text}<br/>
                        {item.contact_number}<br/>
                        {
                        item.image_gallery.map((item)=>{
                            return(
                                <>
                                <img src={item} alt="imu" height="100px" width="100px"/>
                                </>
                            )
                        })
                    }
                        
                        
                        </>
                    )
                })
            }


            <div>  
                <br/>
                <hr/>   
            {
                searchmenu.map((item)=>{
                    return(
                         <>
                            <div>
                                <Link to={`/mealdetails/${item.mealtype_id}`}><img src={item.meal_image} alt="img1"/></Link>
                                <div>
                                    {item.mealtype}<br/>
                                    {item.content}
                                </div>
                            </div>
                         </>
            )
        })
             }
            </div>

        </div>    
        </>  
    );
}

export default Location;
