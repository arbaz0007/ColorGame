import { useState } from "react"
import { Pressable  } from "react-native"
import {Text,SafeAreaView,StyleSheet} from "react-native"
const App = () =>{
  const [bgColor,setBgColor] = useState(`rgba(127,0,255)`)
  const onPressHandler =() => {
    const randomColor =`rgb(${Math.floor(Math.random()*256)} , ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`
    setBgColor(randomColor)
  }
  
  const onPressHandler2 =() => {
    
    setBgColor(`rgba(0,0,0)`)
  }
return<SafeAreaView style={[styles.container,{backgroundColor:bgColor}]} >
 <Pressable onPress={onPressHandler}> <Text  style= {styles.text}> Press Me</Text></Pressable>
 <Pressable onPress={onPressHandler2}> <Text  style= {styles.text2}> Press Me</Text></Pressable>
</SafeAreaView>


}
export default App
const styles =StyleSheet.create({
container:{
  flex:1, 
  justifyContent:"center",
  alignItems : "center",
  backgroundColor:rgba(127,0,255)
},
text:{
  backgroundColor :"#ffffff",
  padding:20,
  paddingHorizontal:10,
  paddingVerticle:20,
  fontSize:20,
  borderRadius:20,
  backgroundColor:`rgba(127,0,255)`,
  color:"#fff"
},
text2:{
  backgroundColor :"#ffffff",
  padding:20,
  marginVertical:20,
  paddingHorizontal:10,
  paddingVerticle:20,
  fontSize:20,
  borderRadius:20,
  backgroundColor:'rgba(127,0,255)',
  color:"#fff"
} 
})