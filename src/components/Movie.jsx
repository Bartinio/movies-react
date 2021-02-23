function Movie(props) {
    const {
        Title,
        Year,
        imdbID,
        Type,
        Poster
    } = props;

    return  <div className="card movie">
    <div className="card-image waves-effect waves-block waves-light">
      <img className="activator" src="images/office.jpg" />
    </div>
    <div className="card-content">
      <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
      <p><a href="#">This is a link</a></p>
    </div>
  </div>
}

export {Movie}