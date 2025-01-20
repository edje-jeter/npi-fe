import React, { useEffect, useRef, useState } from "react";
import "../styles/InputBar.css";
import { createProvider } from "../services/providers";

const InputBar = ({ shouldRefreshProviders }) => {
  const [npi, setNpi] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const validateInput = (value) => {
    var msg = "";
    var isDisabled = true;

    if (value === "") {
      msg = "";
      isDisabled = true;
    } else if (/[^0-9]/.test(value)) {
      msg = "Numbers only";
      isDisabled = true;
    } else if (value.length > 10) {
      msg = "10 digits only";
      isDisabled = true;
    } else {
      msg = "";
      isDisabled = false;
    }

    return [msg === "" ? "" : `*${msg}!`, isDisabled];
  };

  const handleChange = (e) => {
    const value = e.target.value;

    setNpi(value);
    const [msg, isDisabled] = validateInput(value);
    setErrorMessage(msg);
    setIsSubmitDisabled(isDisabled);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isSubmitDisabled) {
      setNpi("");
      setIsSubmitDisabled(true);
      await createProvider(npi);

      shouldRefreshProviders();
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <div className="group">
          <input
            className={`input ${errorMessage ? "input-error" : ""}`}
            onChange={handleChange}
            placeholder=""
            ref={inputRef}
            type="text"
            value={npi}
          />
          <button
            type="submit"
            className={isSubmitDisabled ? "button button-disabled" : "button"}
            disabled={isSubmitDisabled}
          >
            Submit
          </button>
        </div>
        <span className="error-message-box">
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </span>
      </form>
    </div>
  );
};

export default InputBar;
