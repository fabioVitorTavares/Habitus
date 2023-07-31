import { View, Text } from "react-native";
import ScreenContainer from "../../Components/ScreenContainer/ScreenContainer";
import CardHome from "../../Components/CardHome/CardHome";
import { styles } from "./HomeStyles";
import {
  IconAddNewHabitos,
  IconConfigs,
  IconHabitos,
} from "../../Icons/Incons";

export default function Home() {
  return (
    <ScreenContainer>
      <View style={styles.homeContainer}>
        <View style={styles.cardsContainer}>
          <CardHome text="Hábitos" link="Habitos" Icon={IconHabitos} />
          <CardHome
            text="Adicionar"
            link="AddNewHabito"
            Icon={IconAddNewHabitos}
          />
          <CardHome text="Configurações" link="Configs" Icon={IconConfigs} />
        </View>
      </View>
    </ScreenContainer>
  );
}
