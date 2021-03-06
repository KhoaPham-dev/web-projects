import React from 'react';
import './Playlist.css';
import {TrackList} from '../TrackList/TrackList';
export class Playlist extends React.Component{
    constructor(props){
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this);
    }
    handleNameChange(event){
        this.props.onNameChange(event.target.value);
    }
    render(){
        return(
            <div className="Playlist">
                <input onChange={this.handleNameChange} defaultValue={"New Playlist"}/>
                
                <TrackList isRemoval={true} onRemove={this.props.onRemove} tracks={this.props.playlistTracks[0].name ? this.props.playlistTracks : null} />
                <button onClick={this.props.onSave} className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        )
    }
}