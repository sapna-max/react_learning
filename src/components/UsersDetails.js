import { useParams } from "react-router-dom"


function UsersDetails(){
    const userid=useParams();
    console.log(userid);
    const id=userid.id

    return(
        <>
        <h1>this is my UsersDetails {id}</h1>      
        </>
    )
}

export default UsersDetails