// import { useLoaderData } from "react-router-dom"
// import titanic from "./titanic.json"



export const movieDetailsData = async ({ params }) => {
  console.log(params.movieDetails)
  try {
      const api =
        `https://www.omdbapi.com/?i=${params.movieDetails}&apikey=${import.meta.env.VITE_API_KEY}`;
    const res = await fetch(api);

      if (!res.ok) {
        throw new Error(`Got problem in Data Fetcing of this movie ! ${res.status}`);
      }
      const data = await res.json();
    console.log(data)
          return data;
          
    } catch (error) {
        console.log(error);
        return { error: "Failed to fetch movies data" }
    }
  };
  