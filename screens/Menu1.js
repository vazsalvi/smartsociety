import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const Menu1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.adminlogout}>
      <View style={[styles.logoff, styles.logoffLayout]}>
        <View style={[styles.logoffChild, styles.logoffLayout]} />
        <Pressable
          style={[styles.noo, styles.nooShadowBox]}
          onPress={() => navigation.navigate("AdminMenu")}
        >
          <Text style={[styles.no, styles.noPosition]}>NO</Text>
        </Pressable>
        <Pressable
          style={[styles.yes, styles.nooShadowBox]}
          onPress={() => navigation.navigate("AdminSignin")}
        >
          <Text style={[styles.yes1, styles.noPosition]}>YES</Text>
        </Pressable>
        <Text style={styles.doYouWant}>Do you want to log out?</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logoffLayout: {
    height: 126,
    width: 320,
    left: "50%",
    position: "absolute",
  },
  nooShadowBox: {
    justifyContent: "center",
    alignItems: "center",
    height: 35,
    width: 65,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1.373642921447754,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    top: 64,
    position: "absolute",
  },
  noPosition: {
    zIndex: 0,
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
    top: "50%",
    marginTop: -5.5,
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  logoffChild: {
    marginLeft: -160,
    top: 0,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorPapayawhip,
    borderStyle: "solid",
    borderColor: Color.colorGray_200,
    borderWidth: 1,
  },
  no: {
    marginLeft: -10.5,
    lineHeight: 8,
    width: 26,
    height: 11,
    color: Color.colorDimgray,
    zIndex: 0,
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
    top: "50%",
    marginTop: -5.5,
  },
  noo: {
    left: 37,
    borderRadius: 4,
    shadowRadius: 6.87,
    elevation: 6.87,
    backgroundColor: Color.white,
  },
  yes1: {
    marginLeft: -14,
    lineHeight: 10,
    color: Color.white,
    width: 28,
    height: 10,
    zIndex: 0,
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
    top: "50%",
    marginTop: -5.5,
  },
  yes: {
    left: 224,
    borderRadius: 5,
    backgroundColor: Color.colorOrange_200,
    shadowRadius: 8.02,
    elevation: 8.02,
  },
  doYouWant: {
    top: 26,
    left: 78,
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontFamily: FontFamily.openSansRegular,
    textAlign: "left",
    color: Color.colorDimgray,
    position: "absolute",
  },
  logoff: {
    marginLeft: -161,
    top: 325,
  },
  adminlogout: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default Menu1;
