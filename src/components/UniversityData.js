import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

const UniversityData = () => {
  const [universities, setUniversities] = useState([]);

  useEffect(() => {
    axios.get('http://universities.hipolabs.com/search?country=Brazil')
      .then(response => {
        setUniversities(response.data);
      })
      .catch(error => {
        console.error('Error fetching universities:', error);
      });
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.url}>{item.web_pages[0]}</Text>
    </View>
  );

  return (
    <FlatList
      data={universities}
      renderItem={renderItem}
      keyExtractor={item => item.name}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  url: {
    marginTop: 5,
    color: 'blue',
  },
});

export default UniversityData;