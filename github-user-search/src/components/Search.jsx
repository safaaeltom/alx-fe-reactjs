import { useState } from "react";
import axios from "axios";
import fetchUserData from "../services/githubService";

function Search() {
  const [username, setUsername] = useState(""); // input value
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]); // list of users from search
  const [loading, setLoading] = useState(false); // loading state
  const [error, setError] = useState(false);     // error state

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username.trim() === "") return;

    setLoading(true);
    setError(false);

    try {
      // Step 1: Get search results
      const searchResult = await fetchUserData({ username, location, minRepos });
      const usersList = searchResult.items;

      // Step 2: Fetch full details for each user
      const fullUsers = await Promise.all(
        usersList.map(async (user) => {
          const res = await axios.get(`https://api.github.com/users/${user.login}`);
          return res.data;
        })
      );

      setUsers(fullUsers);
    } catch (err) {
      setError(true);
      setUsers([]);
    } finally {
      setLoading(false);
    }

    setUsername(""); // optional: clear input
    setLocation("");
    setMinRepos("");
  };

  return (
   <div className="max-w-md mx-auto p-4">
      <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-md space-y-4">
        <div className="flex flex-col">
          <label className="mb-1 font-medium">GitHub Username</label>
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border p-2 rounded"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 font-medium">Location</label>
          <input
            type="text"
            placeholder="Enter location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="border p-2 rounded"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 font-medium">Minimum Repositories</label>
          <input
            type="number"
            placeholder="0"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            className="border p-2 rounded"
            min="0"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
        >
          Search
        </button>
      </form>

      {loading && <p className="mt-4">Loading...</p>}
      {error && <p className="mt-4 text-red-500">Looks like we cant find any users.</p>}

      <div className="mt-6 space-y-4">
        {users.map((user) => (
          <div 
          key={user.id} 
          className="bg-white p-4 rounded shadow flex items-center gap-4">
            <img 
            src={user.avatar_url} 
            alt={user.login} 
            className="w-16 h-16 rounded-full" 
            />
          <div>
              <h2 className="font-bold">{user.name || user.login}</h2>
              {user.location && <p>Location: {user.location}</p>}
              <p>Repositories: {user.public_repos}</p>
              <a
                href={user.html_url}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 hover:underline"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;