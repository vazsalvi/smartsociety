import * as React from "react";
import { Text, StyleSheet, Pressable, View, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Signup = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.rentalregsignup}>
      <Pressable
        style={styles.alreadyHaveAnContainer}
        onPress={() => navigation.navigate("Signin")}
      >
        <Text style={styles.text}>
          <Text style={styles.alreadyHave}>Already have an account?</Text>
          <Text style={styles.text1}>{` `}</Text>
          <Text style={styles.signIn}>Sign In</Text>
        </Text>
      </Pressable>
      <LinearGradient
        style={[styles.buttonBg, styles.buttonBgLayout]}
        locations={[0, 0.56, 1]}
        colors={["#e49700", "#e4ce00", "rgba(228, 110, 0, 0.78)"]}
      >
        <Pressable
          style={styles.pressable}
          onPress={() => navigation.navigate("Signin")}
        />
      </LinearGradient>
      <Text style={[styles.signUp, styles.signFlexBox]}>Sign Up</Text>
      <View style={[styles.rentalsliderbar, styles.buttonBgIconLayout]}>
        <Image
          style={[styles.buttonBgIcon, styles.buttonBgIconLayout]}
          contentFit="cover"
          source={require("../assets/buttonbg.png")}
        />
        <Pressable
          style={styles.houseOwner}
          onPress={() => navigation.navigate("OwnerSignup")}
        >
          <Text style={[styles.houseOwner1, styles.rental1Typo]}>
            House Owner
          </Text>
        </Pressable>
        <Pressable
          style={styles.rental}
          onPress={() => navigation.navigate("Signup")}
        >
          <Text style={[styles.rental1, styles.rental1Typo]}>Rental</Text>
        </Pressable>
      </View>
      <TextInput
        style={[styles.recidencesinceinput, styles.roomnoinputLayout]}
        placeholder="Residence since"
        placeholderTextColor="#a6a6a6"
      />
      <TextInput
        style={[styles.noofmemberinput, styles.roomnoinputLayout]}
        placeholder="No. of family members"
        keyboardType="number-pad"
        placeholderTextColor="#a6a6a6"
      />
      <TextInput
        style={[styles.roomnoinput, styles.roomnoinputLayout]}
        placeholder="Enter your room no."
        keyboardType="number-pad"
        placeholderTextColor="#a6a6a6"
      />
      <TextInput
        style={[styles.emailinput, styles.nameinputPosition]}
        placeholder="Enter your Email ID"
        placeholderTextColor="#a6a6a6"
      />
      <TextInput
        style={[styles.mobilenumberinput, styles.nameinputPosition]}
        placeholder="Enter your mobile number"
        keyboardType="number-pad"
        placeholderTextColor="#a6a6a6"
      />
      <TextInput
        style={[styles.nameinput, styles.nameinputPosition]}
        placeholder="Enter your Name"
        placeholderTextColor="#a6a6a6"
      />
      <Text style={[styles.signUp1, styles.signFlexBox]}>SIGN UP</Text>
      <Text style={[styles.smartIndiaSociety, styles.signFlexBox]}>
        Smart India Society
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonBgLayout: {
    width: 336,
    left: 10,
  },
  signFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  buttonBgIconLayout: {
    height: 28,
    position: "absolute",
  },
  rental1Typo: {
    fontSize: FontSize.size_sm,
    textAlign: "center",
    lineHeight: 24,
  },
  roomnoinputLayout: {
    height: 56,
    left: 13,
    width: 336,
    fontSize: FontSize.size_base,
    position: "absolute",
    overflow: "hidden",
  },
  nameinputPosition: {
    left: 14,
    height: 56,
    width: 336,
    fontSize: FontSize.size_base,
    position: "absolute",
    overflow: "hidden",
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
    marginLeft: -127,
    textAlign: "left",
    lineHeight: 32,
    fontSize: FontSize.size_base,
  },
  alreadyHaveAnContainer: {
    top: 690,
    left: "55%",
    position: "absolute",
  },
  pressable: {
    height: "100%",
    backgroundColor: "transparent",
    borderRadius: Border.br_xs,
    width: "100%",
  },
  buttonBg: {
    top: 611,
    height: 48,
    position: "absolute",
  },
  signUp: {
    top: 625,
    left: 130,
    width: 66,
    height: 21,
    color: Color.white,
    lineHeight: 24,
    textAlign: "center",
    fontSize: FontSize.size_base,
  },
  buttonBgIcon: {
    top: 0,
    left: 160,
    width: 175,
  },
  houseOwner1: {
    color: Color.colorAntiquewhite,
  },
  houseOwner: {
    left: 41,
    top: 3,
    position: "absolute",
  },
  rental1: {
    color: Color.white,
  },
  rental: {
    left: 226,
    top: 2,
    position: "absolute",
  },
  rentalsliderbar: {
    top: 552,
    backgroundColor: Color.colorPapayawhip,
    borderRadius: Border.br_xs,
    width: 336,
    left: 30,
  },
  recidencesinceinput: {
    top: 471,
  },
  noofmemberinput: {
    top: 404,
  },
  roomnoinput: {
    top: 337,
  },
  emailinput: {
    top: 270,
  },
  mobilenumberinput: {
    top: 203,
  },
  nameinput: {
    top: 136,
  },
  signUp1: {
    marginLeft: -89,
    top: 78,
    fontSize: FontSize.size_13xl,
    fontWeight: "800",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 171,
    height: 42,
    color: Color.colorOrange_100,
    textAlign: "center",
    lineHeight: 32,
    left: "50%",
  },
  smartIndiaSociety: {
    marginLeft: -128,
    top: 51,
    fontSize: FontSize.size_5xl,
    textTransform: "uppercase",
    color: Color.blackPrimary,
    lineHeight: 24,
    textAlign: "center",
    left: "55%",
  },
  rentalregsignup: {
    backgroundColor: Color.white,
    flex: 1,
    height: 708,
    overflow: "hidden",
    width: "100%",
  },
});

export default Signup;
