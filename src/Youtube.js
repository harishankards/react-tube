import React, {Component} from 'react';

const API = 'AIzaSyAOYG1Ai4mZy6L-ifZgQ8bzS87vA6v3JdA'
const channelID = 'UCXgGY0wkgOzynnHvSEVmE3A'
const result = 20;

var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${result}`


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
