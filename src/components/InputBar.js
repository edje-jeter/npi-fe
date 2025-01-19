import React, { useEffect, useRef, useState } from "react";
import "../styles/InputBar.css"

const InputBar = () => {
  const [inputValue, setInputValue] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true)
  const inputRef = useRef(null)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  const validateInput = (value) => {
    var msg = ""
    var isDisabled = true

    if (value === "") {
      msg = ""
      isDisabled = true
    } else if (/[^0-9]/.test(value)) {
      msg = "Numbers only"
      isDisabled = true
    } else if (value.length > 10) {
      msg = "10 digits only"
      isDisabled = true
    } else {
      msg = ""
      isDisabled = false
    }

    return [msg === "" ? "" : `*${msg}!`, isDisabled]
  }

  const handleChange = (e) => {
    const value = e.target.value

    setInputValue(value)
    const [msg, isDisabled] = validateInput(value)
    setErrorMessage(msg)
    setIsSubmitDisabled(isDisabled)
  }

  const onSubmit = (e) => {
    // don't do anything for now
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!isSubmitDisabled) {
      setInputValue("")
      setIsSubmitDisabled(true)
      onSubmit(inputValue)
      alert(`Submitted: ${inputValue}`)
    }
  }

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
            value={inputValue}
          />
          <button
            type="submit" 
            className={isSubmitDisabled ? "button button-disabled" : "button" }
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
  )
}

export default InputBar
