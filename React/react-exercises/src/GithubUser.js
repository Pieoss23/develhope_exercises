import { useGithubUser } from "./useGithubUser"

export function GithubUser({username='Pieoss23'}){

    const {data, error, loading} = useGithubUser(username);

    
    return(
        <div>
            {data && <h1>{data.name}</h1>}
            {data && <img alt="avatar_prof" src={data.avatar_url}></img>}
            {data && <h3>{data.location}</h3>}
            {data && <h5>{data.bio}</h5>}
            {loading && <h1>Loading...</h1>}
            {error && <h1>Error!!</h1>}
        </div>
    )
}
