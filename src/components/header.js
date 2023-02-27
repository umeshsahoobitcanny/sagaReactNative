import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {productSearch} from '../redux/productActions';
import {useDispatch} from 'react-redux';
import {ADD_TO_CART} from '../redux/constant';
import {addToCart, EmptyCart, RemoveFromCart} from '../redux/action';
import {productList} from '../redux/productActions';
import {useSelector} from 'react-redux';
import {ProductList} from '../redux/productActions';
import {SafeAreaView} from 'react-native-safe-area-context';
import RenderList from './renderList';

const Header = () => {
  const product = {
    id: 1,
    name: 'umesh',
  };
  const stat = useSelector(state => state);
  const state = stat.productData;
  console.log(stat, 12);

  const disaptch = useDispatch();
  useEffect(() => {
    disaptch(productList());
  }, []);
  return (
    <View style={styles.container}>
      {/* <TouchableOpacity onPress={() => disaptch(productList())}>
        <Text style={styles.ProductList}>GET PRODUCT LIST</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => disaptch(addToCart())}>
        <Text style={styles.RemoveCart}>ADD TO CART</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => disaptch(RemoveFromCart())}>
        <Text style={styles.}>REMOVE FROM CART</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => disaptch(EmptyCart())}>
        <Text style={styles.EmptyCart}>EMPTY CART</Text>
      </TouchableOpacity> */}
      <View>
        <View style={styles.search}>
          <TextInput
            style={styles.TextInput}
            placeholder="search item..."
            onChangeText={event => disaptch(productSearch(event))}
          />
        </View>
        <FlatList
          numColumns={2}
          data={state}
          renderItem={dat => <RenderList item={dat} />}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  search: {
    borderRadius: 100,
    margin: 18,
    width: 320,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addCart: {
    backgroundColor: 'blue',

    color: '#fff',
  },
  TextInput: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 14,
  },
  RemoveCart: {
    margin: 15,
    backgroundColor: 'blue',
    color: '#fff',
  },
  EmptyCart: {
    margin: 10,
    backgroundColor: 'blue',
    color: '#fff',
  },
  ProductList: {
    margin: 10,
    backgroundColor: 'yellow',
    color: 'black',
  },
});
// <View key={e.id}>
//   <Text>{e.category}</Text>
//   <Image
//     style={{width: 100, height: 100}}
//     source={{
//       uri: e.image,
//     }}
//   />
// </View>
