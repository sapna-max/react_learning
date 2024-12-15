import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditForm = () => {
    const {id}=useParams();
    const navigate=useNavigate()
    const [alldata,setalldata]=useState([])
    console.log(id);
    // console.log(userId.id);
console.log(alldata);
    useEffect(()=>{
        axios(`http://localhost:8000/getdata/${id}`)
        .then((res)=>{
            // console.log(res.data);
            setalldata(res.data[0])
        }).catch((e)=>{
            console.log(e);
        })
    },[id])

    const handlesubmit=(e)=>{
e.preventDefault();
        axios.put(`http://localhost:8000/updatedata/${id}`,alldata)
        .then((res)=>{
            console.log(res);     
            alert("Updated!....")    
            navigate('/') 
        }).catch((e)=>{
            console.log(e);
        })
    }

    // var a=[10,20,30]
    // var b=[...a,100,200];
   
    // console.log(a);
    // console.log(b);

    // var a={username:"sap21",mobile:123,address:"kharghar"}
    // var b={...a,username:"aptech"}
    // a.username="seema"
    // console.log(a);
    // console.log(b);


    return (
        <div>
            <h1>Edit Form</h1>
            <form onSubmit={handlesubmit}>
                <label>Usename</label>
                <input type="text" value={alldata.username} onChange={(e)=>setalldata({...alldata,username:e.target.value})}/><br/>
                <label>Email</label>
                <input type="email" value={alldata.email} onChange={(e)=>setalldata({...alldata,email:e.target.value})}/><br/>
                <label>password</label>
                <input type="password" value={alldata.password} onChange={(e)=>setalldata({...alldata,password:e.target.value})}/><br/>
                <label>Select Gender: </label><br/>
                <input type="radio" value="Male" checked={alldata.gender==='Male'} onChange={(e)=>setalldata({...alldata,gender:e.target.value})}/>Male
                <input type="radio" value="Female" checked={alldata.gender==='Female'} onChange={(e)=>setalldata({...alldata,gender:e.target.value})}/>Female<br/>
               <input type="submit" value="Button"/>
            </form>
        </div>
    );
}

export default EditForm;
