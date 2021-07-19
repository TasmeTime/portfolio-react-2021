import React, { Component } from "react";
import ProjectCard from "./projectCard";

export default class MyProjects extends Component {
  constructor(props) {
    super(props);
    this.getProjects = this.getProjects.bind(this);
    this.state = {
      projects: [],
    };
  }

  getProjects(props) {
    props.setLoading(true);
    fetch("http://localhost:5000/projects")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ projects: data });
        props.setLoading(false);
      })
      .catch((err) => {
        console.log("FETCH ERROR: " + err);
        props.setLoading(false);
      });
  }

  componentDidMount() {
    this.getProjects(this.props);
  }

  render() {
    return (
      <div className="row">
        {this.state.projects.map(function (p, i) {
          return <ProjectCard key={i} project={p} />;
        })}
      </div>
    );
  }
}
