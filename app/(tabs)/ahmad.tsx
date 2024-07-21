import React, { useState } from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import uuid from 'react-native-uuid';
import QRCode from 'react-native-qrcode-svg';

export default function TestPage() {
  const [user_id, setComment] = useState("Initial comment");

  const changeComment = () => {
    setComment("" + uuid.v4());
  }


  return (
    <View style={styles.container}>
      <Text style={styles.header}>Header</Text>
      <Text style={styles.text}>Gay Page</Text>
      <Pressable style={styles.button} onPress={changeComment}>
        <Text style={styles.buttonText}>Press me</Text>
      </Pressable>

      <Text style={styles.text}>{user_id}</Text>

      <QRCode
        value={user_id}
        size={200}
        color="orange"
        backgroundColor="black"
        linearGradient={['orange', 'red']}
        enableLinearGradient={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50, // Move content down
    paddingHorizontal: 20, // Optional, to add some horizontal padding
    backgroundColor: '#fff', // Optional, to set background color
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20, // Space between header and text
    textAlign: 'center', // Center the header text
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 20, // Add space between text and button
    padding: 15,
    backgroundColor: '#007BFF',
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});
