import { Navigation } from 'react-native-navigation';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const startMainTabs = () => {
  Promise.all([
    Icon.getImageSource(Platform.OS === 'android' ? "md-map": "ios-map", 30),
    Icon.getImageSource(Platform.OS === 'android' ? "md-share-alt": "ios-share", 30),
    Icon.getImageSource(Platform.OS === 'android' ? "md-menu": "ios-menu", 30)
  ]).then( resources => {

    const navigatorButtons = {
      leftButtons: [
        {
          icon: resources[2],
          title: "Menu",
          id: "sideDrawerToggle"
        }
      ]
    }

    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: 'awesome-places.FindPlaceScreen',
          label: 'Find Place',
          title: 'Find Place',
          icon: resources[0],
          navigatorButtons: navigatorButtons
        },
        {
          screen: 'awesome-places.SharePlaceScreen',
          label: 'Share Place',
          title: 'Share Place',
          icon: resources[1],
          navigatorButtons: navigatorButtons
        }
      ],
      drawer: {
        left: {
          screen: "awesome-places.SideDrawer"
        }
      }
    })
  }).catch( err => {
    console.error(err)
  })
  
}

export default startMainTabs
