import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form1 = () => {
    const[username,setusername]=useState()
    const[email,setemail]=useState()
    const[password,setpassword]=useState()
    const[selectvalue,setvalue]=useState()
    const navigate=useNavigate()


    const handledata=(event)=>{
        event.preventDefault();
        axios.post('http://localhost:8000/reactform',{
            _id:Math.floor(Math.random() * 100),
            username:username,
            email:email,
            password:password,
            gender:selectvalue
        }).then((response)=>{
            console.log(response.data);
            console.log(response.status);
            console.log(response.statusText);
            if(response.statusText==='OK')
                alert("submiited")  
            navigate('/')
        }).catch((e)=>{
            console.log(e);
        })
    }

    return (
        <>
            
            <h1>Form data</h1>
            <form onSubmit={handledata}>
                <label>Usename</label>
                <input type="text" value={username} onChange={(e)=>setusername(e.target.value)} required/><br/>
                <label>Email</label>
                <input type="email" value={email} onChange={(e)=>setemail(e.target.value)}/><br/>
                <label>password</label>
                <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)} required/><br/>
                <label>Select Gender: </label><br/>
                <input type="radio" value="Male" checked={selectvalue==='Male'} onChange={(e)=>setvalue(e.target.value)}/>Male
                <input type="radio" value="Female" checked={selectvalue==='Female'} onChange={(e)=>setvalue(e.target.value)}/>Female<br/>
               <input type="submit" value="Button"/>
            </form>
        </>
    );
}

export default Form1;
