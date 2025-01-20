import React from "react";
import "../styles/ProviderTable.css";

const ProviderTable = ({ data, refreshProvidersKey }) => {
  function formatNpi(npi) {
    const href = `https://npiregistry.cms.hhs.gov/provider-view/${npi}`;
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="external-link"
      >
        {npi}
      </a>
    );
  }

  function formatName(row) {
    if (row.nameOrganization) {
      return row.nameOrganization;
    } else {
      const displayName =
        `${row.nameFirst ?? ""} ${row.nameMiddle ?? ""} ${row.nameLast ?? ""}`.replace(
          /\s+/g,
          " ",
        );
      return displayName === " " ? "---" : displayName;
    }
  }

  function formatAddress(row) {
    const lineTop = `${row.address1 ?? ""} ${row.address2 ?? ""}`.replace(
      /\s+/g,
      " ",
    );
    const lineBottom =
      `${row.city ?? ""}, ${row.state ?? ""} ${row.postalCode?.slice(0, 5) ?? ""}`.replace(
        /\s+/g,
        " ",
      );
    if (lineTop === " " && lineBottom === ", ") {
      return <span>---</span>;
    } else {
      return (
        <span>
          {lineTop}
          <br />
          {lineBottom}
        </span>
      );
    }
  }

  return (
    <div className="provider-table-container">
      <table className="provider-table">
        <thead>
          <tr>
            <th key="npi">NPI</th>
            <th key="name">Name</th>
            <th key="address">Address</th>
            <th key="type">Type</th>
            <th key="taxonomy">Taxonomy</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.length > 0 &&
            data.map((row, rowIdx) => (
              <tr key={rowIdx}>
                <td key={"npi" + rowIdx}>{formatNpi(row.npi)}</td>
                <td key={"name" + rowIdx}>{formatName(row)}</td>
                <td key={"address" + rowIdx}>{formatAddress(row)}</td>
                <td key={"type" + rowIdx}>
                  {row.nppesType?.slice(4, 5) ?? "---"}
                </td>
                <td key={"taxonomy" + rowIdx}>
                  {row.primaryTaxonomy ?? "---"}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProviderTable;
