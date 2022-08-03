import Search from './Search.js';
import VideoList from './VideoList.js';
// import VideoListEntry from './VideoListEntry.js';
import VideoPlayer from './VideoPlayer.js';

import exampleVideoData from '.././data/exampleVideoData.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.playerSwap = this.playerSwap.bind(this);
    this.state = {
      videos: exampleVideoData,
      // inPlayer: videos[0],
      inPlayer: exampleVideoData[0]
    };
  }

  videoCount () {
    return this.state.videos.length;
  }

  playerSwap (videoObj) {
    // let currState = this.state;
    //need index of thing that is clicked
    // currState.inPlayer = exampleideoData[]
    console.log(videoObj);
    this.setState({
      inPlayer: videoObj
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
            <Search />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em>videoPlayer</em> view goes here</h5></div>
            <VideoPlayer
              videos = {this.state.videos}
              video={this.state.inPlayer} />
          </div>
{/* may need a method that is going to update inPlayer */}
          <div className="col-md-5">
            {/* <div><h5><em>videoList</em> view goes here</h5></div> */}
            <VideoList
              playerSwap = {this.playerSwap}
              videoCount = {this.videoCount()}
              videos = {this.state.videos}
              video = {this.state.inPlayer} />
          </div>
        </div>
      </div>
    );
  }
}
// JSX component
// 1. write a class App which uses whatever is provided on the top as a return statement

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {videoList: [exampleVideoData]};
//   }
//   render() {
//     return (
//       <div>
//         <Search />
//         <VideoList videoList = {this.state.videoList} />
//       </div>
//     );
//   }
// }



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
