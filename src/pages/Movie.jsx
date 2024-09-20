import { useLoaderData } from "react-router-dom";
import Card from "../component/UI/Card";
import "../component/UI/card.css";
// import titanic from "../api/titanic.json";

export default function Movie() {
  
  const moviesData = useLoaderData();
  return (
    <div className=" w-full bg-slate-50">
      <div style={{ width: "90%", margin: "auto" }} id="container">
        <h1 className="text-center  py-5 text-5xl text-black font-semibold">
          Movies
        </h1>
        <div id="movieContent" className="w-full h-full">
          <ul
            id="CardContainer"
            className="py-5 flex h-full w-full items-center flex-wrap gap-20 justify-center"
          >
            {moviesData.Search.map((currMovie) => {
              return <Card key={currMovie.imdbID} moviesData={currMovie} />;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
