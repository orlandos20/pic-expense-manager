import React from "react";
import { View, Text, Button } from "react-native";
import styled from "styled-components/native";
import { useTheme } from "@react-navigation/native";

import Cam from "../components/Camera/Cam";
// import TestOtherCam from "../components/TestOtherCam";

const StyledContainer = styled(View)`
  padding-top: 25px;
  flex: 1;
`;

const StyledText = styled(Text)`
  color: ${props => props.theme.colors.text};
`;

const AddExpense = ({
  route,
  navigation
}: {
  route?: any;
  navigation?: any;
}) => {
  console.log("route  --> ", route);

  return (
    <Cam route={route} navigation={navigation} reTake={route?.params?.reTake} />
  );
};

export default AddExpense;
