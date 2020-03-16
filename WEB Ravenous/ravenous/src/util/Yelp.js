const apiKey = '18CSkMOlfzjPuN4rVtHicuEnKwzndxeGy9dtyVuXBiGvxre3Y7f-v_rUQFlwz0BkfaaI1gSJ4wVW1W1rZ017DgULIngWGf9VDpL3_i30FAaraFO3bptyR2_jGi1vXnYx';

let Yelp = {
    search(term, location, sortBy){
        return fetch
        (
            `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
            {
                headers: {
                    Authorization: `Bearer ${apiKey}`
                }
            }
        )
        .then(response=>{
            return response.json();
        })
        .then(jsonResponse=>{
            if(jsonResponse){
                return jsonResponse.businesses.map(business=>{
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0]["title"],
                        rating: business.rating,
                        reviewCount: business.review_count
                    }
                })
            }
        })
    }
}
export default Yelp;