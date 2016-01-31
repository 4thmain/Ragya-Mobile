'use strict';
var YouTube = require('react-native-youtube');
var React = require('react-native');
var{
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;


module.exports = React.createClass({
render: function() {
  return (
    <View>
    <YouTube
        ref="youtubePlayer"
        videoId="VyqIyVhHCNo" // The YouTube video ID
        play={true}           // control playback of video with true/false
        hidden={false}        // control visiblity of the entire view
        playsInline={true}    // control whether the video should play inline

        onReady={(e)=>{this.setState({isReady: true})}}
        onChangeState={(e)=>{this.setState({status: e.state})}}
        onChangeQuality={(e)=>{this.setState({quality: e.quality})}}
        onError={(e)=>{this.setState({error: e.error})}}
        onProgress={(e)=>{this.setState({currentTime: e.currentTime, duration: e.duration})}}

        style={{alignSelf: 'stretch', height: 300, backgroundColor: 'black', marginVertical: 10}}
        />
    </View>
  );
}
});
