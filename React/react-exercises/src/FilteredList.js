import React, { useMemo } from "react";

export function FilteredList({ objectList }) {
  const filteredList = useMemo(() => {
    return objectList.filter(user => user.age > 18);
  }, [objectList]);

  const usersList = filteredList.map((user, idx) => (
    <li key={user.name + idx}>
      user name: {user.name}, 
      age: {user.age}
    </li>
  ));

  return <ul>{usersList}</ul>;
}
