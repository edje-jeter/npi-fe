import axios from "axios";

const API_BASE_URL = "http://localhost:3000/providers";

export const getProviders = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    return formatProviders(response.data);
  } catch (error) {
    console.error("Error fetching providers:", error);
  }
};

export const createProvider = async (npi) => {
  try {
    const response = await axios.post(API_BASE_URL, { npi });
    return response.data;
  } catch (error) {
    console.error("Error creating provider:", error);
  }
};

const formatProviders = (rows) => {
  return rows.map((row) => formatProvider(row));
};

const formatProvider = (row) => {
  const formatted = {
    address1: row["address_1"],
    address2: row["address_2"],
    city: row["city"],
    countryCode: row["country_code"],
    countryName: row["country_name"],
    credential: row["credential"],
    nameFirst: row["name_first"],
    nameLast: row["name_last"],
    nameMiddle: row["name_middle"],
    nameOrganization: row["name_organization"],
    npi: row["npi"],
    nppesLastUpdated: row["nppes_last_updated"],
    nppesType: row["nppes_type"],
    postalCode: row["postal_code"],
    primaryTaxonomy: row["primary_taxonomy"],
    state: row["state"],
  };

  return formatted;
};
