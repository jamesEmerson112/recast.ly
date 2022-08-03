import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (query, callback) => {
  // maybe we save data to query

  // var readAll = function() {
  $.ajax({
    url: 'https://app-hrsei-api.herokuapp.com/api/recastly/videos',
    type: 'GET',
    data: {
      q: query,
      part: 'snippet',
      maxResults: 8,
      type: 'video',
      videoEmbeddable: true,
    },
    contentType: 'application/json',
    success: function (data) {
      console.log('DATA RETRIEVED');
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('FAILED TO RETRIEVE DATA', data);
    }
  });
  // };

  // readAll((data) => {
  //   query = data;
  // }).call();

  // readAll(function(data) {
  //   query = data;
  // }).call();


};

export default searchYouTube;


//endpoint:
//https://app-hrsei-api.herokuapp.com/api/recastly/videos

/* example from chatterbox sprint (post)

$.ajax({
  // This is the url you should use to communicate with the API server.
  url: 'https://app-hrsei-api.herokuapp.com/api/chatterbox/messages/CAMPUS',
  type: 'POST',
  data: JSON.stringify(message),
  contentType: 'application/json',
  success: function (data) {
    console.log('chatterbox: Message sent');
  },
  error: function (data) {
    // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
    console.error('chatterbox: Failed to send message', data);
  }
});

*/