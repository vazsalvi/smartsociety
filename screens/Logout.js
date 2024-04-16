import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Logout = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.logout}>
      <View style={[styles.signout, styles.signoutLayout]}>
        <View style={[styles.signoutChild, styles.signoutLayout]} />
        <Pressable
          style={[styles.nobutton, styles.nobuttonShadowBox]}
          onPress={() => navigation.navigate("Menu")}
        >
          <Text style={[styles.no, styles.noClr]}>NO</Text>
        </Pressable>
        <Pressable
          style={[styles.yesbutton, styles.nobuttonShadowBox]}
          onPress={() => navigation.navigate("Signin")}
        >
          <Text style={[styles.yes, styles.noTypo]}>YES</Text>
        </Pressable>
        <Text style={[styles.doYouWant, styles.noClr]}>
          Do you want to log out?
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  signoutLayout: {
    height: 126,
    width: 336,
    position: "absolute",
  },
  nobuttonShadowBox: {
    justifyContent: "center",
    alignItems: "center",
    height: 35,
    width: 68,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1.373642921447754,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    top: 69,
    position: "absolute",
  },
  noClr: {
    color: Color.colorDimgray,
    textAlign: "left",
  },
  noTypo: {
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_sm,
  },
  signoutChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorPapayawhip,
    borderStyle: "solid",
    borderColor: Color.colorDimgray,
    borderWidth: 1,
  },
  no: {
    lineHeight: 8,
    width: 23,
    height: 11,
    textAlign: "left",
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_sm,
  },
  nobutton: {
    left: 28,
    borderRadius: 4,
    shadowRadius: 6.87,
    elevation: 6.87,
    backgroundColor: Color.white,
  },
  yes: {
    lineHeight: 10,
    color: Color.white,
    width: 28,
    height: 10,
    textAlign: "left",
  },
  yesbutton: {
    left: 239,
    borderRadius: 5,
    backgroundColor: Color.colorOrange_200,
    shadowRadius: 8.02,
    elevation: 8.02,
  },
  doYouWant: {
    top: 31,
    left: 64,
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontFamily: FontFamily.openSansRegular,
    width: 186,
    textAlign: "left",
    position: "absolute",
    color: Color.colorDimgray,
  },
  signout: {
    top: 277,
    left: 17,
  },
  logout: {
    flex: 1,
    width: "100%",
    height: 708,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default Logout;
