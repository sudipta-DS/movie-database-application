import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const Home = () => {
  let [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://dummyapi.online/api/movies")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      {data.map((item) => (
        <MovieCard
          key={item.id}
          image={item.image}
          rating={item.rating}
          imdb_url={item.imdb_url}
          title={item.movie}
        />
      ))}
    </>
  );
};

export default Home;
