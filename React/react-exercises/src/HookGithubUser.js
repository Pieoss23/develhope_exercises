import { useState, useEffect } from "react";

export function HookGitHubUser({ username }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        if (response.status !== 200) {
          setError(new Error("User not found"));
        }

        return response.json();
      })
      .then((json) => {
        console.log(json);
        setData(json);
      })
      .catch((error) => {
        setError(error);
      });
  }, [username]);
  return (
    <div>
      {error && <h1>User not found</h1>}
      {data && <h1>{data.name || data.login}</h1>}
    </div>
  );
}
