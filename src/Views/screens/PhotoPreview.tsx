import React from "react";
import { View, Image, Button, ImageBackground } from "react-native";
import styled from "styled-components/native";

const StyledContainer = styled(View)`
  background: transparent;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  min-height: 100%;
  min-width: 100%;
`;

const StyledCamControls = styled(View)`
  align-items: center;
  justify-content: flex-end;
  height: 200px;
  width: 80%;
  border: 1px solid red;
`;

const StyledActionButton = styled(Button)`
  width: 20px;
`;

const StyledImgView = styled(View)`
  background: transparent;
  flex: 1;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

const StyledImg = styled(ImageBackground)`
  width: 100%;
  height: 100%;
`;

const PhotoPreview = ({
  route,
  navigation
}: {
  route?: any;
  navigation?: any;
}) => {
  const { img } = route.params;

  return (
    <StyledContainer>
      <StyledImgView>
        <StyledImg source={{ uri: img.photo }} />
      </StyledImgView>

      <StyledCamControls>
        <View style={{ flex: 1 }}>
          <StyledActionButton
            onPress={() => {
              navigation.navigate("Add a Expense", { reTake: true });
            }}
            title="re-take"
            color="#000"
          />

          <StyledActionButton
            onPress={() => {
              console.log("seleccionó save ");
            }}
            title="save"
            color="#000"
          />
        </View>
      </StyledCamControls>
    </StyledContainer>
  );
};

export default PhotoPreview;
