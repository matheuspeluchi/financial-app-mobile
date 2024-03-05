import React from "react";
import { Text, View } from "react-native";
import Styles from "./styles";

const Number: React.FC<{ number: number }> = ({ number }) => {
  return (
    <View style={Styles.root}>
      <Text style={Styles.text}>{number.toString()}</Text>
    </View>
  );
};

export default Number;
