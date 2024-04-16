import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const Menu2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.admintheme}>
      <View style={[styles.theme, styles.themeLayout]}>
        <View style={[styles.themeChild, styles.themeLayout]} />
        <Pressable
          style={[styles.light, styles.darkShadowBox]}
          onPress={() => navigation.navigate("AdminMenu")}
        >
          <Text style={styles.light1}>Light</Text>
        </Pressable>
        <View style={[styles.dark, styles.darkShadowBox]}>
          <Text style={[styles.dark1, styles.dark1Position]}>Dark</Text>
        </View>
        <Text style={[styles.switchTheme, styles.dark1Position]}>
          Switch theme?
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  themeLayout: {
    height: 126,
    width: 316,
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
    top: 78,
    position: "absolute",
  },
  dark1Position: {
    left: "50%",
    textAlign: "left",
    position: "absolute",
  },
  themeChild: {
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
    textAlign: "left",
    color: Color.colorDimgray,
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_sm,
  },
  light: {
    left: 27,
    borderRadius: 4,
    shadowRadius: 6.87,
    elevation: 6.87,
    width: 100,
    alignItems: "center",
    backgroundColor: Color.white,
  },
  dark1: {
    marginLeft: -16.5,
    top: 13,
    lineHeight: 10,
    color: Color.white,
    zIndex: 0,
    left: "50%",
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_sm,
  },
  dark: {
    left: 208,
    borderRadius: 5,
    backgroundColor: Color.blackPrimary,
    shadowRadius: 8.02,
    elevation: 8.02,
    width: 87,
    alignItems: "flex-end",
    paddingLeft: Padding.p_10xl,
    paddingRight: Padding.p_26xl,
  },
  switchTheme: {
    marginLeft: -35.5,
    top: 39,
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontFamily: FontFamily.openSansRegular,
    width: 135,
    color: Color.colorDimgray,
    left: "50%",
  },
  theme: {
    top: 317,
    left: 25,
  },
  admintheme: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default Menu2;
