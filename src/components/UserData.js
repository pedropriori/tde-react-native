import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const UserData = () => {
  const [user, setUser] = useState(null);

  const fetchUserData = async () => {
    try {
      const { data } = await axios.get('https://randomuser.me/api/');
      setUser(data.results[0]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <View style={styles.container}>
      {user && (
        <View>
          <Text>Name: {`${user.name.first} ${user.name.last}`}</Text>
          <Text>Email: {user.email}</Text>
          <Text>Location: {`${user.location.city}, ${user.location.country}`}</Text>
          <Text>Gender: {user.gender}</Text>
          <Text>Phone: {user.phone}</Text>
          <Text>Age: {user.dob.age}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
});

export default UserData;