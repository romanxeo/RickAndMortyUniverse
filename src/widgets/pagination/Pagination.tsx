import React, {useContext} from "react";
import {AppContext} from "../../providers/appProvider";
import "./Pagination.css"

function Pagination () {
  const {
    page,
    setPage
  } = useContext(AppContext);

  return (
    <div className="pagination">
      {page !== 1 && <button
        className="mainButton mainButton-small"
        onClick={() => {
          setPage(page - 1)
        }}
      >
        Back to {page-1}
      </button>}
      <button
        className="mainButton mainButton-small"
        onClick={() => {
          setPage(page + 1)
        }}
      >
        Go to {page+1}
      </button>
    </div>
  )
}

export {Pagination};
