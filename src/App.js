import React, { useState, useEffect } from "react";
import "./App.css";
import InputBar from "./components/InputBar";
import ProviderTable from "./components/ProviderTable";
import { getProviders } from "./services/providers";

const App = () => {
  const [providers, setProviders] = useState([]);
  const [refreshProvidersKey, setRefreshProvidersKey] = useState(0);

  const refreshProviders = async () => {
    const data = await getProviders();
    setProviders(data);
  };

  const shouldRefreshProviders = () => {
    setRefreshProvidersKey((prevKey) => prevKey + 1);
  };
  useEffect(() => {
    refreshProviders();
  }, [refreshProvidersKey]);

  return (
    <div className="app-container">
      <h1 className="title-h1">Providers by NPI</h1>
      <InputBar shouldRefreshProviders={shouldRefreshProviders} />
      <ProviderTable
        data={providers}
        refreshProvidersKey={refreshProvidersKey}
      />
    </div>
  );
};

export default App;
