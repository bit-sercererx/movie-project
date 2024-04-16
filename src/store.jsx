import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";

let intiialState={
    popularMovie:[],
    loading:false,


}
const popularMovieReduser=(state=intiialState,action)=>{
switch (action.type){
    case "movie/get":
    return{...state , popularMovie:action.paylod, loading: false}
    case"movie/loading":
    return{...state , loading:true}
    default:
        break;
}
return state
}
export function getPopularMovie(){
    return function(dispatch){
        dispatch({type:"movie/loading"});
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=9266f5410b8313c95d08ecaa2af0ebe2")
        .then ((res)=>res.json())
        .then((data)=>{
            dispatch({type:"movie/get",paylod:data.results})
            console.log(data.results);
        })
    }
}
const store=createStore(popularMovieReduser,applyMiddleware(thunk));
export default store;