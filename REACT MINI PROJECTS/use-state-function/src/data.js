import React, { useState } from "react";
import datas from "./datas.json";

const Data = () => {
  const [isData, setData] = useState(datas);

  const handleRemove = (id) => () => {
    setData(isData.filter((item) => item.id !== id));
  };

  const handleUpdate = (itemId) => () => {
    setData(
      isData.map((item) => {
        if (item.id === itemId) {
          return { name: "Updated Name" };
        }
        return item;
      })
    );
  };

  return (
    <div>
      <ul>
        {isData.map((item) => (
          <li key={item.id}>
            {item.name}
            <br></br>
            <button onClick={handleUpdate(item.id)}>Update</button>
            <button onClick={handleRemove(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={() => setData([])}>Clear</button>
    </div>
  );
};

export default Data;
