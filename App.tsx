import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList, StatusBar, SafeAreaView } from 'react-native';

// const FATEC = () => {
//   return (
//     <View>
//       <Text>
//         FATEC Zona Leste
//       </Text>
//     </View>
//   );
// };


// const ViewBoxWithColorAndText = () => {
//   return (
//     <View
//     style={{
//       flexDirection: 'row',
//       height: 100,
//       padding: 20
//     }}>
//     <View style={{ backgroundColor: 'blue', flex:0.2}}/>
//     <View style={{ backgroundColor: 'green', flex:0.2}}/>
//     <Text> Teste de Viewbox!</Text>
//     </View>
//   );
// };


// const  TesteTexto = () => {
//     const [titleText, TesteTexto] = useState("Veja a mensagem [aperte aqui]");
//     const bodyText = 'Melhor Faculdade de Tecnologia';

//     const onPressTitle = () => {
//       TesteTexto("FATEC ZL");
//     };

//     return (
//       <Text style={styles.baseText}>
//           <Text style={styles.titleText} onPress={onPressTitle}>
//             {titleText}
//             {'\n'}
//             {'\n'}
//           </Text>
//           <Text numberOfLines={5}>{bodyText}</Text>
//       </Text>
//     );

// };

// const styles = StyleSheet.create({
//   baseText: {
//     fontFamily: 'Cochin',
//   },
//   titleText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
// });

// export default TesteTexto;

// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 50,
//   },
//   tinyLogo: {
//     width: 50,
//     height: 50,
//   },
//   logo: {
//     width: 66,
//     height: 58,
//   },
// });

// const DisplayAnImage = () => {
//   return (
//     <View style={styles.container}>
//       <Image
//         style={styles.tinyLogo}
//         source={{
//           uri: 'https://reactnative.dev/img/tiny_logo.png'
//         }} />
//     </View>
//   );
// };

const DATA = [
  { id: '1', title: 'Primeiro Item:', }, { id: '2', title: 'Segundo Item:', }, { id: '3', title: 'Terceiro Item', },
];

type ItemProps = { title: string };

const Item = ({ title }: ItemProps) => (
<View style={styles.item}>
  <Text style={styles.title}>{title}</Text>
</View>
);

const Comp = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title}/>}
        keyExtractor={item => item.id}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c277',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },  
});



export default Comp;