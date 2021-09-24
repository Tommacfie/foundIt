import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Api from './services/api.service';
import { useEffect, useState } from 'react';

export default function App () {
  const [items, setItems] = useState([]);

  useEffect(() => {
    (async () => {
      const items = await Api.getItems();
      setItems(items);
    })();
  }, []);

  return (
    <View style={styles.container}>
      {items.map(item => {
        return <Text>{item.title}</Text>
      })}
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
