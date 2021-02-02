import React, {Component} from "react";

import "./stylesheets/nav.scss"
import "./stylesheets/App.css";
import "./stylesheets/About.scss";
import "./stylesheets/Education.scss";
import "./stylesheets/Work.scss"
import "./stylesheets/Skills.scss";
import "./stylesheets/Projects.scss";
import "./stylesheets/Footer.scss";


import "./stylesheets/InstagramFeed.scss";
import "./stylesheets/Slideshow.scss";

import Header from "./components/Header";
import About from "./components/About";
import Education from "./components/Education";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import InstagramFeed from "./components/InstagramFeed";
import Footer from "./components/Footer";
import resumeData from "./resumeData";

class App extends Component {
  state = {className:""};

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll=()=>{
    if (window.scrollY > 600) { //Change the value to either viewport or trigger on section
      if (!this.setState.className) {
        document.querySelector(".nav").className = "nav scroll";
      }
    }
    else {
      document.querySelector(".nav").className = "nav";
    }
  }

  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData} ref={(r)=>this.ref=r} className={this.state.className}/>
        <About resumeData={resumeData}/>
        <Education resumeData={resumeData}/>
        <Work resumeData={resumeData}/>
        <Skills resumeData={resumeData}/>
        <Projects resumeData={resumeData}/>
        <InstagramFeed />
        <Footer resumeData={resumeData}/>
      </div>
    );
  }
}

export default App;
