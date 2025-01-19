import React, { useState, useEffect } from "react";
import './App.css';
import InputBar from "./components/InputBar"
import ProviderTable from "./components/ProviderTable"

const App = () => {
  // const [tableData, setTableData] = useState([]);

  // useEffect(() => {
  //   // Replace this URL with your API endpoint
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("https://api.example.com/data");
  //       const data = await response.json();
  //       setTableData(data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  const tableData = [
    {
      "address1": "5555 444TH STREET",
      "address2": "APT 78-C",
      "city": "BIG CITY",
      "countryCode": "US",
      "countryName": "United States",
      "credential": "M.D.",
      "nameFirst": "DAFFY",
      "nameLast": "DUCK",
      "nameMiddle": "",
      "nameOrganization": "",
      "npi": "1111111111",
      "nppesLastUpdated": "2020-12-01",
      "nppesType": "NPI-1",
      "postalCode": "12345",
      "primaryTaxonomy": "Family Medicine",
      "state": "TX"
    },
    {
      "address1": "123 DRURY LN",
      "address2": "",
      "city": "ITTYBITTYVILLE",
      "countryCode": "US",
      "countryName": "United States",
      "credential": "D.O.",
      "nameFirst": "THE",
      "nameLast": "MAN",
      "nameMiddle": "MUFFIN",
      "nameOrganization": "",
      "npi": "2222222222",
      "nppesLastUpdated": "1998-05-15",
      "nppesType": "NPI-1",
      "postalCode": "77777",
      "primaryTaxonomy": "Pediatrics",
      "state": "NY"
    },
    {
      "address1": "404 LOST RD",
      "address2": "SUITE C",
      "city": "SAN ANTONIO",
      "countryCode": "US",
      "countryName": "United States",
      "credential": "", 
      "nameFirst": "", 
      "nameLast": "", 
      "nameMiddle": "",
      "nameOrganization": "LOONEY BIN SURGICAL HOSPITAL GROUP, LP",
      "npi": "3333333333",
      "nppesLastUpdated": "2023-01-01",
      "nppesType": "NPI-2",
      "postalCode": "543216789",
      "primaryTaxonomy": "General Acute Care Hospital",
      "state": "GA"
    }
  ]


  return (
    <div className="app-container">
      <h1 className="title-h1">Providers by NPI</h1>
      <InputBar />
      <ProviderTable data={tableData} />
    </div>
  )
}

export default App
