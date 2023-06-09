import React, {useState, useContext, useEffect} from "react";
import {AppContext} from "../../providers/appProvider";
import "./SearchField.css"

let timeoutId: any

function SearchField () {
  const {
    searchField,
    setSearchField,
    setPage
  } = useContext(AppContext);

  const [value, setValue] = useState(searchField)

  useEffect(() => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      setSearchField(value)
      setPage(1)
    }, 1000)
  }, [value])

  return (
    <input
      className="css-input"
      value={value}
      onChange={e => setValue(e.currentTarget.value)}
    />
  )
}

export {SearchField};
