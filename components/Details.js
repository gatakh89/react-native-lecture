import React from 'react';
import { Text, View } from 'react-native';
import { LISTDATA } from '../shared/list'
import { Card, Icon, Button } from 'react-native-elements'

// 함수의 리턴 값이 JSX.Element면
// React 컴포넌트가 된다.

// JSX를 쓸려면 import React from 'react';
// 네비게이터로 화면을 이동할때컴포넌트 속성으로 전달됨
const Details = ({ route, navigation }) => {

  //navigation.navigate("스크린이름",매개변수)
  console.log("--details");
  console.log(route.params); // navigate로 넘어온 매개변수

  // const id = route.params.id;
  const { id } = route.params;

  const item = LISTDATA.filter(item => item.id == id)[0];
  console.log(item);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
        <Card>
        <Card.Title>{item.title}</Card.Title>
        <Card.Divider/>
        <Card.Image source={{uri: item.image}}>
        </Card.Image>
        <Card.Divider/>
        <Text style={{marginBottom: 10}}>
            {item.description}
          </Text>
        <Button
            icon={<Icon name='checkmark' type='ionicon' color='#ffffff' />}
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor:"tomato"}}
            title='ACTION' />
      </Card>
        

    </View>
  )
}
export default Details;