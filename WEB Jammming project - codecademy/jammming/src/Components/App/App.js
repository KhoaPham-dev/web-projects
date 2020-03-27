import React from 'react';
import './App.css';
import {SearchBar} from '../SearchBar/SearchBar';
import {SearchResults} from '../SearchResults/SearchResults';
import {Playlist} from '../Playlist/Playlist';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      searchResults: [
        {
          name: "",
          artist: "",
          album: "",
          id: ""
        }
      ],
      playlistTracks: [{
        name: "",
        artist: "",
        album: "",
        id: ""
      }],
      playlistName: ""
    }
    this.addTrack = this.addTrack.bind(this);
  }

  addTrack(track){
    if(this.state.playlistTracks.find(savedTrack=>savedTrack.id === track.id)){
      return;
    }
    let newPlayListTracks = this.state.playlistTracks;
    newPlayListTracks.push({
      name: track.name,
        artist: track.artist,
        album: track.album,
        id: track.id
    })
    this.setState({
      playlistTracks: newPlayListTracks
    })
  }

  removeTrack(track){
    let newPlayListTracks = this.state.playlistTracks;
    let indexOfTrack = newPlayListTracks.indexOf(track.id);
    newPlayListTracks.splice(indexOfTrack, 1);
    this.setState({
      playlistTracks: newPlayListTracks
    })
  }

  render(){

    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar/>
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults}
                            onAdd={this.addTrack}/>
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}/>
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
