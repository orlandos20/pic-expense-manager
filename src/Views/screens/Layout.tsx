import React from "react";
import styled from "styled-components";
import { Animated, Easing } from "react-native";
import { View } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import ActionButton from "../components/ActionButton";

const LayoutStyled = styled(View)`
  padding-left: 24px;
  padding-right: 24px;
  min-width: 100%;
`;

const Layout = ({ children }: { children: any }) => {
  const { navigation } = children.props;

  // fadeAnim will be used as the value for opacity. Initial Value: 0
  const fadeAnim = React.useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    // @ts-ignore
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: true
    }).start();
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 5 seconds
    // @ts-ignore
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 300,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true
    }).start();
  };

  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      fadeIn();
      return () => {
        fadeOut();
        // Do something when the screen is unfocused
        // Useful for cleanup functions
      };
    }, [navigation])
  );

  return (
    <Animated.ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        alignItems: "center"
      }}
      style={{
        opacity: fadeAnim,
        transform: [
          {
            scale: fadeAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [0.9, 1]
            })
          }
        ]
      }}
    >
      <LayoutStyled>
        {children}
        <ActionButton navigation={navigation} />
      </LayoutStyled>
    </Animated.ScrollView>
  );
};

export default Layout;
