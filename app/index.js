import { styles } from "./styles";
import { Text, View} from "react-native";

export default function Index() {
  const x = 21;
  function checkX() {
    if (typeof x === "number") {
      console.log("x is a number");
    } else {
      console.log("x is not a number");
    }
  }
  checkX();

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.text1}> ALARM APP</Text>
        <Text style={styles.text1}>lets check x</Text>
        <Text style={styles.text1}>x = {x}</Text>
      </View>
      <View style={styles.container2}>
        <Text style={styles.text2}>lets check x</Text>
        <Text style={styles.text2}>x = {x}</Text>
      </View>
    </View>
  );
}
