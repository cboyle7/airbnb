import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';

const GuestScreen = () => {
  return (
    <View style={styles.container}>
      {/* Row 1: adults */}
      <View style={styles.row}>
        {/* titles */}
        <View>
          <Text style={styles.typeName}>成人</Text>
          <Text style={styles.typeAgeRange}>滿13歲</Text>
        </View>
        <View style={styles.peopleConsoleContainer}>
          <Pressable style={styles.button} onPress={() => console.warn('-')}>
            <Text style={styles.buttonMinus}>-</Text>
          </Pressable>

          <Text style={styles.peopleCount}>0</Text>

          <Pressable style={styles.button} onPress={() => console.warn('+')}>
            <Text style={styles.buttonPlus}>+</Text>
          </Pressable>
        </View>
      </View>
      {/* Row 1: adults */}
    </View>
  );
};

export default GuestScreen;
