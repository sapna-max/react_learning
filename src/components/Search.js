import { useSearchParams } from "react-router-dom"

function Search(){
    
    const [getsearchparam,setvalue]=useSearchParams();


    const getname=(e)=>{
        
        // e.preventDefault();
        const data=getsearchparam.get('name')
        alert(data);
        
    }

    return(
        <>

        <div>This is Search Page</div>
        <br/>

        <form onSubmit={(e)=>getname()}>
  <     label> Search :  </label>
         <input type="text" placeholder="Search" onChange={(e)=>setvalue({name:e.target.value})} />
        <br/><br/>
        <input type="submit" value="search"/>
         <input type="button" value="Reset" />
        </form>
        </>
    )
}

export default Search





