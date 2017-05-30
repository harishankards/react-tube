import React, {Component} from 'react';

class Youtube extends Component {
    render(){
      return(
        <div>
        <button> Get youtube videos  </button>
        <div className="youtube">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/NX3_JQHKaqA"
            frameBorder="0"
            allowFullScreen></iframe>
        </div>
        </div>
      );
    }

  }

export default Youtube;
