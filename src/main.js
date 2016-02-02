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
var Rooturl = "https://spreadsheets.google.com/feeds/list/1HEeeGZbC-DHkTkjwQLzaoIDUy5lRAVap8IrlqLF-4ds/od6/public/values?alt=json";
var now = new Date();
var prahar = (now.getHours())/2;

module.exports = React.createClass({
getInitialState: function() {
  return {
    videoId: 'VyqIyVhHCNo',
    prahar: prahar,
  }
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
        style={{alignSelf: 'stretch', height: 300, backgroundColor: 'black', marginVertical: 10}}
        />
      <TouchableHighlight onPress={this._handlePress}>
        <Text>Next</Text>
      </TouchableHighlight>
      <Text>{this.state.prahar}</Text>
    </View>
  );
},
_handlePress: function() {
  fetch(Rooturl)
    .then((response) => response.json())
      .then((responseText) => {
        this.setState({videoId: responseText.feed.entry[0].gsx$videoid.$t});
        console.log(responseText.feed.entry[0].gsx$videoid.$t);
      });
  },
});
