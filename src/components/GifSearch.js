import React from 'react';

export default function GifSearch(props){
    // console.log("GifSearch", props)
    return (
        <form className="text-center" onSubmit={props.handleSubmit}>
            <label>Enter a Search Term: </label><br></br>
            <input className="text-center" type="text" name="query" value={props.query} onChange={props.handleChange} size="27"></input><br></br>
            <button className="btn btn-success">Search all the GIFs and Stickers</button>
        </form>
    )
}