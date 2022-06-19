import MovieCard from "../../components/movieList/movieCard/MovieCard";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../loader/Loader";
import { AiFillStar } from "react-icons/ai";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1920, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const MovieList = ({
  title,
  filter,
  carousel = false,
  speed = 1000,
  duration = 500,
}) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const getMovie = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(filter);
        setTimeout(() => {
          setMovies(data?.results);
          setLoading(false);
        }, 3000);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    getMovie();
  }, [filter]);

  return (
    <>
      <div className="mt-5 ml-5">
        <h1 className="text-sm md:text-2xl text-white">{title}</h1>

        {loading && <Loader />}

        {movies?.length > 0 && (
          <>
            {carousel ? (
              <Carousel
                swipeable={true}
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={speed}
                keyBoardControl={true}
                transitionDuration={duration}
              >
                {movies?.map((movie) => (
                  <MovieCard
                    key={movie.id}
                    movie={movie}
                    {...movie}
                    setDetails={setDetails}
                  />
                ))}
              </Carousel>
            ) : (
              <div className="flex items-center gap-10">
                {movies?.map((movie) => (
                  <MovieCard
                    key={movie.id}
                    movie={movie}
                    {...movie}
                    setDetails={setDetails}
                  />
                ))}
              </div>
            )}
          </>
        )}
        {details && (
          <div
            className="fixed top-0 w-screen left-0 h-screen bg-black bg-opacity-70 z-[99999999]"
            onClick={() => setDetails(null)}
          >
            <div className="flex flex-col text-white justify-center items-center h-screen">
              <h1 className="text-white text-md md:text-2xl">
                Movie Name: {details?.original_title}
              </h1>
              <p className="flex items-center gap-5 mt-2">
                Release Date: {details?.release_date}
              </p>
              <p className="flex items-center gap-5 mt-2 mb-4">
                Avarage Rating Date: <AiFillStar size={20} color="#ffa824" />{" "}
                {details?.vote_average}
              </p>
              <p className="max-w-[550px] text-center">
                Movie Overview:
                {details?.overview}
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MovieList;
