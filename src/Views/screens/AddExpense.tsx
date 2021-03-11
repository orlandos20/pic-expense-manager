import React from "react";
import { View, Text, Button } from "react-native";
import styled from "styled-components/native";
import { useTheme } from "@react-navigation/native";

const StyledContainer = styled(View)`
  padding-top: 25px;
  flex: 1;
`;

const StyledText = styled(Text)`
  color: ${props => props.theme.colors.text};
`;

const AddExpense = ({ navigation }: { navigation?: any }) => {
  const theme = useTheme();
  const { colors } = theme;

  return (
    <StyledContainer>
      <StyledText theme={theme}>
        Pantalla para agregar un gasto luego de tocar el botón más
      </StyledText>
      <StyledText theme={theme}>
        Acá debería ir el componente de cámara y las otras opciones.
      </StyledText>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </StyledContainer>
  );
};

export default AddExpense;
