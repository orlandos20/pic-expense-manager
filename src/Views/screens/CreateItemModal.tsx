import React from "react";
import { View, Text, Button } from "react-native";
import { useTheme } from "@react-navigation/native";
import styled from "styled-components/native";

const ModalDiv = styled(View)`
  align-items: center;
  min-height: 100%;
  min-width: 100%;
`;

const CreateItemModal = ({ navigation }: { navigation?: any }) => {
  const theme = useTheme();
  const { colors } = theme;

  return (
    <ModalDiv style={{ flex: 1, justifyContent: "center" }}>
      <Text style={{ fontSize: 30, color: colors.text }}>This is a modal!</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </ModalDiv>
  );
};

export default CreateItemModal;
