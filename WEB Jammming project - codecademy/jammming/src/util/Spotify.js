let userAccessToken;
let expiresIn;
const URL = "https://accounts.spotify.com/authorize";
const CLIENT_ID = "44fffaa34e114da49955d5c86285963f";
const REDIRECT_URI = "http://localhost:3000/callback/";
const SCOPE = "user-read-private%20user-read-email";
const RESPONSE_TYPE = "token";
const STATE = "123";
let Spotify = {
    getAccessToken(){
        if(userAccessToken) return userAccessToken;
        if(window.location.href.includes("http://localhost:3000/callback/#")){
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
    }
}
export default Spotify;