import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Theme = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.theme}>
      <View style={[styles.themeswitch, styles.themeswitchLayout]}>
        <View style={[styles.themeswitchChild, styles.themeswitchLayout]} />
        <Pressable
          style={[styles.light, styles.darkPosition]}
          onPress={() => navigation.navigate("Menu")}
        >
          <Text style={[styles.light1, styles.dark1FlexBox]}>Light</Text>
        </Pressable>
        <View style={[styles.dark, styles.darkPosition]}>
          <Text style={[styles.dark1, styles.dark1FlexBox]}>Dark</Text>
        </View>
        <Text style={[styles.switchTheme, styles.dark1FlexBox]}>
          Switch theme?
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  themeswitchLayout: {
    height: 126,
    width: 310,
    position: "absolute",
  },
  darkPosition: {
    height: 35,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1.373642921447754,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    top: "50%",
    marginTop: 7,
    left: "50%",
    position: "absolute",
  },
  dark1FlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  themeswitchChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorPapayawhip,
    borderStyle: "solid",
    borderColor: Color.colorGray_200,
    borderWidth: 1,
  },
  light1: {
    left: 40,
    lineHeight: 8,
    width: 38,
    color: Color.colorDimgray,
    textAlign: "left",
    fontWeight: "800",
    fontSize: FontSize.size_sm,
    top: 13,
  },
  light: {
    marginLeft: -143,
    shadowRadius: 6.87,
    elevation: 6.87,
    borderRadius: 4,
    width: 118,
    backgroundColor: Color.white,
  },
  dark1: {
    left: 51,
    lineHeight: 10,
    color: Color.white,
    fontWeight: "800",
    fontSize: FontSize.size_sm,
    top: 13,
  },
  dark: {
    marginLeft: 12,
    shadowRadius: 8.02,
    elevation: 8.02,
    borderRadius: 5,
    backgroundColor: Color.blackPrimary,
    width: 137,
  },
  switchTheme: {
    marginLeft: -46.7,
    top: 31,
    fontSize: FontSize.size_base,
    lineHeight: 24,
    color: Color.colorDimgray,
    textAlign: "left",
    width: 118,
    left: "50%",
  },
  themeswitch: {
    top: 279,
    left: 23,
  },
  theme: {
    flex: 1,
    width: "100%",
    height: 708,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default Theme;
