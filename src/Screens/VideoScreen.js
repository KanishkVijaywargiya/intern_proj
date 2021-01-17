import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import Header from '../Components/Header.js'

import YouTubePlayer from "react-native-youtube-sdk";

export default class VideoScreen extends Component {
    render() {
        return (
            <View style={{ backgroundColor: '#EAF0F1', flex: 1 }}>
                <Header title='Video' color='#E83350' style={[styles.header]} />

                <ScrollView>
                    <YouTubePlayer
                        ref={ref => (this.youTubePlayer = ref)}
                        videoId="t_aIEOqB8VM"
                        autoPlay={true}
                        fullscreen={false}
                        showFullScreenButton={true}
                        showSeekBar={true}
                        showPlayPauseButton={true}
                        startTime={5}
                        style={{ width: "100%", height: 200 }}
                        onReady={e => console.log("onReady", e.type)}
                        onError={e => console.log("onError", e.error)}
                        onChangeState={e => console.log("onChangeState", e.state)}
                        onChangeFullscreen={e => console.log("onChangeFullscreen", e.isFullscreen)}
                    />
                    <View>
                        <TouchableOpacity style={styles.button} onPress={() => this.youTubePlayer.loadVideo("QdgRNIAdLi4", 0)}>
                            <Text style={{ color: "#ffffff" }}>loadVideo</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => this.youTubePlayer.seekTo(10)}>
                            <Text style={{ color: "#ffffff" }}>SeekTo(10)</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => this.youTubePlayer.play()}>
                            <Text style={{ color: "#ffffff" }}>Play</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => this.youTubePlayer.pause()}>
                            <Text style={{ color: "#ffffff" }}>Pause</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={async () => {
                                const currentTime = await this.youTubePlayer.getCurrentTime();
                                ToastAndroid.show(String(currentTime), ToastAndroid.SHORT);
                            }}
                        >
                            <Text style={{ color: "#ffffff" }}>getCurrentTime</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={async () => {
                                const duration = await this.youTubePlayer.getVideoDuration();
                                ToastAndroid.show(String(duration), ToastAndroid.SHORT);
                            }}
                        >
                            <Text style={{ color: "#ffffff" }}>getVideoDuration</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        elevation: 10,
        shadowOpacity: 0.7,
        shadowRadius: 2,
        shadowOffset: { width: 0, height: 2 },
    },
    button: {
        backgroundColor: "red",
        margin: 12,
        padding: 12,
        borderRadius: 4,
    },
})