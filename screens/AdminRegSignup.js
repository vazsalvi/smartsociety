import * as React from "react";
import { TextInput, StyleSheet, Text, Pressable, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const AdminRegSignup = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.adminregsignup}>
      <TextInput
        style={[styles.noofmemberinput, styles.textTypo]}
        placeholder="No. of family members"
        keyboardType="number-pad"
        placeholderTextColor="#a6a6a6"
      />
      <Pressable
        style={styles.alreadyHaveAnContainer}
        onPress={() => navigation.navigate("AdminSignin")}
      >
        <Text style={[styles.text, styles.textFlexBox]}>
          <Text style={styles.alreadyHave}>Already have an account?</Text>
          <Text style={styles.text1}>{` `}</Text>
          <Text style={styles.signIn}>Sign In</Text>
        </Text>
      </Pressable>
      <TextInput
        style={[styles.recidencesinceinput, styles.textTypo]}
        placeholder="Residence since"
        placeholderTextColor="#a6a6a6"
      />
      <TextInput
        style={[styles.roomnoinput, styles.textTypo]}
        placeholder="Enter your room no."
        keyboardType="number-pad"
        placeholderTextColor="#a6a6a6"
      />
      <TextInput
        style={[styles.emailinput, styles.buttonBgPosition]}
        placeholder="Enter your Email ID"
        placeholderTextColor="#a6a6a6"
      />
      <TextInput
        style={[styles.mobilenumberinput, styles.buttonBgPosition]}
        placeholder="Enter your mobile number"
        keyboardType="number-pad"
        placeholderTextColor="#a6a6a6"
      />
      <TextInput
        style={[styles.nameinput, styles.buttonBgPosition]}
        placeholder="Enter your Name"
        placeholderTextColor="#a6a6a6"
      />
      <Text style={[styles.signUp, styles.textFlexBox]}>SIGN UP</Text>
      <Text style={[styles.smartIndiaSociety, styles.signUp1Typo]}>
        Smart India Society
      </Text>
      <LinearGradient
        style={[styles.buttonBg, styles.buttonBgPosition]}
        locations={[0, 0.56, 1]}
        colors={["#e49700", "#e4ce00", "rgba(228, 110, 0, 0.78)"]}
      >
        <Pressable
          style={styles.pressable}
          onPress={() => navigation.navigate("AdminSignin")}
        />
      </LinearGradient>
      <Text style={[styles.signUp1, styles.signUp1Typo]}>Sign Up</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    fontFamily: FontFamily.openSansRegular,
    fontSize: FontSize.size_base,
  },
  textFlexBox: {
    textAlign: "center",
    lineHeight: 32,
  },
  buttonBgPosition: {
    left: 13,
    width: 336,
    position: "absolute",
  },
  signUp1Typo: {
    lineHeight: 24,
    textAlign: "center",
    fontFamily: FontFamily.openSansRegular,
    position: "absolute",
  },
  noofmemberinput: {
    top: 404,
    fontSize: FontSize.size_base,
    height: 56,
    fontFamily: FontFamily.openSansRegular,
    overflow: "hidden",
    width: 336,
    left: 12,
    position: "absolute",
  },
  alreadyHave: {
    color: Color.colorSlategray,
  },
  text1: {
    color: Color.colorDodgerblue,
  },
  signIn: {
    textDecoration: "underline",
    color: Color.colorOrange_100,
  },
  text: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.openSansRegular,
  },
  alreadyHaveAnContainer: {
    left: 56,
    top: 691,
    position: "absolute",
  },
  recidencesinceinput: {
    top: 471,
    fontSize: FontSize.size_base,
    height: 56,
    fontFamily: FontFamily.openSansRegular,
    overflow: "hidden",
    width: 336,
    left: 12,
    position: "absolute",
  },
  roomnoinput: {
    top: 337,
    fontSize: FontSize.size_base,
    height: 56,
    fontFamily: FontFamily.openSansRegular,
    overflow: "hidden",
    width: 336,
    left: 12,
    position: "absolute",
  },
  emailinput: {
    top: 270,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.openSansRegular,
    height: 56,
    overflow: "hidden",
  },
  mobilenumberinput: {
    top: 203,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.openSansRegular,
    height: 56,
    overflow: "hidden",
  },
  nameinput: {
    top: 136,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.openSansRegular,
    height: 56,
    overflow: "hidden",
  },
  signUp: {
    top: 79,
    left: 95,
    fontSize: FontSize.size_13xl,
    fontWeight: "800",
    fontFamily: FontFamily.openSansExtraBold,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 171,
    height: 42,
    color: Color.colorOrange_100,
    position: "absolute",
  },
  smartIndiaSociety: {
    marginLeft: -126,
    top: 52,
    left: "50%",
    fontSize: FontSize.size_5xl,
    textTransform: "uppercase",
    color: Color.blackPrimary,
  },
  pressable: {
    borderRadius: Border.br_xs,
    height: "100%",
    backgroundColor: "transparent",
    width: "100%",
  },
  buttonBg: {
    top: 612,
    height: 48,
  },
  signUp1: {
    top: 626,
    left: 148,
    color: Color.white,
    width: 66,
    height: 21,
    fontSize: FontSize.size_base,
  },
  adminregsignup: {
    backgroundColor: Color.white,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default AdminRegSignup;
