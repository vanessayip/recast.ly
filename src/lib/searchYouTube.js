var searchYouTube = (options, callback) => {
  
  var dataObj = {
    'maxResults': options.max || 5,
    'part': 'snippet',
    'q': options.query,
    'key': 'AIzaSyBe58Aiy_fVkabHVvU3TcofQDALDe08SAQ',
    'chart': 'mostPopular'
  };  
  
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    method: 'GET',
    data: dataObj,
    success: function (data) {
      console.log('success');
      callback(data);
    },
    error: function (data) {
      console.log('failed');
    }
  });
};

window.searchYouTube = searchYouTube;
