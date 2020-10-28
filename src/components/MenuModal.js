import React from 'react';
import AppTextInput from './AppTextInput';
import {Button} from 'react-native-elements';
import {addItem} from '../store/actions/cartActions';
import {useSelector, useDispatch} from 'react-redux';
//import takeoutsquare from '../../assets/pics/takeoutsquare.png';
import Icon from 'react-native-vector-icons/AntDesign';
import {
  StyleSheet,
  View,
  Modal,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const Seperator = () => {
  return (
    <View
      style={{
        height: 1,
        width: '100%',
        backgroundColor: 'white',
        marginVertical: 20,
      }}
    />
  );
};
export default function MenuModal(props) {
  const [quantity, setQuantity] = React.useState(1);
  const [notes, setNotes] = React.useState('');
  const [visible, setVisible] = React.useState(false);

  function increase(quantity) {
    setQuantity(quantity + 1);
  }

  function decrease(quantity) {
    setQuantity(quantity >= 2 ? quantity - 1 : quantity);
  }

  // redux dispatch & selector
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartReducer.cart);
  const user = useSelector((state) => state.userReducer.user);

  // toggle for snackbar
  //const onToggleSnackBar = () => setVisible(!visible);
  //const onDismissSnackBar = () => setVisible(false);

  // add item to cart
  const myaddItem = (id, value, notes) => {
    console.log(`Modal Quantity-${quantity}`);
    dispatch(addItem(id, value, notes.trim()));
    //onToggleSnackBar();
    setQuantity(1);
    setNotes('');
  };

  return (
    <Modal visible={props.isVisible}>
      <Icon name="close" size={36} onPress={props.close} padding={20} />
      <ScrollView>
        <View style={styles.container}>
          {/* <Image source={takeoutsquare} style={styles.img} /> */}
          <Text style={styles.subtxt}>{props.item.dish}</Text>
          {/* <Text style={styles.subtxt}>{user.email}</Text> */}
          <Text style={styles.pricetxt}>
            ${props.item.price ? props.item.price.toFixed(2) : 0}
          </Text>

          <Text style={{fontSize: 22, marginBottom: 10}}>Quantity</Text>
          <View style={styles.numContainer}>
            <TouchableOpacity>
              <Icon
                name="minuscircleo"
                size={34}
                color="#343a40"
                onPress={() => decrease(quantity)}
              />
            </TouchableOpacity>
            <Text
              style={{marginHorizontal: 10, fontSize: 18, fontWeight: 'bold'}}>
              {quantity}
            </Text>
            <TouchableOpacity>
              <Icon
                name="pluscircleo"
                size={34}
                color="#343a40"
                onPress={() => increase(quantity)}
              />
            </TouchableOpacity>
          </View>
          <View style={{paddingHorizontal: 10}}>
            <AppTextInput
              style={styles.txtInput}
              placeholder="Special Instructions. . ."
              placeholderTextColor="#191970"
              icon="edit"
              value={notes}
              onChangeText={(text) => setNotes(text)}
            />
          </View>
          <View
            style={{paddingHorizontal: 10, paddingVertical: 5, width: '100%'}}>
            <Button
              title="Add Item To Your Cart"
              type="outline"
              onPress={() => myaddItem(props.item.id, quantity, notes)}
            />
            <Seperator />
            <Button title="Go Back" type="outline" onPress={props.close} />

            {/* <Snackbar
              visible={visible}
              duration={2000}
              onDismiss={onDismissSnackBar}
              action={{
                label: 'Close',
                onPress: () => {
                  console.log(props.item.dish);
                },
              }}>
              {props.item.dish} added to Cart!
            </Snackbar> */}
          </View>
        </View>
      </ScrollView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    //justifyContent: "space-between",
    alignItems: 'center',
    alignContent: 'center',
  },
  txt: {
    fontSize: 28,
  },
  subtxt: {
    fontSize: 26,
    marginTop: 25,
  },
  pricetxt: {
    fontSize: 18,
    marginBottom: 15,
  },
  txtInput: {
    height: 45,
    marginTop: 5,
    flexDirection: 'row',
    width: '100%',
    padding: 10,
    marginVertical: 20,
    backgroundColor: '#E0E0E0',
    borderRadius: 5,
  },
  img: {
    width: 110,
    height: 110,
    marginBottom: 25,
  },
  numContainer: {
    flexDirection: 'row',
    padding: 5,
  },
});
