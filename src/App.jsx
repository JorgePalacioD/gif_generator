import React, { useState, useEffect } from 'react';

const GIPHY_API_KEY = 'LeuS1PAyEtRvOAinsXSawT7uDjePHAym';
const SEARCH_ENDPOINT = `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&limit=20`;
const TRENDING_ENDPOINT = `https://api.giphy.com/v1/gifs/trending?api_key=${GIPHY_API_KEY}&limit=20`;

function App() {
  const [query, setQuery] = useState('');
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    handleFetchTrendingGifs();
  }, []);

  const handleFetchTrendingGifs = async () => {
    try {
      const response = await fetch(TRENDING_ENDPOINT);
      const data = await response.json();
      setGifs(data.data);
    } catch (error) {
      console.error('Error fetching trending GIFs:', error);
    }
  };

  const handleFetchGifs = async () => {
    try {
      const response = await fetch(`${SEARCH_ENDPOINT}&q=${query}`);
      const data = await response.json();
      setGifs(data.data);
    } catch (error) {
      console.error('Error fetching GIFs:', error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    handleFetchGifs();
  };

  return (
    <div className="min-h-screen bg-slate-300 p-8">
      <div className="h-full mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-8">
          <form onSubmit={handleSearch} className="flex items-center space-x-4">
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Search for GIFs"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Search
            </button>
          </form>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {gifs.map((gif) => (
              <div key={gif.id} className="flex justify-center">
                <img
                  src={gif.images.fixed_height.url}
                  alt={gif.title}
                  className="rounded-md"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

