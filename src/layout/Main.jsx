// key = 2f4e2aa4
import React, { Component } from 'react'
import { Movies } from '../components/Movies'

class Main extends Component {
    state = {
        movies: []
    }
    componentDidMount() {
        fetch('http://www.omdbapi.com/?apikey=2f4e2aa4&s=Matrix')
            .then(response => response.json())
            .then(data => this.setState({ movies: data.Search }))
    }
    render() {
        const { movies } = this.state;

        return (
            <main className='container film-content'>

                <Movies movies={this.state.movies} />
            </main>
        )

    };
}

export { Main }