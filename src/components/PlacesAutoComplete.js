import React, { useState } from 'react';
import PlacesAutoComplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

export default function SearchBar(){
  const [address, setAddress] = useState("")
  const [coordinates, setCoordinates] = useState({lat: null, lng: null})
  
  const handleSelect = async(value) => {
    const results = await geocodeByAddress(value);
    const location = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(location)
  }

 return(
   <PlacesAutoComplete 
    value={address} 
    onChange={setAddress} 
    onSelect={handleSelect}>
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div>
          <p>lat: {coordinates.lat}</p>
          <p>lng: {coordinates.lng}</p>
          <input {...getInputProps({ placholder: 'Search for Fridge'})} />
          <div>
            {loading && <div>...loading</div>}
            {suggestions.map((suggestion) => {
              const style = {
                backgroundColor: suggestion.active ? '#76ced7' : 'white'
              }
              return(
                <div {...getSuggestionItemProps(suggestion, { style })} key={suggestion.description}>
                  {suggestion.description}
                </div>
              )
            })}
          </div>
        </div>
      )}
   </PlacesAutoComplete>
 )
}





