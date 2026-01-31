import { useState } from "react";

function Search ({ onSearch }) {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === "") return;
    onSearch(username); // will call parent function later
    setUsername(""); // optional: clear input after search
  };

    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            value={username}
            placeholder="Enter GitHub username" 
            onChange={(e) => setUsername(e.target.value)}
            />
            <button type="submit">Submit</button>
        </form>
    );
}

export default Search;