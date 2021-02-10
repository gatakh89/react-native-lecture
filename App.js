import 'react-native-gesture-handler';
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Home from './components/Home'
import List from './components/List'
import Actions from './components/Actions'
import Details from './components/Details'

// https://ionicons.com/
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const ListStack = createStackNavigator();
const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} options={{title:"Home", headerTitleAlign:"center"}} />
      <HomeStack.Screen name="Details" component={Details} options={{title:"Details", headerTitleAlign:"center"}}  />
    </HomeStack.Navigator>
  )
}

const ListStackScreen = () => {
  return (
    <ListStack.Navigator>
      <ListStack.Screen name="List" component={List} options={{title:"List", headerTitleAlign:"center"}} />
      <ListStack.Screen name="Details" component={Details} options={{title:"Details", headerTitleAlign:"center"}}  />
    </ListStack.Navigator>
  )
}

const screeOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    switch(route.name){
      // 현재 탭 네비게이션 화면이 Home이면
      // home-outline
      case 'Home':
        iconName = focused
          ? 'home'
          : 'home-outline';
        break;
      case 'List':
        iconName = focused
          ? 'list'
          : 'list-outline'; 
        break;
      case 'Actions':
        iconName = focused
          ? 'checkmark'
          : 'checkmark-outline'; 
        break;
    }

    // You can return any component that you like here!
    return <Ionicons name={iconName} size={size} color={color} />;
  },
})

const tabBarOptions= {
  activeTintColor: 'tomato',
  inactiveTintColor: 'gray',
}

export default function App() {
  return (
    <SafeAreaProvider>
     <NavigationContainer>
       <Tab.Navigator tabBarOptions={tabBarOptions} screenOptions={screeOptions}>
          <Tab.Screen name="Home" component={HomeStackScreen} />
          <Tab.Screen name="List" component={ListStackScreen} />
          <Tab.Screen name="Actions" component={Actions} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>

  
  );
}













// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// // from 자바스크립트 파일명
// // from 디렉토리명 -> 디렉토리/index.js
// // import HelloWorld from './components/HelloWorld'
// // import Counter from './components/Counter'
// // import LotsOfGreetings from './components/LotsOfGreetings'
// import SimpleList from './components/SimpleList'


// /* App 컴포넌트 시작 */
// export default function App() {
//   // JSX
//   // UI 템플릿을 작성
//   return (
//         // 속성={값}
//         // 속성={"문자열"}
//         // 속성={{name:"sss", phone:"aaaa"}}
//         // 속성={객체변수}
//     <View style={styles.container}>
//       {/* <HelloWorld></HelloWorld> */}
//       {/* <Counter></Counter> */}
//       {/* <LotsOfGreetings></LotsOfGreetings> */}
//       <SimpleList></SimpleList>
//       <StatusBar style="auto" />
//     </View>
//   );
// }
// /* App 컴포넌트 끝 */
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
