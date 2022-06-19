import Hero from "../../components/hero/Hero";
import MovieList from "../../components/movieList/MovieList";
import requests from "../../utils/endPoint";

const Home = () => {
  return (
    <>
      <Hero />
      <MovieList
        title="Popular Trading Movie 😊"
        carousel={true}
        speed={1500}
        duration={1000}
        filter={requests.requestPopular}
      />
      <MovieList
        title="Popular Horror Movie 😊"
        carousel={true}
        speed={2000}
        duration={1500}
        filter={requests.requestHorror}
      />
      <MovieList
        title="Popular TopRated Movie 😊"
        carousel={true}
        speed={2500}
        duration={2000}
        filter={requests.requestTopRated}
      />
      <MovieList
        title="Popular Upcoming Movie 😊"
        carousel={true}
        speed={3000}
        duration={2500}
        filter={requests.requestUpcoming}
      />
    </>
  );
};

export default Home;
