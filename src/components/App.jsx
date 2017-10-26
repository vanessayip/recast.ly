class App extends React.Component {

  constructor(props) {    
    super(props);
    this.state = {
      videos: [
      {snippet: {thumbnails: {default: {url: 'www.youtube.com'}}}, title: 'youtube', description: 'description'},
      {snippet: {thumbnails: {default: {url: 'www.youtube.com'}}}, title: 'youtube', description: 'description'},
      {snippet: {thumbnails: {default: {url: 'www.youtube.com'}}}, title: 'youtube', description: 'description'},
      {snippet: {thumbnails: {default: {url: 'www.youtube.com'}}}, title: 'youtube', description: 'description'},
      {snippet: {thumbnails: {default: {url: 'www.youtube.com'}}}, title: 'youtube', description: 'description'}
      ],
      video: {id: {videoId: 'id'}, snippet: {thumbnails: {default: {url: 'www.youtube.com'}}}, title: 'youtube', description: 'description'}
    };
  }
  
  componentWillMount() {
    searchYouTube({query: 'hello', max: 5}, (function(data) {
      console.log(data.items);
      this.setState({videos: data.items, video: data.items[0]});
    }).bind(this));   
  }
  
  onSearch(input) {
    
    searchYouTube({query: input, max: 5}, (function(data) {
      console.log(data.items);
      this.setState({videos: data.items, video: data.items[0]});
    }).bind(this));
  }
  
  onTitleClick(videoInfo) {
    this.setState({video: videoInfo});
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
            <VideoPlayer video={this.state.video}/> 
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} handler={this.onTitleClick.bind(this)} />
          </div>
        </div>
      </div>
    );    
  }

}



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

ReactDOM.render(<App />, document.getElementById('app'));
