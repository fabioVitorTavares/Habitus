import { View, Text } from "react-native";
import ScreenContainer from "../../Components/ScreenContainer/ScreenContainer";
import CardHome from "../../Components/CardHome/CardHome";
import { styles } from "./HomeStyles";

export default function Home() {
  return (
    <ScreenContainer>
      <View style={styles.homeContainer}>
        <View
          style={styles.cardsContainer}
          onTouchStart={() => console.log("Log line 11: ")}
        >
          <CardHome text="Hábitos" link="Habitos" />
          <CardHome text="Adicionar" link="AddNewHabito" />
        </View>
      </View>
    </ScreenContainer>
  );
}
