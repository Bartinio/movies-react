import React from 'react';

class Search extends React.Component{

    state = {
        search: '',

    }

    handleKey = (event) => {
        if (event.key === 'Enter') {
            this.props.searchMovies(this.state.search)
        }
    } 
    render() {
        return <div className="row">
        <div className="input-field col s12">
          <i className="material-icons prefix" style={{color: '#ee6e73', cursor: 'pointer' }} onClick={() => this.props.searchMovies(this.state.search)}>search</i>
          <input 
            className="validate" 
            id="icon_prefix"
            type="search" 
            placeholder="Search"
            value={this.state.search}
            onChange={(e) => this.setState({search: e.target.value})}
            onKeyDown={this.handleKey}
         />
        </div>
        </div>
    }
}

export {Search};