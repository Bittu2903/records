import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
import {fetchData} from '../api'

function DataTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const result = await fetchData();
      setData(result);
    };
    getData();
  }, []);

  function singh(){
    console.log("singh");
  }

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Call Date From</th>
            <th>Call Date To</th>
            <th>Phone Number</th>
            <th>Volunteer Number</th>
            <th>Campaign ID</th>
            <th>Agent ID</th>
          </tr>
        </thead>
        <tbody>
          {data.map((record) => (
            <tr key={record.id}>
              <td>{record.id}</td>
              <td>{new Date(record.call_date_from).toLocaleDateString()}</td>
              <td>{new Date(record.call_date_to).toLocaleDateString()}</td>
              <td>{record.phone_number}</td>
              <td>{record.volunteer_number}</td>
              <td>{record.campaign_id}</td>
              <td>{record.agent_id}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default DataTable;
