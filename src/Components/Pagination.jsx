import { useState } from "react";

function Pagination({
  // total pages
  total,
  // current page of the component
  current,
  // event handler when button is clicked,
  // changePage accepts the new page in number
  changePage
}) {
  const [page, setPage] = useState(1);

  let pages = (
    <div>
      <button
        data-testid="page-btn"
        onClick={() => setPage(1)}
        disabled={page === 1}
      >
        1
      </button>
      <button
        data-testid="page-btn"
        onClick={() => setPage(2)}
        disabled={page === 2}
      >
        2
      </button>
      <button
        data-testid="page-btn"
        onClick={() => setPage(3)}
        disabled={page === 3}
      >
        3
      </button>
      <button
        data-testid="page-btn"
        onClick={() => setPage(4)}
        disabled={page === 4}
      >
        4
      </button>
      <button
        data-testid="page-btn"
        onClick={() => setPage(5)}
        disabled={page === 5}
      >
        5
      </button>
    </div>
  );

  return <div>{pages}</div>;
}

export default Pagination;
