import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

const ListItem = (props) => (
  <TouchableOpacity onLongPress={props.onItemLongPressed} onPress={props.onItemPressed}>
    <View style={style.listItem}>
      <Image style={style.placeImage} source={props.placeImage} />
      <Text>{props.placeName}</Text>
    </View>
  </TouchableOpacity>
)

const style = StyleSheet.create({
  listItem: {
    padding: 10,
    marginBottom: 5,
    backgroundColor: "#eee",
    flexDirection: "row",
    alignItems: "center"
  },
  placeImage: {
    width: 32,
    height: 32,
    marginRight: 8
  }
})

export default ListItem