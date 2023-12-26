const Pagination = ({ page, lastPage, setPage }) => {
  const scrollToTop = () => {
    scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleNextPage = () => {
    // setPage((prevState) => (prevState % lastPage) + 1);
    setPage((prevState) => prevState + 1);
    scrollToTop();
  };

  const handlePrevPage = () => {
    // setPage((prevState) => (prevState - 1 + lastPage) % lastPage || lastPage);
    setPage((prevState) => prevState - 1);
    scrollToTop();
  };

  return (
    <div className="flex flex-row items-center justify-center gap-4 px-2 py-4 text-xl font-semibold text-color-primary">
      {page <= 1 ? null : (
        <button
          onClick={handlePrevPage}
          className="transition ease-in-out hover:text-color-light"
        >
          Prev
        </button>
      )}

      <p>
        {page} of {lastPage}
      </p>
      {page >= lastPage ? null : (
        <button
          onClick={handleNextPage}
          className="transition ease-in-out hover:text-color-light"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
