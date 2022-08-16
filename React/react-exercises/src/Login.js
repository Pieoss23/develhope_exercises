import { useState } from "react";

export function Login(){
    const [data, setData] = useState({
        username: '',
        password: '',
        remember: false
    })

    function handleInputChange(e){
        const {value, type, name, checked} = e.target

        setData((data) => {
            return{
                ...data,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    console.log(data)

    return(
        <div className="main_container">
            <form>
                <label>Username: 
                <input value={data.username} name="username" onChange={handleInputChange} />
                </label>
                <label>Password: 
                <input value={data.password} name="password" type="password" onChange={handleInputChange} />
                </label>
                <label> remember me: 
                <input name="remember" type="checkbox" checked={data.remember} onChange={handleInputChange} />
                </label>
            </form>
        </div>
    )
}