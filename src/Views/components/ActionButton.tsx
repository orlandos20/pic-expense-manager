import React from "react";
import { FloatingAction } from "react-native-floating-action";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import { DrawerStackRoutes } from "../Routes/Routes";

const ActionButton = ({ navigation }: { navigation: any }) => {
  const theme = useTheme();
  const { colors } = theme;

  const mappedData = DrawerStackRoutes.map(item => item.name);

  const actions = mappedData.map((name, index) => {
    return {
      text: name,
      textColor: colors.text,
      textBackground: "rgba(0,0,0,0.01)",
      icon: (
        <Ionicons
          style={{ marginLeft: 10 }}
          name="md-menu"
          size={36}
          color={colors.text}
        />
      ),
      name: name,
      position: index
    };
  });

  return (
    <FloatingAction
      actions={actions}
      color={colors.primary}
      overlayColor="rgba(0, 0, 0, 0.01)"
      onPressItem={name => {
        navigation.navigate(name);
      }}
    />
  );
};

export default ActionButton;
