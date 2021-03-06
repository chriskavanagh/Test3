import React from 'react';
import {useSelector} from 'react-redux';
import {StyleSheet, Text, View} from 'react-native';
//import store from '../store/store';

export default function Total() {
  const finaltotal = useSelector((state) => state.cartReducer.total);
  console.log(finaltotal);
  const sub = useSelector((state) => state.cartReducer.subTotal);
  const tax = sub * 0.093;
  const total = sub + tax;

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Subtotal: ${sub.toFixed(2)}</Text>
      <Text style={styles.tax}>Tax: ${tax.toFixed(2)}</Text>
      <Text style={styles.total}>Total: ${total.toFixed(2)}</Text>
      <Text style={styles.total}>Total: ${finaltotal.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  txt: {
    fontSize: 19,
    marginTop: 20,
    color: '#F5F5F5',
    fontFamily: 'nunito-italic',
  },
  tax: {
    fontSize: 19,
    marginBottom: 5,
    borderBottomWidth: 2,
    borderBottomColor: '#B25838',
    color: '#FFFAF0',
    fontFamily: 'nunito-italic',
  },
  total: {
    fontSize: 20,
    //fontWeight: "bold",
    color: '#fff',
    fontFamily: 'nunito-bold',
  },
});
