/* eslint-disable no-unused-vars */
// import { useLoaderData } from "react-router-dom"

export const moviesApi = async () => {
  try {
    const api =
      `https://www.omdbapi.com/?i=tt3896198&apikey=${import.meta.env.VITE_API_KEY}&s=titanic&page=1`;
    const res = await fetch(api);
    if (!res.ok) {
      throw new Error(`Got problem in Data Fetcing ! ${res.status}`);
    }
      const data = await res.json();
        return data;
        
  } catch (error) {
      console.log("Failed to fetch movies data from server");
      return { error: "Failed to fetch movies data" }
  }
};
