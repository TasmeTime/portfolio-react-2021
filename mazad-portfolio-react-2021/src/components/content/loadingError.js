import component, { Component } from "react";

export default class LoadingError extends Component {
  constructor(props) {
    super(props);
    this.reRender = this.reRender.bind(this);
  }
  reRender() {
    console.log("Before Rerender.");
    this.forceUpdate();
  }
  render() {
    return (
      <div id="contentError">
        <div
          onClick={this.props.reRender}
          className="loadingErrorContainer text-center"
        >
          <i
            style={{ fontSize: "10rem" }}
            className="bi-exclamation-square-fill"
          ></i>
          <h4>Error while loading content...</h4>
          <h5>Click to refresh.</h5>
        </div>
      </div>
    );
  }
}
