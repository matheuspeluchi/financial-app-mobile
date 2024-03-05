import { View } from "react-native";
import BetNumbers from "../betNumbers";
import Styles from "./styles";
import { useEffect } from "react";

const Bets: React.FC<{ bets: Array<number[]> }> = ({ bets }) => {
  useEffect(() => {
    console.log(bets);
  }, [bets]);
  return (
    <View style={Styles.root}>
      {bets.map((bet, idx) => (
        <BetNumbers key={idx} bet={bet} />
      ))}
    </View>
  );
};

export default Bets;
