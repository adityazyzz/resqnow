import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WeatherCard = ({ date, temperature, description }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.temperature}>{temperature}°C</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    margin: 8,
    alignItems: 'center',
  },
  date: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  temperature: {
    fontSize: 24,
    marginVertical: 8,
  },
  description: {
    fontSize: 16,
  },
});

export default WeatherCard;
