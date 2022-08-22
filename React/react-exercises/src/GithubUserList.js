import { useState } from "react"
import { Link, Outlet } from "react-router-dom"


export function GithubUserList(){
    const [userArray,setUserArray] = useState([])
    const[inputFieldValue, setInputFieldValue] = useState('')

    function handleInputField(event){
        setInputFieldValue(event.target.value)
    }

    function handleSubmit(){
        setUserArray([...userArray, inputFieldValue])
    }


    return(
        <div>
            {userArray.map((githubProfile, index)=> ( <div key={githubProfile + index}>
                 <li>
                    <Link to={`${githubProfile}`}>User: {githubProfile}</Link>
                 </li>
                  </div> ))}
                  <Outlet />
            <input onChange={handleInputField} name="username"/>
            <button onClick={handleSubmit}>Add Github Username</button>
        </div>
    )
}