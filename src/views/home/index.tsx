import React, { useEffect, useState } from "react";
import { Image, View } from "react-native";
import { Button, Divider } from "react-native-paper";
import Bets from "../../components/bets";
import CurrentBet from "../../components/currentBet";
import { generateBet } from "../../services/megasena";
import Styles from "./styles";

const Home: React.FC = () => {
  const [bet, setBet] = useState<number[]>([]);
  const [bets, setBets] = useState<Array<number[]>>([]);
  const addBet = () => {
    setBets([...bets, bet]);
    console.log(bets);
  };

  return (
    <>
      <View style={Styles.header}>
        <Image source={require("../../image/mega-sena.png")} />
      </View>
      <View style={Styles.content}>
        <CurrentBet bet={bet} />
        <Divider />
        <Bets bets={bets} />
      </View>
      <View style={Styles.footer}>
        <Button
          mode="contained"
          buttonColor="#00A547"
          onPress={() => setBet(generateBet())}
        >
          Gerar Aposta
        </Button>
        <Button mode="contained" buttonColor="#00A547" onPress={addBet}>
          Adicionar Aposta
        </Button>
      </View>
    </>
  );
};

export default Home;
