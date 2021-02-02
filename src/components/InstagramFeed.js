import React, {Component} from "react";
import Feed from "react-instagram-authless-feed"


class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    // componentDidCatch(error, errorInfo) {
    //   // You can also log the error to an error reporting service
    //   logErrorToMyService(error, errorInfo);
    // }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <h1>Nothing yet to show</h1>;
      }
  
      return this.props.children; 
    }
}

export default class InstagramFeed extends Component {
	constructor(props) {

		super(props);
		this.state = {
			photos: []
		}
	}


  render () {
        return (
            <section id="instagramfeed">
                <h1>My Instagram Feed</h1>
                <ErrorBoundary>
                          <Feed userName="instagram" limit="3"/>
                </ErrorBoundary>
            </section>
        );
    }
}