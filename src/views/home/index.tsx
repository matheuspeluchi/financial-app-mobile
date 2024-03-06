import React, { useEffect, useState } from "react";
import { Image, ScrollView, View } from "react-native";
import { Button, Divider } from "react-native-paper";
import Bets from "../../components/bets";
import CurrentBet from "../../components/currentBet";
import { generateBet } from "../../services/megasena";
import Styles from "./styles";
import CustomButton from "../../components/button";

const Home: React.FC = () => {
  const [bet, setBet] = useState<number[]>([]);
  const [bets, setBets] = useState<Array<number[]>>([]);
  const addBet = () => {
    setBets([...bets, bet]);
  };
  const clearBets = (): void => {
    setBet([]);
    setBets([]);
  };

  return (
    <>
      <View style={Styles.header}>
        <Image
          style={Styles.img}
          source={require("../../../assets/mega-sena.png")}
        />
      </View>
      <Divider />

      <View style={Styles.content}>
        <CurrentBet bet={bet} />
        <Divider />
        <ScrollView persistentScrollbar>
          <Bets bets={bets} />
        </ScrollView>
      </View>
      <Divider />
      <View style={Styles.footer}>
        <CustomButton
          label="Gerar Aposta"
          onClick={() => setBet(generateBet())}
        />
        <CustomButton onClick={addBet} label="Adicionar Aposta" />
        <CustomButton onClick={clearBets} label="Limpar" />
      </View>
    </>
  );
};

export default Home;
