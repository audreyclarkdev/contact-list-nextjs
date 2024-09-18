const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="">
      <input
        className=""
        type="search"
        placeholder="Search Contacts"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
