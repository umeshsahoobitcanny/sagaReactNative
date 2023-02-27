import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Platform,
} from 'react-native';
import React from 'react';
import Header from './src/components/header';
import {useDispatch} from 'react-redux';
import {addToCart} from './src/redux/action';
import {REMOVE_TO_CART} from './src/redux/constant';
import ShoppingCart from './src/screens/ShoppingCart';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
const Stack = createNativeStackNavigator();
import {useSelector} from 'react-redux';
import CartScreen from './src/screens/cartScreen';

const App = () => {
  const disaptch = useDispatch();
  const result = useSelector(state => state.cartData);
  // console.log('data in header', result);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Header}
          options={{
            headerRight: props => <ShoppingCart {...props} />,
            headerTitleStyle: {
              fontWeight: 'bold',
              color: '#0f1012',
            },
            headerStyle: {
              backgroundColor: '#a6cef5',
            },
          }}
        />
        <Stack.Screen name="cartScreen" component={CartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  iconContainer: {
    paddingLeft: 20,
    paddingTop: 10,
    marginRight: 5,
  },
});
