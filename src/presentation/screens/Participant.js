import React from 'react';
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native';

/*TODO TASK 05*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dataStyle: {
    justifyContent: 'space-between',
    marginHorizontal: 20,
    flexDirection: 'row'
  },
  text: {
    fontSize: 16
  }
});
const screen = Dimensions.get('screen');

export const Participant = ({ route: { params } }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: params.image }} style={{ width: screen.width, height: 200 }} resizeMode='contain' />
      <View>
        <Text style={{ fontSize: 25, fontWeight: "bold", margin: 20 }}>Profile</Text>
      </View>
      <View style={styles.dataStyle}>
        <Text style={styles.text}>Gender </Text>
        <Text style={styles.text}>Origin </Text>
      </View>
      <View style={styles.dataStyle}>
        <Text style={styles.text}>{params.gender}</Text>
        <Text style={styles.text}>{params.origin.name}</Text>
      </View>
      <View style={[styles.dataStyle, { marginTop: 15 }]}>
        <Text style={styles.text}>Status </Text>
        <Text style={styles.text}>Species </Text>
      </View>
      <View style={styles.dataStyle}>
        <Text style={styles.text}>{params.status}</Text>
        <Text style={styles.text}>{params.species}</Text>
      </View>
    </View>
  );
};

export default Participant;
