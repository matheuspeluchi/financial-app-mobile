import React from "react";
import { View } from "react-native";
import Number from "../number";
import styles from "./styles";

interface BetNumberProps {
  bet: number[];
}

const BetNumbers: React.FC<BetNumberProps> = ({ bet }) => {
  return (
    <View style={styles.root}>
      {bet.map((number, idx) => (
        <Number key={idx} number={number} />
      ))}
    </View>
  );
};

export default BetNumbers;
