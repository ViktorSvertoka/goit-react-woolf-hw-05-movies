import { useState } from 'react';

const Form = ({ searchMovies }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    searchMovies(query.toLowerCase());
  };

  return (
    <form className="pb-4" onSubmit={handleSubmit}>
      <input
        className="mr-2 min-w-0 rounded-md border-2 border-[#64748b] bg-[#6e7376]/5 px-3.5 py-2 text-[#000000] shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
        type="text"
        name="query"
        autoFocus
        value={query}
        onChange={handleInputChange}
        placeholder="Enter Movie"
      />
      <button
        className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        type="submit"
      >
        Search
      </button>
    </form>
  );
};

export default Form;
