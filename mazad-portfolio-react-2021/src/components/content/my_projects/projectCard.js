import { Link } from "react-router-dom";

function ProjectCard(props) {
  if (props.col && props.col > 1 && props.col <= 12) {
    return (
      <div
        className={
          "col-12 col-sm-6 col-m-6 col-lg-" + props.col + " col-xl-" + props.col
        }
      >
        <Link to={"/project/" + props.project._id}>
          <div className="custom-card project-card">
            <img
              className="custom-card-image h300"
              alt={props.project.Images[0].Alt}
              src={props.project.Images[0].Url}
            />
            <div className="custom-card-body">
              <div className="row">
                <div className="col-7">
                  <h4 className="custom-card-title-br">
                    {props.project.Title}
                  </h4>
                </div>
                <div className="col-12">
                  <div className="badges-container">
                    {props.project.Tags.map(function (tag, i) {
                      return (
                        <span key={i} className="project-tag">
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  } else {
    return (
      <div className="col-12 col-sm-12 col-m-12 col-lg-6 col-xl-6">
        <Link
          style={{ textDecoration: "none" }}
          to={"/project/" + props.project._id}
        >
          <div className="custom-card project-card">
            <img
              className="custom-card-image h300"
              alt={props.project.Images[0].Alt}
              src={props.project.Images[0].Url}
            />
            <div className="custom-card-body">
              <div className="row">
                <div className="col-7">
                  <h4 className="custom-card-title-br">
                    {props.project.Title}
                  </h4>
                </div>
                <div className="col-12">
                  <div className="badges-container">
                    {props.project.Tags.map(function (tag, i) {
                      return (
                        <span key={i} className="project-tag">
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default ProjectCard;
