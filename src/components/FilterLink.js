import React from 'react';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {StyleSheet, TouchableOpacity} from 'react-native';

export default function FilterLink({dispatch, action, children}) {
  return (
    <TouchableOpacity style={{marginHorizontal: 3, marginBottom: 15}}>
      <Button
        buttonStyle={{
          borderColor: 'white',
          backgroundColor: '#D8D8D8',
          borderWidth: 3,
          width: 110,
          borderRadius: 10,
          padding: 5,
        }}
        titleStyle={{marginLeft: 5, color: 'black', fontWeight: 'bold'}}
        style={styles.subText}
        icon={<Icon name="search" size={18} color="#580000" />}
        title={children}
        type="outline"
        onPress={() => {
          dispatch(action());
        }}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  subText: {
    marginBottom: 8,
    marginTop: 8,
    width: 10,
    marginHorizontal: 5,
    textAlign: 'center',
  },
});
