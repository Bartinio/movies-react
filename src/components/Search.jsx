import React from 'react';

class Search extends React.Component{
    render() {
        return <div className="row">
        <div className="input-field col s12">
          <i className="material-icons prefix" style={{color: '#ee6e73' }}>search</i>
          <input id="icon_prefix" type="search" className="validate"  placeholder="Search"/>
        </div>
        </div>
    }
}

export {Search};