import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Lista = ({ items }) => {
  return (
    <View style={styles.container}>
      {items.map((item) => (
        <Text style={styles.item}>
          nome: {item.name}   idade: {item.idade}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  item: {
    marginBottom: 10,
    fontSize: 16,
  },
});

export default Lista;
