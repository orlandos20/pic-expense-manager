import React from "react";
import { View, Text, Button, Image } from "react-native";
import { useTheme } from "@react-navigation/native";
import styled from "styled-components/native";

const ModalDiv = styled(View)`
  align-items: center;
  min-height: 100%;
  min-width: 100%;
`;

const StyledImgView = styled(View)`
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

const StyledImg = styled(Image)`
  width: 100%;
  height: 100%;
`;

const CreateItemModal = ({
  route,
  navigation
}: {
  route?: any;
  navigation?: any;
}) => {
  const theme = useTheme();
  const { colors } = theme;

  const { img } = route.params;

  return (
    <ModalDiv style={{ flex: 1, justifyContent: "center" }}>
      <StyledImgView>
        <StyledImg source={{ uri: img.photo.uri }} />
      </StyledImgView>
      <Text style={{ fontSize: 30, color: colors.text }}>This is a modal!</Text>
      <Button
        onPress={() => {
          navigation.navigate("Add a Expense", { reTake: true });
        }}
        title="Dismiss"
      />
    </ModalDiv>
  );
};

export default CreateItemModal;
