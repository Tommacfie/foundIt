import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Api from './services/api.service';
import { useEffect, useState } from 'react';
import Header from './components/presentational/header.component';


const item = {
  title: "Shoe",
  description: "Red leather",
  brandModel: 'Reebok',
  image: "www.shoes.com",
  whereFoundOrLost: "Gym",
  lostOrFound: true,
  submittedBy: "Me"
}

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
      <Header />
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
