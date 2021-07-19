function Card(props) {
  if (props.col && props.col > 1 && props.col <= 12) {
    return (
      <div
        className={
          "col-12 col-sm-12 col-m-12 col-lg-" +
          props.col +
          " col-xl-" +
          props.col
        }
      >
        <div className="custom-card">
          <div className="custom-card-body">
            {props.title ? (
              <h4 className="custom-card-title">{props.title}</h4>
            ) : (
              ""
            )}
            {props.children ? props.children : props.body}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="custom-card">
        <div className="custom-card-body">
          {props.title ? (
            <h4 className="custom-card-title">{props.title}</h4>
          ) : (
            ""
          )}
          {props.children ? props.children : props.body}
        </div>
      </div>
    );
  }
}

export default Card;
