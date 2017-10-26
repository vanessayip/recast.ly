class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      videos: this.props.videos,
      video: this.props.videos[0]
    };
  }
  
  onSearch(input) {
    
    console.log(1);
    window.searchYouTube({query: input, max: 5}, function(data) {
      console.log(data);
    });
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
            <VideoList videos={this.state.videos}/>
          </div>
        </div>
      </div>
    );    
  }

}



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
ReactDOM.render(<App videos={exampleVideoData}/>, document.getElementById('app'));
