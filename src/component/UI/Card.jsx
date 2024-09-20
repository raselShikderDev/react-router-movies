/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { NavLink } from "react-router-dom";
import "./card.css";

const Card = (props) => {
  const { Poster, Year, Title, imdbID } = props.moviesData;
  return (
    <NavLink className="rounded" to={`/movie/${imdbID}`}>
      <li className="rounded-md pt-2 pb-1 px-3 bg-white shadow-sm shadow-slate-500">
        <div id="mainContainer">
          <div id="MoviePoster" className="">
            <img className="" src={Poster} />
          </div>
        </div>
        <h2 className="bg-gray-700 text-white font-bold text-center">{Title}</h2>
      </li>
    </NavLink>
  );
};

export default Card;
