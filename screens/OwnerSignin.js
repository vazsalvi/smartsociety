import * as React from "react";
import { Text, StyleSheet, Pressable, TextInput, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const OwnerSignin = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.ownersignin}>
      <Pressable
        style={[styles.signInAsContainer, styles.signContainerPosition]}
        onPress={() => navigation.navigate("Signin")}
      >
        <Text style={[styles.text, styles.textFlexBox]}>
          <Text style={styles.signInAs}>Sign in as Rental?</Text>
          <Text style={styles.text1}>{` `}</Text>
          <Text style={styles.clickHere}>Click here</Text>
        </Text>
      </Pressable>
      <Pressable
        style={[styles.signInAsContainer1, styles.signContainerPosition]}
        onPress={() => navigation.navigate("AdminSignin")}
      >
        <Text style={[styles.text, styles.textFlexBox]}>
          <Text style={styles.signInAs}>Sign in as admin?</Text>
          <Text style={styles.text1}>{` `}</Text>
          <Text style={styles.clickHere}>Click here</Text>
        </Text>
      </Pressable>
      <Pressable
        style={styles.dontHaveAnContainer}
        onPress={() => navigation.navigate("OwnerSignup")}
      >
        <Text style={[styles.text, styles.textFlexBox]}>
          <Text style={styles.signInAs}>Don’t have an account?</Text>
          <Text style={styles.text1}>{` `}</Text>
          <Text style={styles.clickHere}>Sign up</Text>
        </Text>
      </Pressable>
      <LinearGradient
        style={styles.primaryButton}
        locations={[0, 0.56, 1]}
        colors={["#e49700", "#e4ce00", "rgba(228, 110, 0, 0.78)"]}
      >
        <Pressable
          style={styles.pressable}
          onPress={() => navigation.navigate("Code")}
        >
          <Text style={[styles.signInAs2, styles.signInAs2Typo]}>
            Sign In as Owner
          </Text>
        </Pressable>
      </LinearGradient>
      <TextInput
        style={[styles.phonenumberinput, styles.usernameinputLayout]}
        placeholder="Enter your mobile number"
        keyboardType="number-pad"
        multiline={false}
        secureTextEntry={false}
        placeholderTextColor="#a6a6a6"
      />
      <TextInput
        style={[styles.usernameinput, styles.usernameinputLayout]}
        placeholder="Enter your Name"
        placeholderTextColor="#a6a6a6"
      />
      <Text style={[styles.signIn, styles.textFlexBox]}>SIGN IN</Text>
      <Text style={[styles.smartIndiaSociety, styles.signInAs2Typo]}>
        Smart India Society
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  signContainerPosition: {
    left: 76,
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "center",
    lineHeight: 32,
  },
  signInAs2Typo: {
    lineHeight: 24,
    textAlign: "center",
    fontFamily: FontFamily.openSansRegular,
  },
  usernameinputLayout: {
    height: 56,
    width: 336,
    left: 12,
    fontFamily: FontFamily.openSansRegular,
    fontSize: FontSize.size_base,
    position: "absolute",
    overflow: "hidden",
  },
  signInAs: {
    color: Color.colorSlategray,
  },
  text1: {
    color: Color.colorDodgerblue,
  },
  clickHere: {
    textDecoration: "underline",
    color: Color.colorOrange_100,
  },
  text: {
    fontFamily: FontFamily.openSansRegular,
    textAlign: "center",
    lineHeight: 32,
    fontSize: FontSize.size_base,
  },
  signInAsContainer: {
    top: 540,
  },
  signInAsContainer1: {
    top: 490,
  },
  dontHaveAnContainer: {
    left: 61,
    top: 615,
    position: "absolute",
  },
  signInAs2: {
    color: Color.white,
    width: 151,
    height: 20,
    fontSize: FontSize.size_base,
    lineHeight: 24,
  },
  pressable: {
    borderRadius: Border.br_xs,
    height: "100%",
    paddingHorizontal: 0,
    paddingVertical: 14,
    backgroundColor: "transparent",
    alignItems: "center",
    width: "100%",
  },
  primaryButton: {
    top: 365,
    height: 48,
    width: 336,
    left: 12,
    position: "absolute",
  },
  phonenumberinput: {
    top: 270,
  },
  usernameinput: {
    top: 200,
  },
  signIn: {
    top: 100,
    left: 94,
    fontSize: FontSize.size_13xl,
    fontWeight: "800",
    fontFamily: FontFamily.openSansExtraBold,
    display: "flex",
    justifyContent: "center",
    width: 171,
    height: 42,
    alignItems: "center",
    color: Color.colorOrange_100,
    textAlign: "center",
    lineHeight: 32,
    position: "absolute",
  },
  smartIndiaSociety: {
    marginLeft: -127,
    top: 50,
    left: "50%",
    fontSize: FontSize.size_5xl,
    textTransform: "uppercase",
    color: Color.blackPrimary,
    position: "absolute",
  },
  ownersignin: {
    backgroundColor: Color.white,
    flex: 1,
    height: 708,
    overflow: "hidden",
    width: "100%",
  },
});

export default OwnerSignin;
