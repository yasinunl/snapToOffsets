import { View, Text, FlatList } from 'react-native'
import React from 'react'
import {Dimensions, StyleSheet} from 'react-native';
import {Platform, NativeModules} from 'react-native';
const {StatusBarManager} = NativeModules;

const width = Dimensions.get('window').width;
const height =
  Dimensions.get('screen').height -
  (Platform.OS === 'android' ? StatusBarManager.HEIGHT : 0);

export default function FlatListComponent() {
    const data = Array.from(Array(50).keys())
    const snapToOffsetsHeader = data.map((x, i) => {
        return i !== 0 ? i * styles.flatItem.height + styles.flatHeader.height : styles.flatHeader.height;
      });
  return (
    <View style={styles.container}>
      <FlatList
      pagingEnabled
      decelerationRate={'normal'}
      disableIntervalMomentum={true}
      snapToOffsets={snapToOffsetsHeader}
      data={data}
      renderItem={({item})=><View style={[styles.flatItem, item % 2 && {backgroundColor: "red"}]} />}
      ListHeaderComponent={()=><View style={styles.flatHeader}/>}
      />
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:"100%",
    },
    flatItem:{
        width: width,
        height: height,
        borderWidth:1,
        backgroundColor:"purple"
    },
    flatHeader:{
        width:width,
        height: height / 3,
        backgroundColor: "blue"
    },
});
