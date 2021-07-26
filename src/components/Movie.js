import React from "react";

const Movie = ({name, url}) => {

return(
    <>
        <h4>{name}</h4>
        <p>{url}</p>
    </>
)

}

export default Movie;