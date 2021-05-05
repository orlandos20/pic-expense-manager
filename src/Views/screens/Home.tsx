import React from "react";
import styled from "styled-components/native";
import { ButtonGroup } from "react-native-elements";
import { View, Text, Button } from "react-native";
import { useTheme } from "@react-navigation/native";

const HomeDiv = styled(View)`
  align-items: center;
  min-height: 100%;
`;

const StyledText = styled(Text)`
  color: ${props => props.theme.colors.text};
`;

const Home = ({ navigation }: { navigation?: any }) => {
  const [selectedIndex, setSelectedIndex] = React.useState<number>(0);
  const buttons = ["Hello", "World", "Buttons"];
  const theme = useTheme();

  const updateIndex = (index: number) => {
    setSelectedIndex(index);
    switch (index) {
      case 0: {
        navigation.navigate("Add a Expense");
      }
    }
  };

  return (
    <HomeDiv>
      <ButtonGroup
        onPress={updateIndex}
        selectedIndex={selectedIndex}
        buttons={buttons}
        containerStyle={{ height: 100 }}
      />

      <StyledText theme={theme}>This is the HomeScreen</StyledText>
      <StyledText theme={theme}>
        Acá debería ir el resumen de ingresos, gastos, Equilibrio
      </StyledText>
      <StyledText theme={theme}>
        Agregar botón de + tipo android donde abra o modal pantalla completa o
        directamente la camara.
      </StyledText>
      <StyledText theme={theme}>
        Automáticamente guardar la foto con la fecha y hora del día, y de
        inmediato mostrar las siguientes opciones:
      </StyledText>
      <StyledText theme={theme}>
        Categoría a agregar el gasto, o multiples categorías, campo para monto
        total y estudiar que otra opción.
      </StyledText>

      <Button
        title="Go to Modal"
        onPress={() => navigation.navigate("Modal")}
      />
      <Button
        title="Go to New Expense"
        onPress={() => navigation.navigate("Add a Expense")}
      />
    </HomeDiv>
  );
};

export default Home;
