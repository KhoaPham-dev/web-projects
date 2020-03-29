let userAccessToken;
let expiresIn;
const URL = "https://accounts.spotify.com/authorize";
const CLIENT_ID = "44fffaa34e114da49955d5c86285963f";
const REDIRECT_URI = "http://localhost:3000/";
const SCOPE = "user-read-private%20user-read-email%20playlist-read-collaborative%20playlist-modify-public";
const RESPONSE_TYPE = "token";
const STATE = "123";
let Spotify = {
    getAccessToken(){
        if(userAccessToken) return userAccessToken;
        if(window.location.href.includes("http://localhost:3000/#access_token")){
            userAccessToken = window.location.href.match(/access_token=([^&]*)/)[1];
            expiresIn = window.location.href.match(/expires_in=([^&]*)/)[1];
            window.setTimeout(() => {
                userAccessToken = ''
            }, expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
        }
        else
            window.location = `${URL}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}&response_type=${RESPONSE_TYPE}&state=${STATE}`;
        
    },
    search(term){
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`,{
            headers: {
                'Authorization': 'Bearer ' + userAccessToken
            }
        }).then((response)=>{
            return response.json();
        }).then((tracks)=>{
            if(tracks.tracks.items){
                return tracks.tracks.items.map(track=>track);
            }
            else return [];
        })
    },
    savePlaylist(playlistName, arrayURIs){
        if(!playlistName || !arrayURIs)return;
        let accessToken = userAccessToken;
        let headers = {
            'Authorization': 'Bearer ' + accessToken
        }
        let userID = '';
        let playlistID = '';
        fetch("https://api.spotify.com/v1/me", {
            headers: headers
        })
        .then((response)=>{
            return (response.json());
        })
        .then((jsonResponse)=>{
            userID = jsonResponse.id;
            return userID;
        })
        .then((userID)=>{
            headers["Content-Type"] = "application/json";
            return fetch(`https://api.spotify.com/v1/users/${userID}/playlists`, {
                method: "POST",
                headers: headers,
                body: JSON.stringify({
                    name: playlistName,
                    "description": "",
                    "public": true
                })
            })
        })
        .then((response)=>{
            return response.json();
        })
        .then((jsonResponse)=>{
            playlistID = jsonResponse.id
            return playlistID;
        })
        .then((playlistID)=>{
            return fetch(`https://api.spotify.com/v1/playlists/${playlistID}/tracks`,{
                    method: "POST",
                    headers: headers,
                    body: JSON.stringify({
                        uris: arrayURIs
                    })
                })
        })
        .then((response)=>{
            if(response.ok)return true;
        })
        .catch((error)=>{
            console.log(error.message);
        });
    }
}
export default Spotify;