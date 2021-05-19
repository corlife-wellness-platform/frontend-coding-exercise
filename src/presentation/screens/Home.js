import React from 'react';
import {
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useQuery} from '@apollo/client';
import {GET_PARTICIPANTS} from '../../data/queries';
import {SafeAreaView} from 'react-native-safe-area-context';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  participantList: {
    padding: 20,
  },
  participant: {
    flexDirection: 'row',
    padding: 20,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});

export const Home = () => {
  const {data} = useQuery(GET_PARTICIPANTS);

  /*TODO TASK 03*/
  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      {!!data && !!data.characters.results && (
        <FlatList
          style={styles.participantList}
          data={data.characters.results}
          renderItem={({item}) => (
            /*TODO TASK 04*/
            <TouchableOpacity style={styles.participant}>
              <Image style={styles.image}>{item.image}</Image>
              <Text>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </SafeAreaView>
  );
};

export default Home;
