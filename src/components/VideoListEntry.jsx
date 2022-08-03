var VideoListEntry = (props) => {
  console.warn(props);
  //currently this is hard coded to return
  //the video we see on the list


  return (
    <div className="video-list-entry media">
      <div className="media-left media-middle">
        <img className="media-object" src={props.video.snippet.thumbnails.default.url} alt="" />
      </div>
      <div className="media-body">
        <div className="video-list-entry-title"
          onClick={() => { props.playerSwap(props.video); }}>
          {props.video.snippet.title}
        </div>
        <div className="video-list-entry-detail">{props.video.snippet.description}</div>
      </div>
    </div>
  );
};

// can we do like onClick ={() => props.inPlayer = props.videoObj}

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: PropTypes.object.isRequired
};

// class VideoListEntry extends React.Component {
//   constructor(props) {
//     super(props);
//     console.warn(props);
//   }

//   render() {
//     return ();
//   }
// }

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoListEntry;
