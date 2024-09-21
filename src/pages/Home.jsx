import img from "../assets/movies.png";

export default function Home() {
  return (
    <div className="bg-white">
      <div style={{ width: "90%", margin: "auto" }}>
        <div className="flex flex-col lg:flex-row">
          <div className="w-full flex flex-wrap lg:w-2/4 items-center">
            <div className="py-10">
              {/* Adjust heading sizes */}
              <h3 className="text-xl sm:text-2xl md:text-3xl">
                Explore the Latest in Movie Industries
              </h3>

              {/* Adjust heading sizes */}
              <h2 className="text-4xl sm:text-5xl md:text-6xl py-3">
                Unlimited Movies, TV Shows, & More.
              </h2>

              {/* Adjust paragraph size */}
              <p className="text-sm sm:text-base md:text-xl tracking-tight mb-6">
                Discover the Top Best Movies and Dramas with a catchy subtitle
                like Your Ultimate Guide to Must-Watch Content.
              </p>

              {/* Adjust button size */}
              <button className="py-1.5 px-4 font-semibold sm:py-2 sm:px-6 text-sm sm:text-lg  bg-sky-500 rounded">
                Explore More
              </button>
            </div>
          </div>

          <div className="w-full flex justify-center lg:w-2/4">
            <div className="py-1">
              <img className="object-cover sm:w-5/6" src={img} alt="Home page Image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
