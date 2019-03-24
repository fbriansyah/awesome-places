import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const startMainTabs = () => {
  Promise.all([
    Icon.getImageSource("md-map", 30),
    Icon.getImageSource("ios-share-alt", 30),
    Icon.getImageSource("ios-menu", 30)
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
