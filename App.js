import { useState } from "react"
import { Button } from "react-native"
import {View,Text,SafeAreaView,StyleSheet} from "react-native"
const App =() =>{
  const [bgColor,setBgColor] = useState(`rgb(127,0,255)`)
  const onPressHandler =() => {
    const randomColor =`rgb(${Math.floor(Math.random()*256)} , ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`
    setBgColor(randomColor)
  }
return<SafeAreaView style={{
  <Text  style= {styles.text}> Press Me</Text>
</SafeAreaView>
}}> 

}
export default App
const style =StyleSheet.create
container:{
  flex:1, 
  justifyContent:"center",
  alignItems : "center",
  backgroundColor:bgColor
},
text:{
  backgroundColor :"#ffffff",
  padding:20,
  paddingHorizontal:10,
  paddingVerticle:20,
  fontSize:20,
  borderRadius:20,
  backgroundColor:'rgb(127,0,255)',
  color:"#fff"
}