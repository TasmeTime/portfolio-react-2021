import React, { Component } from 'react'
import AboutMe from "./about_me/aboutMe";
import MyProjects from "./my_projects/myProjects";
import Project from "./my_projects/project";
import ContactMe from "./contact_me/contact_me";
import {Switch,Route} from "react-router-dom";
import Loading from './loading';
import LoadingError from './loadingError';
 
export default class Content extends Component {
  //const [loading, setLoading] = useState(false);
  //const [error, setError] = useState(true);
  //const [reload, setReload] = useState(1);
  constructor(props){
    super(props);
    this.state={
      Loading:false,
      ShowError:false,
      Reload:true,
    }
    this.setLoading=this.setLoading.bind(this);
    this.setShowError=this.setShowError.bind(this);
    this.ReloadContent=this.ReloadContent.bind(this);
  } 
  setLoading(value){
    this.setState({Loading:value});
  }
  setShowError(value){
    this.setState({ShowError:value});
  }
  ReloadContent(){
    this.setState({ShowError:false});
    this.setState({Reload:false});
    this.setState({Loading:true});
    setTimeout(function() {
      this.setState({Reload:true});
      
    }.bind(this), 1000)
  }
  render(){
    return (
    <div className="content col-12 mt-5 position-relative">
      {this.state.Loading ?<Loading/>:'' }
      {this.state.ShowError?<LoadingError  reRender={this.ReloadContent}/>:''}
         {this.state.Reload?
         <Switch >
          <Route path="/about-me">
            <AboutMe setLoading={this.setLoading} setShowError={this.setShowError}/>
          </Route>
          <Route path="/my-projects">
            <MyProjects setLoading={this.setLoading} setShowError={this.setShowError}/>
          </Route>
          <Route path="/contact-me">
           <ContactMe setLoading={this.setLoading} setShowError={this.setShowError}/>
          </Route>
          <Route path="/project/:pid">
           <Project setLoading={this.setLoading} setShowError={this.setShowError} />
          </Route>
          <Route path="/*">
           <AboutMe setLoading={this.setLoading} setShowError={this.setShowError}/>
          </Route>
        </Switch>:''
        }
  </div>);
  }
}
