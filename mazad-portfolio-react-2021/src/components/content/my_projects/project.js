import React, { Component } from "react";
import Slider from "@farbenmeer/react-spring-slider";
import { withRouter } from "react-router-dom";

const p = { images: [{ src: "", alt: "" }], title: "", tags: ["", ""] };

class Project extends Component {
  constructor(props) {
    super(props);

    this.getProject = this.getProject.bind(this);
    this.state = {
      project: { Tags: [], Images: [] },
    };
  }

  getProject(props, pid) {
    props.setLoading(true);

    fetch("http://localhost:5000/projects/" + pid)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ project: data.Project });
        this.props.setLoading(false);
      })
      .catch((err) => {
        console.log("FETCH ERROR: " + err);
        props.setLoading(false);
      });
  }

  componentDidMount() {
    let pid = this.props.match.params.pid;
    if (!pid) {
      window.location.href = "/";
    }
    this.getProject(this.props, pid);
  }

  render() {
    return (
      <div className="row mb-5">
        <div className="col-12 col-sm-12 col-m-12 col-lg-8 col-xl-8 slider-container mb-4">
          <Slider hasBullets>
            {this.state.project.Images.map(function (image, i) {
              return (
                <img
                  className="image-silder"
                  key={i}
                  alt={image.Alt}
                  src={image.Url}
                />
              );
            })}
          </Slider>
        </div>
        <div className="col-12 col-sm-12 col-m-12 col-lg-4 col-xl-4">
          <div className="project-title">
            <a href={this.state.project.Link} target="_blank">
              {this.state.project.Title}
              <i
                style={{ marginLeft: "1rem" }}
                className="bi-box-arrow-right"
              ></i>
            </a>
          </div>
          <p>{this.state.project.Des}</p>
          <div>
            <h2 className="custom-card-title-br">Tags</h2>
            <div className="badges-container">
              {this.state.project.Tags.map(function (tag, i) {
                return (
                  <span key={i} className="skill-badge">
                    {tag}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Project);
