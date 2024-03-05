import { View } from "react-native";
import { Text } from "react-native-paper";
import Styles from "./styles";

const CurrentBet: React.FC<{ bet: number[] }> = ({ bet }) => {
  return (
    <View style={Styles.root}>
      <Text variant="titleMedium">Aposta:</Text>
      <Text variant="headlineSmall" style={Styles.bet}>
        {bet.join(" - ")}
      </Text>
    </View>
  );
};

export default CurrentBet;
