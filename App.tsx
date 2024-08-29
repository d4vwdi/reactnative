import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, FlatList, StatusBar, SafeAreaView } from 'react-native'
import Pagina1 from './src/Pagina1'
import Pagina2 from './src/Pagina2'
import {Comp1, Comp2, Comp3} from './src/Pagina3'

export default () => (
  <View style={style.Pagina1}>
    <Pagina1 />
    <Pagina2 />
    <Comp1 />
    <Comp2 />
    <Comp3 />
  </View>
)

const style = StyleSheet.create({
  Pagina1:{
    backgroundColor: '#AC0',
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})