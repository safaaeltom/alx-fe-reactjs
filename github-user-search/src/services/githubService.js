import axios from "axios";

async function fetchUserData(username) {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data; // return the user data
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error; // pass the error to the caller
  }
}

export default fetchUserData;