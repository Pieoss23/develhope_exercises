import { useEffect, useState } from "react";
export function GithubUser({ username }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        if (response.status !== 200) {
          setError(new Error("User not found"));
        }
        return response.json();
      })
      .then((json) => {
        // setLoading(false);
        setData(json);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [username]);
  console.log(data)


  return (
    <div>
      {data && <h1>{data.name}</h1>}
      {data && <img alt="avatar_prof" src={data.avatar_url}></img>}
      {data && <h3>{data.location}</h3>}
      {data && <h5>{data.bio}</h5>}

    </div>
  );
}
