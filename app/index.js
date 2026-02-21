import { styles } from "./styles";
import { Text, View, Button } from "react-native";
import React, {useState, useEffect, use} from "react";

export default function Index() {
  const [x, setX] = useState(21);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);


  function checkX() {
    if (typeof x === "number") {
      console.log("x is a number");
    } else {
      console.log("x is not a number");
    }
  }

  function increaseX(){
    setX(prev => prev + 1);
  }

  function handlePress() {
    console.log("Button pressed");
    checkX();
  }

  const hh = String(currentTime.getHours()).padStart(2, "0");
  const mm = String(currentTime.getMinutes()).padStart(2, "0");
  const ss = String(currentTime.getSeconds()).padStart(2, "0");

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.text1}> ALARM APP</Text>
        <Text style={styles.text1}>{hh}:{mm}:{ss}</Text>
      </View>
      <View style={styles.container2}>
        <Button title="Check X" onPress= {() =>{handlePress(); increaseX()}}/>        
        <Text style={styles.text2}>lets check x</Text>
        <Text style={styles.text2}>x = {x}</Text>
      </View>
    </View>
  );
}
