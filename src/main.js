'use strict';
var YouTube = require('react-native-youtube');
var React = require('react-native');
var{
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} = React;
var Rooturl = "https://spreadsheets.google.com/feeds/list/1HEeeGZbC-DHkTkjwQLzaoIDUy5lRAVap8IrlqLF-4ds/";

function getPrahar(hour) {
  var temp = 0;
  switch (true) {
    case((hour >= 1) && (hour < 4)):
    temp = 7;
    break;
    case((hour >= 4) && (hour < 7)):
    temp = 8;
    break;
    case((hour >= 7) && (hour < 10)):
    temp = 1;
    break;
    case((hour >= 10) && (hour < 13)):
    temp = 2;
    break;
    case((hour >= 13) && (hour < 16)):
    temp = 3;
    break;
    case((hour >= 16) && (hour < 19)):
    temp = 4;
    break;
    case((hour >= 19) && (hour < 22)):
    temp = 5;
    break;
    case(((hour >= 22) && (hour < 24)) || (hour == 0)):
    temp = 6;
    break;
    default:
    console.log('error');
  }
  return temp;
};

var now = new Date();
var hour = now.getHours();
var prahar = getPrahar(parseInt(hour));

//var prahar = (now.getHours())/2;

module.exports = React.createClass({
getInitialState: function() {
  return {
    videoId: 'VyqIyVhHCNo',
    artistName: '',
    praharName: '',
    ragaName: '',
    prahar: prahar,
  }
},
componentDidMount: function() {
  this._handlePress();
},
render: function() {
  return (
    <View>
    <YouTube
        ref="youtubePlayer"
        videoId = {this.state.videoId} // The YouTube video ID
        play={false}           // control playback of video with true/false
        hidden={false}        // control visiblity of the entire view
        playsInline={true}    // control whether the video should play inline
        style={{alignSelf: 'stretch', height: 100, backgroundColor: 'white', marginVertical: 10}}
        />
      <TouchableHighlight onPress={this._handlePress}>
        <Text>Next</Text>
      </TouchableHighlight>
      <Text>{this.state.prahar}</Text>
      <Text>{this.state.artistName}</Text>
      <Text>{this.state.praharName}</Text>
      <Text>{this.state.ragaName}</Text>
    </View>
  );
},
_handlePress: function() {
  var i = parseInt((Math.random()) * 10);
  var url = Rooturl + prahar + "/public/values?alt=json"
  fetch(url)
    .then((response) => response.json())
      .then((responseText) => {
        this.setState({videoId: responseText.feed.entry[i].gsx$videoid.$t,
                      artistName:responseText.feed.entry[i].gsx$artist.$t,
                      praharName:responseText.feed.entry[i].gsx$prahar.$t,
                      ragaName:responseText.feed.entry[i].gsx$raga.$t});
      });
  },
});
