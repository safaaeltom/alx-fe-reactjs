import axios from "axios";

/**
 * Fetch GitHub users based on advanced search criteria
 * @param {Object} params - { username, location, minRepos }
 * @returns {Object} - GitHub Search API response containing items array
 */
async function fetchUserData({ username, location, minRepos }) {
  try {
    // Build the query string
    let query = username ? `${username} in:login` : "";
    if (location) query += ` location:${location}`;
    if (minRepos) query += ` repos:>=${minRepos}`;

    const url = `https://api.github.com/search/users?q=${encodeURIComponent(query)}`;
    const response = await axios.get(url);

    return response.data; // { total_count, items: [...] }
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
}

export default fetchUserData;
