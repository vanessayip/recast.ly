var searchYouTube1 = (options, callback) => {
  
  var dataObj = {
    'maxResults': options.max || 5,
    'part': 'snippet',
    'q': options.query || '',
    'key': options.key || 'AIzaSyBe58Aiy_fVkabHVvU3TcofQDALDe08SAQ',
    'chart': 'mostPopular',
    'videoEmbeddable': true,
    'type': 'video'
  };  
  
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    method: 'GET',
    data: dataObj,
    success: function (data) {
      console.log('success in searching all of youtube');
      callback(data);
    },
    error: function (data) {
      console.log('failed in searching all of youtube');
    }
  });
};

var searchYouTubeVideo = (videoId, callback) => {
  
  var dataObj = {
    'key': 'AIzaSyBe58Aiy_fVkabHVvU3TcofQDALDe08SAQ',
    'id': videoId,
    'type': 'video',
    'part': 'snippet, contentDetails, statistics'
  };  
  
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/videos',
    method: 'GET',
    data: dataObj,
    success: function (data) {
      console.log('success in searching for specific video');
      callback(data);
    },
    error: function (data) {
      console.log('failed in searching for specific video');
    }
  });
};

var searchYouTubeVideo1 = (videoId, callback) => {

  $.get('https://www.googleapis.com/youtube/v3/videos', {
    //data object
    'key': 'AIzaSyBe58Aiy_fVkabHVvU3TcofQDALDe08SAQ',
    'id': videoId,
    'type': 'video',
    'part': 'snippet, contentDetails, statistics'}
  )
    //es6 destructuring. know that what comes back is going to be normally stored in data.items, so becomes {items}
    .done(({items}) => {
      if (callback) {
        console.log('success in searching for specific video');
        callback(items);
      }
    }) 
    .fail(({responseJSON}) => {
      console.log('failed in searching for specific video');
      responseJSON.error.errors.forEach((err) => console.error(err));
    });
  
};

var searchYouTube = _.debounce(searchYouTube1, 500);

window.searchYouTube = searchYouTube;
