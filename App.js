import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  //const [Quiry, setQuiry] = useState(0)
  const [commodity, setCommodity] = useState(0)
  const [commodity1, setCommodity1] = useState(0)
  const [botton1, setBotton1] = useState("查無資料")
  const changeQuiry = (text) => {
    setCommodity(text)
  }

  // const Quiry = () => {
  //   if (commodity === '123') {
  //     return <Text style={styles.title2}>我是123</Text>
  //   } else {
  //     return <Text style={styles.title2}>啥也不是</Text>
  //   }
  // }

  const Quiry2 = () => {
    if (commodity === '123') {
      setBotton1('泡麵')
    } else {
      setBotton1('查無資料')
    }
  }

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title1}>JIAHE-DIY ERP</Text> */}
      <Text style={styles.title1}>商品管理選單</Text>
      <TextInput
        style={styles.text1}
        onChangeText={(text) => changeQuiry(text)}
        value={commodity}
        maxLength={4}
        placeholder='輸入條碼'
        // keyboardType={'numeric'}
        // secureTextEntry={true}
        // editable={true}
        autoFocus={true}
        onBlur={() => Quiry2()}
        onSubmitEditing={(event) => { this.refs.passcode2.focus() }}
      />
      <TextInput
        refs={(input) => { this.secondTextInput = input; }}
        style={styles.text1}
        value={commodity1}
        maxLength={4}
        placeholder='輸入條碼'
      // keyboardType={'numeric'}
      // secureTextEntry={true}
      // editable={true}

      />
      <Text style={styles.title2}>商品名稱：{botton1}</Text>

      <TouchableOpacity style={styles.button1} onPress={() => Quiry2()}>
        <Text style={styles.title3}>商品查詢</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button1} onPress={() => Quiry2()}>
        <Text style={styles.title3}>商品查詢</Text>
      </TouchableOpacity>
      {/* <Button
        title='商品查詢'
        onPress={() => changeQuiry()}
      /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecd6af',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title1: {
    fontSize: 40,
    color: '#5BB4B1',
    marginBottom: 20,
  },
  title2: {
    fontSize: 30,
    marginBottom: 20,
    paddingLeft: 1,
  },
  title3: {
    fontSize: 30,
    color: '#fff'
  },
  //按鈕樣式：紅色
  button1: {
    margin: 2,
    padding: 10,
    width: 350,
    height: 100,
    backgroundColor: '#9A0A0A',
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  //輸入框樣式
  text1: {
    height: 50,
    width: 350,
    borderRadius: 0,
    borderColor: '#ffff',
    borderWidth: 5,
    backgroundColor: '#ffff',
    color: 'black',
    fontSize: 28,
    textAlign: 'center', marginBottom: 10,
  },
});
