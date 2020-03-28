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
          artist: "",
          album: "",
          id: ""
        }
      ],
      playlistTracks: [{
        name: "em cua ngay hom qua",
        artist: "sontungmtp",
        album: "kkkk",
        id: "18110"
      }],
      playlistName: "dcdc"
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

  updatePlaylistName(name){
    this.setState({
      playlistName: name
    })
  }

  savePlaylist(){
    let trackURIs = this.state.playlistTracks.uri;
  }

  search(term){
    this.setState({
      searchResults: Spotify.search(term)
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
