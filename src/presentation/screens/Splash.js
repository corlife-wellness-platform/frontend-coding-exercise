import React, {useEffect, useRef} from 'react';
import {StyleSheet, Dimensions } from 'react-native';
import {useQuery} from '@apollo/client';
import {useNavigation, CommonActions} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {GET_PARTICIPANTS} from '../../data/queries';
import Animated, { EasingNode } from 'react-native-reanimated';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const Splash = () => {
  const {data} = useQuery(GET_PARTICIPANTS);
  const navigation = useNavigation();

  useEffect(() => {
    if (data && data.characters) {
      setTimeout(() => {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{name: 'Home'}],
          }),
        );
      }, 2000);
    }
  }, [navigation, data]);

  useEffect(() => {
    fadeIn()
  }, [])
  /*TODO TASK 08*/

  const fadeAnim = useRef(new Animated.Value(0)).current;

  /*TODO TASK 02*/
  const screen = Dimensions.get('screen');

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      easing: EasingNode.linear
    }).start();
  };
  return <SafeAreaView style={styles.container} edges={['right', 'left']} >
    <Animated.Image
      style={{
        width: screen.width / 2,
        height: screen.width / 2,
        opacity: fadeAnim,
        transform: [{ scale: fadeAnim }]
      }}
      source={require('../../../assets/images/splash.png')}
      resizeMode='stretch'
    />
  </SafeAreaView>;
};

export default Splash;
