import React, { Component } from 'react'
class Search extends Component {
    state = {
        search: ''
    }
    handleKey = (event) => {
        console.log(this.props);

        if (event.key === 'Enter') {
            this.props.searchMovies(this.state.search);
        }
    }
    render() {

        return (
            <div>

                <div className="input-field ">
                    <input
                        placeholder='search'
                        type="search"
                        className="validate"
                        value={this.state.search}
                        onChange={(e) => this.setState({ search: e.target.value })}
                        onKeyDown={this.handleKey}

                    />
                    <button className='btn search-btn' onClick={() => this.props.searchMovies(this.state.search)}>Поиск</button>
                </div>

            </div>
        )
    }
}
export { Search }