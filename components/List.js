import React from 'react';
import { Button } from 'react-native';
import { Text, View} from 'react-native';

// 함수의 리턴 값이 JSX.Element면
// React 컴포넌트가 된다.

// JSX를 쓸려면 import React from 'react';
// 네비게이터로 화면을 이동할때컴포넌트 속성으로 전달됨
const List = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Text>List</Text>
      <Button title='Go to Details' onPress={()=>{navigation.navigate("Details", {id: 1})}}></Button>
    </View>
  )
}
export default List;