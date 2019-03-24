import React from 'react'
import { StyleSheet, FlatList } from 'react-native'
import ListItem from '../ListItem/ListItem';


const PlaceList = (props) => {
   return (
   <FlatList 
    style={style.placeList}
    data={props.places}
    keyExtractor={info => info.key}
    renderItem={(info) => (
      <ListItem 
        placeName={info.item.name} 
        placeImage={info.item.image}
        onItemPressed={() => props.onItemPressed(info.item.key)} />
        
    )}
  />)
}

const style = StyleSheet.create({
  placeList: {
  
  }
})

export default PlaceList

