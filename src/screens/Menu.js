import React, {useState} from 'react';
import MenuModal from '../components/MenuModal';
import FilterLink from '../components/FilterLink';
import {useSelector, useDispatch} from 'react-redux';
import {ListItem} from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
//import {Icon} from 'react-native-elements';
//import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

//import { soupSelector, allSelector } from "../redux/selectors";
import {
  getMenu,
  filterSoup,
  filterBeef,
  filterChef,
  filterPork,
  filterVegetable,
} from '../store/actions/menuActions';
//import {createSelector} from 'reselect';
import {
  allSelector,
  soupSelector,
  beefSelector,
  poultrySelector,
  seafoodSelector,
  porkSelector,
  vegetableSelector,
  chefSelector,
} from '../store/selectors';

export default function Menu({navigation}) {
  const myState = useSelector((state) => state.menuReducer.items);

  // Memoized selector with Reselect
  const getAll = useSelector((state) => allSelector(state));
  const getSoup = useSelector((state) => soupSelector(state));
  const getBeef = useSelector((state) => beefSelector(state));
  const getChef = useSelector((state) => chefSelector(state));
  const getPoultry = useSelector((state) => poultrySelector(state));
  const getPork = useSelector((state) => porkSelector(state));
  const getSeafood = useSelector((state) => seafoodSelector(state));
  const getVegetable = useSelector((state) => vegetableSelector(state));

  // get user from Redux
  //const user = useSelector((state) => state.userReducer.user);

  // FontAwesome5 use (https://github.com/oblador/react-native-vector-icons/blob/master/FONTAWESOME5.md#usage)
  //const icon = <FontAwesome5 name={'cart-plus'} size={27} color={'#580000'} />;

  const dispatch = useDispatch();

  const [isVisible, setIsvisible] = useState(false);
  const [data, setData] = useState({});

  function passData(item) {
    setIsvisible(true);
    setData(item);
  }

  function closeModal() {
    setIsvisible(false);
  }

  return (
    <View style={styles.container}>
      <MenuModal
        isVisible={isVisible}
        item={data}
        close={closeModal}
        animationType="slide"
      />
      <View>
        <Icon
          name="swap"
          size={24}
          color="orange"
          style={{marginTop: 1, marginLeft: 5}}
        />

        <ScrollView
          horizontal={true}
          alwaysBounceHorizontal={true}
          persistentScrollbar={true}
          contentContainerStyle={{
            marginVertical: 5,
          }}>
          <FilterLink action={getMenu} dispatch={dispatch}>
            All
          </FilterLink>

          <FilterLink action={filterSoup} dispatch={dispatch}>
            Soup
          </FilterLink>

          <FilterLink action={filterBeef} dispatch={dispatch}>
            Beef
          </FilterLink>

          <FilterLink action={filterVegetable} dispatch={dispatch}>
            Vegetable
          </FilterLink>

          <FilterLink action={filterPork} dispatch={dispatch}>
            Pork
          </FilterLink>

          <FilterLink action={filterChef} dispatch={dispatch}>
            Chef
          </FilterLink>

          <FilterLink action={filterPork} dispatch={dispatch}>
            Sushi
          </FilterLink>
        </ScrollView>
      </View>

      <FlatList
        data={myState}
        keyExtractor={(item) => item.id.toString()} // moved this from bottom
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => passData(item)}>
            <ListItem
              bottomDivider
              containerStyle={{backgroundColor: '#3c3c3b'}}>
              <FontAwesome5
                name="cart-plus"
                color="#B25838"
                size={20}
                containerStyle={{marginRight: 3}}
              />
              <ListItem.Content>
                <ListItem.Title style={{fontWeight: '700', color: 'white'}}>
                  {item.dish}
                </ListItem.Title>
                <ListItem.Subtitle
                  style={{color: 'white'}}>{`$${item.price.toFixed(
                  2,
                )}`}</ListItem.Subtitle>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>
          </TouchableOpacity>
        )}
      />

      {/* <Button
        style={styles.btn}
        title={user.email}
        onPress={() => navigation.navigate("Add Food")}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#303030',
  },
  subContainer: {
    flexDirection: 'row',
    marginHorizontal: 15,
    marginVertical: 15,
    justifyContent: 'center',
    paddingRight: 20,
  },
  subText: {
    paddingHorizontal: 10,
    color: 'blue',
    textDecorationLine: 'underline',
  },

  listTitle: {
    fontSize: 18,
  },
  btn: {
    marginVertical: 1,
    color: 'green',
    width: '50%',
    alignSelf: 'center',
  },
});
