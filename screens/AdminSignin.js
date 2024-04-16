import * as React from "react";
import { Text, StyleSheet, Pressable, TextInput, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const AdminSignin = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.adminsignin}>
      <Pressable
        style={[styles.notAnAdminContainer, styles.adminContainerPosition]}
        onPress={() => navigation.navigate("OwnerSignin")}
      >
        <Text style={[styles.text, styles.textTypo]}>
          <Text style={styles.notAnAdmin}>Not an Admin?</Text>
          <Text style={styles.text1}>{` `}</Text>
          <Text style={styles.signInHere}>Sign in here</Text>
        </Text>
      </Pressable>
      <Pressable
        style={[styles.beAnAdminContainer, styles.adminContainerPosition]}
        onPress={() => navigation.navigate("AdminRegSignup")}
      >
        <Text style={[styles.text2, styles.textTypo]}>
          <Text style={styles.notAnAdmin}>Be an Admin?</Text>
          <Text style={styles.text1}>{` `}</Text>
          <Text style={styles.signInHere}>Sign in here</Text>
        </Text>
      </Pressable>
      <LinearGradient
        style={styles.primaryButton}
        locations={[0, 0.56, 1]}
        colors={["#e49700", "#e4ce00", "rgba(228, 110, 0, 0.78)"]}
      >
        <Pressable
          style={styles.pressable}
          onPress={() => navigation.navigate("AdminVerification")}
        >
          <Text style={[styles.signInAs, styles.signInAsLayout]}>
            Sign In as Admin
          </Text>
        </Pressable>
      </LinearGradient>
      <TextInput
        style={[styles.nameinput, styles.nameinputLayout]}
        placeholder="Enter your Name"
        placeholderTextColor="#a6a6a6"
      />
      <TextInput
        style={[styles.numberinput, styles.nameinputLayout]}
        placeholder="Enter your mobile number"
        keyboardType="number-pad"
        placeholderTextColor="#a6a6a6"
      />
      <Text style={[styles.smartIndiaSociety, styles.signInAs1Typo]}>
        Smart India Society
      </Text>
      <Text style={[styles.signInAs1, styles.signInAs1Typo]}>
        SIGN IN AS ADMIN
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  adminContainerPosition: {
    left: "50%",
    position: "absolute",
  },
  textTypo: {
    textAlign: "center",
    fontSize: FontSize.size_base,
  },
  signInAsLayout: {
    lineHeight: 24,
    fontFamily: FontFamily.openSansRegular,
  },
  nameinputLayout: {
    height: 56,
    width: 336,
    left: 12,
    fontFamily: FontFamily.openSansRegular,
    fontSize: FontSize.size_base,
    position: "absolute",
    overflow: "hidden",
  },
  signInAs1Typo: {
    fontSize: FontSize.size_5xl,
    textAlign: "center",
    left: "50%",
    position: "absolute",
  },
  notAnAdmin: {
    color: Color.greyPrimary,
  },
  text1: {
    color: Color.blackPrimary,
  },
  signInHere: {
    color: Color.colorOrange_300,
  },
  text: {
    marginLeft: -104,
    fontFamily: FontFamily.openSansRegular,
    textAlign: "center",
    lineHeight: 32,
    fontSize: FontSize.size_base,
  },
  notAnAdminContainer: {
    top: 580,
  },
  text2: {
    marginLeft: -97,
    fontFamily: FontFamily.openSansRegular,
    textAlign: "center",
    lineHeight: 32,
    fontSize: FontSize.size_base,
  },
  beAnAdminContainer: {
    top: 638,
  },
  signInAs: {
    color: Color.white,
    width: 156,
    height: 20,
    textAlign: "center",
    fontSize: FontSize.size_base,
    lineHeight: 24,
  },
  pressable: {
    borderRadius: Border.br_xs,
    height: "100%",
    alignItems: "flex-end",
    paddingHorizontal: Padding.p_57xl,
    paddingVertical: 0,
    backgroundColor: "transparent",
    justifyContent: "center",
    width: "100%",
  },
  primaryButton: {
    top: 465,
    height: 48,
    width: 336,
    left: 12,
    position: "absolute",
  },
  nameinput: {
    top: 217,
  },
  numberinput: {
    top: 284,
  },
  smartIndiaSociety: {
    marginLeft: -127,
    top: 43,
    textTransform: "uppercase",
    lineHeight: 24,
    fontFamily: FontFamily.openSansRegular,
    color: Color.blackPrimary,
  },
  signInAs1: {
    marginLeft: -134,
    top: 108,
    fontWeight: "800",
    fontFamily: FontFamily.openSansExtraBold,
    color: Color.colorOrange_100,
    display: "flex",
    alignItems: "center",
    width: 264,
    height: 42,
    justifyContent: "center",
    lineHeight: 32,
    fontSize: FontSize.size_5xl,
  },
  adminsignin: {
    backgroundColor: Color.white,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default AdminSignin;
