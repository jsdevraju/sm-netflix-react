import { AiFillStar } from "react-icons/ai";

const MovieCard = ({ movie, setDetails }) => {
  return (
    <>
      <div
        className="w-45 md:w-50 sm:w-35 mt-5 lg:w-45 mr-4"
        onClick={() => setDetails(movie)}
      >
        <div className="bg-slate-600 rounded-lg shadow-lg p-2">
          <img
            src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
            alt="Razu Islam"
            loading="lazy"
          />
          <p className="truncate text-white text-sm md:text-lg">
            {movie?.original_title}
          </p>
          <div className="text-white text-sm mt-2 flex items-center justify-between">
            <span className="flex gap-2 items-center">
              <AiFillStar size={20} color="#ffa824" /> {movie?.vote_average}
            </span>
            <span>{movie?.release_date}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
