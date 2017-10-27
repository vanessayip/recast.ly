class App extends React.Component {

  constructor(props) {    
    super(props);
    this.state = {
      // videos: [
      // {snippet: {thumbnails: {default: {url: 'www.youtube.com'}}}, title: 'youtube', description: 'description'},
      // {snippet: {thumbnails: {default: {url: 'www.youtube.com'}}}, title: 'youtube', description: 'description'},
      // {snippet: {thumbnails: {default: {url: 'www.youtube.com'}}}, title: 'youtube', description: 'description'},
      // {snippet: {thumbnails: {default: {url: 'www.youtube.com'}}}, title: 'youtube', description: 'description'},
      // {snippet: {thumbnails: {default: {url: 'www.youtube.com'}}}, title: 'youtube', description: 'description'}
      // ],
      // video: {id: {videoId: 'id'}, snippet: {thumbnails: {default: {url: 'www.youtube.com'}}}, title: 'youtube', description: 'description'},
      // videoDetails: {statistics: {viewCount: 'view count', likeCount: 'like count', dislikeCount: 'dislike count'}, snippet: {channelTitle: 'channelTitle', publishedAt: 'Jan 1, 2018'}}
      videos: [],
      video: {},
      videoDetails: {}
    };

  }

  
  onSearch(input) {
    
    searchYouTube({query: input, max: 5}, (function(data) {
      //console.log(data.items);
      this.setState({videos: data.items, video: data.items[0]});
    }).bind(this));

  }
  
  onTitleClick(videoInfo) {
    this.setState({video: videoInfo});
    //send ajax request for specific video
    console.log('videoInfo');
    console.log(videoInfo);
    searchYouTubeVideo(videoInfo.id.videoId, (function(data) {
      console.log('video data');
      console.log(data.items[0]);
      this.setState({videoDetails: data.items[0]});
    }).bind(this));
    //set state for details with new info
    //pass details state into videoplayer in render
  }
  
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search handler={this.onSearch.bind(this)}/> 
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.video} videoDetails={this.state.videoDetails} /> 
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} handler={this.onTitleClick.bind(this)} />
          </div>
        </div>
      </div>
    );    
  }

  componentDidMount() {
    this.props.searchYouTube({query: '', max: 5}, (function(data) {
      console.log(data.items);
      this.setState({videos: data.items, video: data.items[0]});
      this.onTitleClick(this.state.video);
    }).bind(this)); 
  }

}



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

ReactDOM.render(<App searchYouTube={searchYouTube}/>, document.getElementById('app'));
