import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";

let popularMovieintiialState = {
  popularMovie: [],
  loading: false,
};

let TopRatedintiialstate = {
  TopRated: [],
};
let allmovieintiialstate = {
  allmovie: [],
};
let Actorsintiialstate = {
  Actors: [],
};
const popularMovieReduser = (state = popularMovieintiialState, action) => {
  switch (action.type) {
    case "movie/get":
      return { ...state, popularMovie: action.paylod, loading: false };
    case "movie/loading":
      return { ...state, loading: true };
    default:
      break;
  }
  return state;
};

const TopRatedReduser = (state = TopRatedintiialstate, action) => {
  switch (action.type) {
    case "TopRated/get":
      return { ...state, TopRated: action.paylod };
    default:
      break;
  }
  return state;
};

const allmovieReduser = (state = allmovieintiialstate, action) => {
  switch (action.type) {
    case "allmovie/get":
      return { ...state, allmovie: action.paylod };
    default:
      break;
  }
  return state;
};

const ActorsReduser = (state = Actorsintiialstate, action) => {
  switch (action.type) {
    case "actors/get":
      return { ...state, Actors: action.paylod };
    default:
      break;
  }
  return state;
};
export function getActors() {
  return function (dispatch) {
    fetch(
      "https://api.themoviedb.org/3/person/popular?&page=1&api_key=9266f5410b8313c95d08ecaa2af0ebe2"
    )
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "actors/get", paylod: data.results });
        // console.log(data.results);
      });
  };
}

export function getAllMovie() {
  return function (dispatch) {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=9266f5410b8313c95d08ecaa2af0ebe2"
    )
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "allmovie/get", paylod: data.results });
        // console.log(data.results);
      });
  };
}

export function getTopRated() {
  return function (dispatch) {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=9266f5410b8313c95d08ecaa2af0ebe2"
    )
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "TopRated/get", paylod: data.results });
        // console.log(data.results);
      });
  };
}

export function getPopularMovie() {
  return function (dispatch) {
    dispatch({ type: "movie/loading" });
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=9266f5410b8313c95d08ecaa2af0ebe2"
    )
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "movie/get", paylod: data.results });
        // console.log(data.results);
      });
  };
}
const rootReducer = combineReducers({
  popularMovieReduser,
  TopRatedReduser,
  allmovieReduser,
  ActorsReduser,
});
const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
