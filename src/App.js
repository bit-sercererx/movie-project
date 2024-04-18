import "./App.css";
import Navbar from "./Componets/Pages/Navbar";
import Footer from "./Componets/Pages/Footer";
import MovesPages from "./Componets/Pages/Moviepages";
import Genres from "./Componets/Pages/Genres";
import Home from "./Componets/Pages/Home";
import { getPopularMovie, getTopRated, getAllMovie, getActors } from "./store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Actors from "./Componets/Pages/Actors";
import { Route, Routes } from "react-router-dom";
import Actorinfo from "./Componets/Pages/Actor";
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
  const actorsdispatch = useDispatch();
  useEffect(() => {
    actorsdispatch(getActors());
  }, []);
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MoviePages" element={<MovesPages />} />
        <Route path="/Genres" element={<Genres />} />
        <Route path="/Actorinfo" element={<Actorinfo />} />
        <Route path="Actors" element={<Actors />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
