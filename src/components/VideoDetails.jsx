var VideoDetails = (props) => {

  if (Object.keys(props.videoDetails).length === 0) {
    return (<div></div>);
  }

  return (

    <div className="video-player-details">
      <h4>{props.video.snippet.title}</h4>
      <div className='titleLeft'>
        {props.videoDetails.statistics.viewCount} views
      </div>
      <div className='statsRight'>
        <div id='like'>{props.videoDetails.statistics.likeCount} likes</div>
        <div id='dislike'>{props.videoDetails.statistics.dislikeCount} dislikes</div>
      </div>
      <div class='channelContent'>
        <div>{props.videoDetails.snippet.channelTitle}</div>
        <div>{(props.videoDetails.snippet.publishedAt).toString()}</div>
      </div>
      <div>{props.video.snippet.description}</div>

    </div>  
  );

};

window.VideoDetails = VideoDetails;