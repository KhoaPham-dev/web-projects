import React from 'react';
import './App.css';
import {SearchBar} from '../SearchBar/SearchBar';
import {SearchResults} from '../SearchResults/SearchResults';
import {Playlist} from '../Playlist/Playlist';
import Spotify from '../../util/Spotify';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      searchResults: [
        {
          name: "",
          artists: [{name: ""}],
          album: {name: ""},
          id: "",
          uri:""
        }
      ],
      playlistTracks: 
      [{
        // name: "",
        //   artists: [{name: ""}],
        //   album: {name: ""},
        //   id: "",
        //   uri:""
      }],
      playlistName: ""
    }
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName =  this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track){
    if(this.state.playlistTracks.find(savedTrack=>savedTrack.id === track.id)){
      return;
    }
    let newPlayListTracks = this.state.playlistTracks;
    if(newPlayListTracks[0].name){
      newPlayListTracks.push({
        name: track.name,
          artists: track.artists,
          album: track.album,
          id: track.id,
          uri: track.uri
      })
      this.setState({
        playlistTracks: newPlayListTracks
      })
    }
    else {
      this.setState({
        playlistTracks: [{
          name: track.name,
          artists: track.artists,
          album: track.album,
          id: track.id,
          uri: track.uri
        }]
      })
    }
    
  }

  removeTrack(track){
    let newPlayListTracks = this.state.playlistTracks;
    let indexOfTrack = newPlayListTracks.findIndex(element=>element.id === track.id);
    newPlayListTracks.splice(indexOfTrack, 1);
    if(newPlayListTracks[0]){
      this.setState({
        playlistTracks: newPlayListTracks
      })
    }
    else {
      this.setState({
        playlistTracks: [{}]
      })
    }
  }

  updatePlaylistName(name){
    this.setState({
      playlistName: name
    })
  }

  savePlaylist(){
    let trackURIs = this.state.playlistTracks.map((track)=>{
      return track.uri;
    });
    let playlistName = this.state.playlistName ? this.state.playlistName : "New Playlist";
    Spotify.savePlaylist(playlistName, trackURIs);
  }

  async search(term){
    this.setState({
      searchResults: await Spotify.search(term)
    }) 
  }
  componentWillMount(){
    Spotify.getAccessToken();
  }
  render(){

    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search}/>
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults}
                            onAdd={this.addTrack}/>
            <Playlist onSave={this.savePlaylist} onNameChange={this.updatePlaylistName} onRemove={this.removeTrack} playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}/>
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
