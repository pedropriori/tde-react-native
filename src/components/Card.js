import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

const Card = ({ backgroundColor }) => {
  const [fact, setFact] = useState();

  const fetchCatFact = async () => {
    try {
      const { data } = await axios.get('https://catfact.ninja/fact');
      setFact(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TouchableOpacity
      style={[styles.card, { backgroundColor }]}
      onPress={fetchCatFact}
    >
      <View>
        <Text style={styles.title}>Cat Fact</Text>
        {fact && (
          <View>
            <Text>Length: {fact.length}</Text>
            <Text>Fact: {fact.fact}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 300,
    height: 300,
    borderRadius: 10,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default Card;
