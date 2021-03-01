import React from 'react';

import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component {

    state = {
        gifs: [],
        query: ''
    }

    handleSubmit = (event) => {
        event.preventDefault()
        fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.query}&api_key=dc6zaTOxFJmzC&rating=g&limit=6`)
        .then(resp => resp.json())
        // .then(gifs => console.log(gifs))
        .then(gifs => {this.setState({gifs: gifs.data})})
    }
    handleChange = (event) => {
        this.setState({
            query: event.target.value
        })
    }

    render() {
        return (
            <div>
                <GifSearch query={this.state.query} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }
}