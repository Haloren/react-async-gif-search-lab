import React from 'react';

export default function GifList(props){
    // console.log("GifList", props.gifs)
    return (
        <ul className="list-unstyled">
            {props.gifs.map((gif) => 
            <li key={gif.id}>
                <img className="center-block" src={gif.images.original.url} alt={gif.title} ></img>
            </li>
            )}
        </ul>
    )
}