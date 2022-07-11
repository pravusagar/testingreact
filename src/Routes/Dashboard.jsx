import { useEffect, useState } from "react";
import Pagination from "../Components/Pagination";

function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, []);
  console.log(data);
  return (
    <div>
      <h3>Dashboard</h3>

      <h4 data-testid="token">TOKEN</h4>
      <button data-testid="logout-btn">Logout</button>
      <ul data-testid="item-container">
        {data.map((x) => (
          <li data-testid="item">{x.title}</li>
        ))}
      </ul>
      <div data-testid="pagination-container">
        <Pagination />
      </div>
    </div>
  );
}

export default Dashboard;
