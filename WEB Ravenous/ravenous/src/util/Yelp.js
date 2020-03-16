const apiKey = '18CSkMOlfzjPuN4rVtHicuEnKwzndxeGy9dtyVuXBiGvxre3Y7f-v_rUQFlwz0BkfaaI1gSJ4wVW1W1rZ017DgULIngWGf9VDpL3_i30FAaraFO3bptyR2_jGi1vXnYx';

let Yelp = {
    search(term, locaiton, sortBy){
        return new Promise ((resolve, reject)=>{

        })
        return fetch(`https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`);
    }
}
