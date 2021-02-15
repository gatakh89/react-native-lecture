import React from 'react';
import { View } from 'react-native';
import { LISTDATA } from '../shared/list'

import { ListItem, Avatar } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'

// 함수의 리턴 값이 JSX.Element면
// React 컴포넌트가 된다.

// JSX를 쓸려면 import React from 'react';
// 네비게이터로 화면을 이동할때컴포넌트 속성으로 전달됨
const List = ({ navigation }) => {

  const list = LISTDATA;
  console.log(list);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{flexGrow:1, alignItems:"center", justifyContent:"center"}}>
        {
          list.map((item, i)=> (
            <ListItem onPress={()=>{navigation.navigate("Details", {id: item.id})}} 
            containerStyle={{width:"80%"}} key={i}>
              <Avatar source={{uri: item.image}} /> 
              <ListItem.Content>
                <ListItem.Title>{item.title}</ListItem.Title>
                <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>

          ))

        }
      </ScrollView>
    </View>
  )
}
export default List;