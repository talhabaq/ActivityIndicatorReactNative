import React, { useState } from 'react'
import { View,Button, ActivityIndicator,StyleSheet} from 'react-native'
const App = () => {
  const[show,setShow]=useState(false)
  const display=()=>{
    setShow(true)
    setTimeout(()=>{
      setShow(false)
    },3000)
  }
  return(
    <View style={styles.main}>
   { 
    show ? <ActivityIndicator size={100} color={"blue"} animating={show}/>
      :null
      }
    <Button title="show loader" onPress={display}/>
    </View>
  )
}
const styles=StyleSheet.create({
  main:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  }
})
export default App
