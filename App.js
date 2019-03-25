import { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux'

// Screens
import AuthScreen from './src/screens/Auth/Auth';
import SharePlaceScreen from './src/screens/SharePlace/SharePlace';
import FindPlaceScreen from './src/screens/FindPlace/FindPlace';
import PlaceDetailScreen from './src/screens/PlaceDetail/PlaceDetail';
import SideDrawer from './src/screens/SideDrawer/SideDrawer';

// Redux Setup
import configureStore from './src/store/configureStore';
const store = configureStore()

// Register screens
Navigation.registerComponent(
  'awesome-places.AuthScreen', 
  () => AuthScreen, 
  store, 
  Provider
)

Navigation.registerComponent(
  'awesome-places.SharePlaceScreen', 
  () => SharePlaceScreen, 
  store, 
  Provider
)

Navigation.registerComponent(
  'awesome-places.FindPlaceScreen', 
  () => FindPlaceScreen, 
  store, 
  Provider
)

Navigation.registerComponent(
  'awesome-places.PlaceDetailScreen', 
  () => PlaceDetailScreen, 
  store, 
  Provider
)

Navigation.registerComponent(
  'awesome-places.SideDrawer', 
  () => SideDrawer
)

// Start a App
Navigation.startSingleScreenApp({
  screen: {
    screen: "awesome-places.AuthScreen",
    title: "Login"
  }
})