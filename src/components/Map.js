import React, { useState } from 'react';
import PlacesAutoComplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';
import { motion } from 'framer-motion';
import './Map.css'


const MapContainer = () => {

  const [address, setAddress] = useState("")
  const [coordinates, setCoordinates] = useState({lat: 41.8239891, lng: -71.4128343})
  const [ selected, setSelected ] = useState({});

  const locations = [
    {
      name: "Location 1",
      location: { 
        lat: 41.8342,
        lng: -71.3957 
      },
    },
    {
      name: "Location 2",
      location: { 
        lat: 41.3917,
        lng: -70.9874
      },
    },
    {
      name: "Location 3",
      location: { 
        lat: 41.6773,
        lng: -71.578
      },
    },
    {
      name: "Location 4",
      location: { 
        lat: 41.8797,
        lng: -71.41682
      },
    },
    {
      name: "Location 5",
      location: { 
        lat: 41.4055,
        lng: -72.0015
      },
    }
  ];

  const onSelect = item => {
    setSelected(item);
  }
  
  const handleSelect = async(value) => {
    const results = await geocodeByAddress(value);
    const location = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(location)
  }
  
  const mapStyles = {        
    height: "80vh",
    width: "70%",
    borderRadius: '10px'
  };
  
  return (
      <motion.div 
        initial={{opacity: 0, transform: 'translateY(100px)'}}
        animate={{opacity: 1, transform: 'translateY(0px)'}}
        exit={{opacity: 0}}
        transition={{duration: 1}}
        className='map-container'
      >
        <PlacesAutoComplete 
          value={address} 
          onChange={setAddress} 
          onSelect={handleSelect}>
          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div className='searchbar-container'>
              <label htmlFor='searchbar'>Search:</label>
              <input {...getInputProps({placeholder: 'Find Your City', className: 'searchbar', id: 'searchbar'})} />
              <div className='searchbar-suggestions'>
              {loading && <div>...loading</div>}
              {suggestions.map((suggestion) => {
              const style = {
                width: '100%',
                zIndex: '1',
                fontFamily: 'inherit',
                backgroundColor: suggestion.active ? '#76ced7' : 'white',
                fontWeight: 'bold',
                outline: 'none'
              }
              return(
                <div className='searchbar-suggestion' {...getSuggestionItemProps(suggestion, { style })} key={suggestion.description}>
                  {suggestion.description}
                </div>
              )
              })}
              </div>
           </div>
          )}
        </PlacesAutoComplete>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={coordinates}
        >
        {
              locations.map(item => {
                return (
                <Marker 
                  key={item.name} 
                  position={item.location}
                  onClick={() => onSelect(item)}
                />
                )
            })
         }
         {
            selected.location && 
            (
              <InfoWindow
              position={selected.location}
              clickable={true}
              onCloseClick={() => setSelected({})}
            >
              <p>{selected.name}</p>
            </InfoWindow>
            )
         }
        </GoogleMap>
     </motion.div>

  )
}

export default MapContainer;
