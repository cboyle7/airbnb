import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';

const GuestScreen = () => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
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
          <Pressable
            style={adults === 0 ? styles.disabledButton : styles.button}
            onPress={() => setAdults(adults - 1)}
            disabled={adults === 0 ? true : false}>
            <Text
              style={
                adults === 0 ? styles.disabledButtonMinus : styles.buttonMinus
              }>
              -
            </Text>
          </Pressable>

          <Text style={styles.peopleCount}>{adults}</Text>

          <Pressable
            style={styles.button}
            onPress={() => setAdults(adults + 1)}>
            <Text style={styles.buttonPlus}>+</Text>
          </Pressable>
        </View>
      </View>

      {/* Row2: 兒童 children */}
      <View style={styles.row}>
        {/* titles */}
        <View>
          <Text style={styles.typeName}>兒童</Text>
          <Text style={styles.typeAgeRange}>2 - 12歲</Text>
        </View>
        <View style={styles.peopleConsoleContainer}>
          <Pressable
            style={children === 0 ? styles.disabledButton : styles.button}
            onPress={() => setChildren(children - 1)}
            disabled={children === 0 ? true : false}>
            <Text
              style={
                children === 0 ? styles.disabledButtonMinus : styles.buttonMinus
              }>
              -
            </Text>
          </Pressable>

          <Text style={styles.peopleCount}>{children}</Text>

          <Pressable
            style={styles.button}
            onPress={() => setChildren(children + 1)}>
            <Text style={styles.buttonPlus}>+</Text>
          </Pressable>
        </View>
      </View>
      {/* Row3: 嬰幼兒 */}
      <View style={styles.row}>
        <View>
          <Text style={styles.typeName}>嬰幼兒</Text>
          <Text style={styles.typeAgeRange}>2歲以下</Text>
        </View>
        <View style={styles.peopleConsoleContainer}>
          <Pressable
            style={infants === 0 ? styles.disabledButton : styles.button}
            onPress={() => setInfants(infants - 1)}
            disabled={infants === 0 ? true : false}>
            <Text
              style={
                infants === 0 ? styles.disabledButtonMinus : styles.buttonMinus
              }>
              -
            </Text>
          </Pressable>

          <Text style={styles.peopleCount}>{infants}</Text>

          <Pressable
            style={styles.button}
            onPress={() => setInfants(infants + 1)}>
            <Text style={styles.buttonPlus}>+</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default GuestScreen;
