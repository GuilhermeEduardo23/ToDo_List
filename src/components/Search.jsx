const Search = ({ search, setSearch }) => {
  return (
    <div className="search">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Pesquisar por tarefas"
      />
    </div>
  );
};

export default Search;
