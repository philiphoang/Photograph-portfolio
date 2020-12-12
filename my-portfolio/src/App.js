import React, {Component} from "react";
import "./profile.scss";
import "./nav.scss"
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
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
    if (window.scrollY > 600) {
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
        <Resume resumeData={resumeData}/>
        <Contact resumeData={resumeData}/>
        <Footer resumeData={resumeData}/>
      </div>
    );
  }
}

export default App;
