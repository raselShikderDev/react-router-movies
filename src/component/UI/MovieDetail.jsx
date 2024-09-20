/* eslint-disable no-unused-vars */

import { useLoaderData } from "react-router-dom";

export default function MovieDetail() {
  const movieData = useLoaderData();
  const handleRating = () => {
    
  }
  const {
    Actors,
    Poster,
    Title,
    Runtime,
    Genre,
    Type,
    Year,
    Plot,
    BoxOffice,
    imdbID,
    Awards,
    imdbRating,
    Director,
    Released,
    Language,
    Country,
    Ratings,
    imdbVotes,
    Writer,
    Rated,
    Production,
  } = movieData;

  return (
    <div className="flex gap-5 justify-around items-center bg-slate-50 py-10 px-5">
      <div id="Poster" className="pt-2 pb-1 px-3 shadow-sm shadow-slate-500  bg-white rounded text-center">
        <img src={Poster} alt={Title} />
        <p>Name: <span className="font-semibold">{Title}</span></p>
        <p className="">Type: <span className="text-gray-600 font-semibold">{Type}</span></p>
      </div>
      <div className=" w-1/2">
        <div id="">
          <p>Titile: <span className="font-semibold">{Title}</span></p>
          <p>Director: <span className="font-semibold">{Director}</span></p>
          <p>Writer: <span className="font-semibold">{Writer}</span></p>
          <p>Actors: <span className="font-semibold">{Actors}</span></p>
          <p>Genre: <span className="font-semibold">{Genre}</span></p>
          <p>Released: <span className="font-semibold">{Released}</span></p>
          <p>Country: <span className="font-semibold">{Country}</span></p>
          <p>Language: <span className="font-semibold">{Language}</span></p>
          <p className="flex gap-3">Ratings: <ul className="font-semibold">{Ratings.map((curr, i) => {
            return (
              <li key={i}>
                [<span className="mr-2">{curr.Source}:</span> 
                <span>{curr.Value}</span>]
              </li>
            )
          })}</ul></p>
          <p>imdbRating: <span className="font-semibold">{imdbRating}</span></p>
          <p>imdbVotes: <span className="font-semibold">{imdbVotes}</span></p>
          <p>Runtime: <span className="font-semibold">${Runtime}</span></p>
          <p>Plot: <span className="font-semibold">{Plot}</span></p>
          <p>Rated: <span className="font-semibold">{Rated}</span></p>
          <p>BoxOffice: <span className="font-semibold">{BoxOffice}</span></p>
          <p>Production: <span className="font-semibold">{Production}</span></p>
          <button className="text-center bg-gray-900 text-white py-2 px-5">Watch now</button>
        </div>
      </div>
    </div>
  );
}
