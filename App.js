import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  //const [Quiry, setQuiry] = useState(0)
  const [commodity, setCommodity] = useState('') // 這邊你原本寫 0，但 TextInput 預設只能放文字不能放數字，所以我先幫你改成空字串，避免出現 warning
  const [commodity1, setCommodity1] = useState('')
  const [botton1, setBotton1] = useState("查無資料")
  const changeQuiry = (text) => {
    setCommodity(text)
  }



  //////////////////////////////
  // 這個區塊內是我新增的程式碼 //
  //////////////////////////////

  // useRef 的功能: 當你把 useRef 的回傳值 (假設把回傳值命名為buttonRef) 丟給一個元件作為它的 ref 屬性後
  // 呼叫 buttonRef.current 就能夠呼叫那個元件。 注意不能只呼叫 buttonRef 喔，這是它規定的用法沒有為什麼

  const input2Ref = useRef() // 所以這裡我令一個 useRef 的回傳值，名為 input2Ref，代表的是第二個輸入格的 ref

  // 在第二個 TextInput 元件中，你會看到我添加了一個 ref 屬性，並把 input2Ref 傳入
  // 於是該元件便有了名字: input2Ref.current

  // 定義當第一個 TextInput 接收到 enter 的訊號時所要執行的函式
  const onInput1Submit = () => {
    // 我們想要使用 TextInput 元件自帶的 focus() 函式
    // 所以我們先呼叫 input2Ref.current，再加上.focus()
    // 就可以 focus 在第二個輸入格上
    input2Ref.current.focus()
  }

  //////////////////////////////
  // 這個區塊內是我新增的程式碼 //
  //////////////////////////////




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
        onSubmitEditing={onInput1Submit} // 當 submit(按下Enter)的時候，執行 onInput1Submit 這個函式
      />
      <TextInput
        // refs={(input) => { this.secondTextInput = input; }} // 你原本打的 refs 是錯字
        ref={input2Ref} // 在這傳入 input2Ref
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
