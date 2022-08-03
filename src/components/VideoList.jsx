import VideoListEntry from './VideoListEntry.js';
//import child component for reference
//in current component -- required

var VideoList = (props) => {
  const list = [];

  props.videos.forEach((videoObj) => {
    list.push(<VideoListEntry
      playerSwap = {props.playerSwap}
      video={videoObj}
      videos={props.videos}
    />);
  });

  return (
    <div className="video-list">
      {list}
    </div>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};

// class VideoList extends React.Component {
//   constructor(props) {
//     console.log(props);
//     super(props);
//   }


//   render() {
//     return (
//       <div>
//         <VideoListEntry videoList = {this.props.videoList}/>

//       </div>
//     );
//   }
// }

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
