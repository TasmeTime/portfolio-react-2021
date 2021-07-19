import Card from "../../card";
import SkillBadges from "./skillBadges";
import WWBadge from "./wwBadges";
import { Component } from "react";

export default class AboutMe extends Component {
  constructor(props) {
    super(props);
    this.getAboutMe = this.getAboutMe.bind(this);
    this.state = {
      aboutMe: { Skills: [], WorkedWith: [] },
    };
  }

  getAboutMe() {
    this.props.setLoading(true);
    fetch("http://localhost:5000/aboutme/")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ aboutMe: data.AboutMe });
        this.props.setLoading(false);
      })
      .catch((err) => {
        this.props.setShowError(true);
        this.props.setLoading(false);
      });
  }

  componentDidMount() {
    this.getAboutMe();
  }

  render() {
    const aboutMe = this.state.aboutMe;
    return (
      <div className="col-12">
        <Card body={aboutMe.Bio} />
        <div className="row">
          <Card col="6" title="Skills">
            <SkillBadges skills={aboutMe.Skills} />
          </Card>
          <Card col="6" title="Worked With">
            <WWBadge workedWith={aboutMe.WorkedWith} />
          </Card>
        </div>
      </div>
    );
  }
}
