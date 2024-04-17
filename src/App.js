import "./App.css";
import Navbar from "./Componets/Pages/Navbar";
import Footer from "./Componets/Pages/Footer";
import MovesPages from "./Componets/Pages/Moviepages";
import Genres from "./Componets/Pages/Genres";
import Home from "./Componets/Pages/Home";
import { getPopularMovie, getTopRated, getAllMovie } from "./store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPopularMovie());
  }, []);

  const TopRateddispatch = useDispatch();
  useEffect(() => {
    TopRateddispatch(getTopRated());
  }, []);

  const allmoviedispatch = useDispatch();
  useEffect(() => {
    allmoviedispatch(getAllMovie());
  }, []);
  return (
    <div>
      {/* <Navbar /> */}
      {/* <Home /> */}
      {/* <Footer /> */}
      <MovesPages />
      {/* <Genres /> */}
    </div>
  );
}

export default App;
