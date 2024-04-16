import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const Theme = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.theme}>
      <View style={[styles.themeswitch, styles.themeswitchLayout]}>
        <View style={[styles.themeswitchChild, styles.themeswitchLayout]} />
        <Pressable
          style={[styles.light, styles.darkShadowBox]}
          onPress={() => navigation.navigate("Menu")}
        >
          <Text style={[styles.light1, styles.light1Clr]}>Light</Text>
        </Pressable>
        <View style={[styles.dark, styles.darkShadowBox]}>
          <Text style={[styles.dark1, styles.dark1Typo]}>Dark</Text>
        </View>
        <Text style={[styles.switchTheme, styles.light1Clr]}>
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
  darkShadowBox: {
    justifyContent: "center",
    height: 35,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1.373642921447754,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    top: 70,
    position: "absolute",
  },
  light1Clr: {
    color: Color.colorDimgray,
    textAlign: "left",
  },
  dark1Typo: {
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_sm,
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
    lineHeight: 8,
    width: 38,
    textAlign: "left",
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_sm,
  },
  light: {
    left: 12,
    borderRadius: 4,
    shadowRadius: 6.87,
    elevation: 6.87,
    alignItems: "center",
    width: 118,
    backgroundColor: Color.white,
  },
  dark1: {
    lineHeight: 10,
    color: Color.white,
    textAlign: "left",
  },
  dark: {
    left: 167,
    borderRadius: 5,
    backgroundColor: Color.blackPrimary,
    shadowRadius: 8.02,
    elevation: 8.02,
    width: 137,
    alignItems: "flex-end",
    paddingHorizontal: Padding.p_26xl,
    paddingVertical: 0,
  },
  switchTheme: {
    marginLeft: -46.7,
    top: 31,
    left: "50%",
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontFamily: FontFamily.openSansRegular,
    textAlign: "left",
    width: 118,
    position: "absolute",
    color: Color.colorDimgray,
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
