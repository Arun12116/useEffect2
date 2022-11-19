import React from 'react'
import { omdbi } from '../Utils'
import { useState, useEffect } from "react";
import Card from './Card';

const Movies = _ => {
    const [movies, setMovies] = useState([]);
    const[search,setSearch]=useState("");
    const [queary,setQuery]=useState("Mission Impossible");
    // console.log(search);

    const changehandler=(e)=>{
      setSearch(e.target.value)  

    }
   const clickhandler=(e)=>{
    e.preventDefault();
    // alert("hi")
    setQuery(search)

   }
    useEffect(() => {
        (async _ => {

            const response = await omdbi.get(`?s=${queary}`);
            setMovies(response.data.Search);


        })();
    }, [queary])
    return (
        <>
            <div className="main-Container">
                <div className="sub-Container">
                    <din className="nav-bar">
                        <h1>HOOKED</h1>
                    </din>

                    <div className="inpute" >
                        <input type="text"  value={search} onChange={changehandler} />
                        <button onClick={clickhandler}>SEARCH</button>
                    </div>
                    <div className="para">
                        <p>Searching a few  of our favourite movies</p>
                    </div>


                    <div className="movies">


                        {
                            movies.map((movieslist,key) => {

                                return (
                                    <>
                                        <Card  key={key} image={movieslist.Poster} year={movieslist.Year} name={movieslist.Title}/>

                                    </>
                                )
                            })
                        }

                    </div>
                </div>


            </div>


        </>
    )
}

export default Movies