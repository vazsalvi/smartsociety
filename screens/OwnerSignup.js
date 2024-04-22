import * as React from "react";
import { TextInput, StyleSheet, Text, Pressable, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const OwnerSignup = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.ownerregsignup}>
      <TextInput
        style={[styles.noofmemberinput, styles.textTypo]}
        placeholder="No. of family members"
        keyboardType="number-pad"
        placeholderTextColor="#a6a6a6"
      />
      <Pressable
        style={styles.alreadyHaveAnContainer}
        onPress={() => navigation.navigate("OwnerSignin")}
      >
        <Text style={[styles.text, styles.textFlexBox]}>
          <Text style={styles.alreadyHave}>Already have an account?</Text>
          <Text style={styles.text1}>{` `}</Text>
          <Text style={styles.signIn}>Sign In</Text>
        </Text>
      </Pressable>
      <View style={[styles.ownersliderbar, styles.buttonBgLayout]}>
        <LinearGradient
          style={[styles.buttonBg, styles.buttonBgBg]}
          locations={[0, 0.56, 1]}
          colors={["#e49700", "#e4ce00", "rgba(228, 110, 0, 0.78)"]}
        />
        <Pressable
          style={styles.rental}
          onPress={() => navigation.navigate("Signup")}
        >
          <Text style={[styles.rental1, styles.rental1Typo]}>Rental</Text>
        </Pressable>
        <Text style={[styles.houseOwner, styles.signUp1Typo]}>House Owner</Text>
      </View>
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
      <Text style={[styles.signUp, styles.textFlexBox]}>SIGN UP</Text>
      <Text style={[styles.smartIndiaSociety, styles.rental1Typo]}>
        Smart India Society
      </Text>
      <LinearGradient
        style={[styles.buttonBg1, styles.nameinputPosition]}
        locations={[0, 0.56, 1]}
        colors={["#e49700", "#e4ce00", "rgba(228, 110, 0, 0.78)"]}
      >
        <Pressable
          style={[styles.pressable, styles.buttonBgBg]}
          onPress={() => navigation.navigate("OwnerSignin")}
        />
      </LinearGradient>
      <Text style={[styles.signUp1, styles.signUp1Typo]}>Sign Up</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    fontSize: FontSize.size_base,
  },
  textFlexBox: {
    flexDirection: 'row',
    textAlign: "left",
    lineHeight: 32,
  },
  buttonBgLayout: {
    height: 28,
    position: "absolute",
  },
  buttonBgBg: {
    backgroundColor: "transparent",
    borderRadius: Border.br_xs,
  },
  rental1Typo: {
    lineHeight: 24,
    textAlign: "center",
  },
  signUp1Typo: {
    color: Color.white,
    lineHeight: 24,
    textAlign: "center",
    position: "absolute",
  },
  nameinputPosition: {
    left: 13,
    width: 336,
    position: "absolute",
  },
  noofmemberinput: {
    top: 404,
    fontSize: FontSize.size_base,
    height: 56,
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
    left: 0,
  },
  alreadyHaveAnContainer: {
      left: 0,
      right: 0, // Set the right offset to fill the available space
      top: 691,
      position: "absolute",
      justifyContent: "center", // Align children horizontally
      alignItems: "center", // Align children vertically
   },
  buttonBg: {
    top: 0,
    left: 0,
    width: 175,
    height: 28,
    position: "absolute",
  },
  rental1: {
    color: Color.colorAntiquewhite,
    fontSize: FontSize.size_sm,
  },
  rental: {
    left: 231,
    top: 2,
    position: "absolute",
  },
  houseOwner: {
    left: 42,
    fontSize: FontSize.size_sm,
    top: 2,
  },
  ownersliderbar: {
      top: 550,
      flexDirection: "row", // Set the direction to row
      justifyContent: "space-between", // Distribute items along the main axis (horizontally) with equal space between them
      alignItems: "center", // Align items along the cross axis (vertically)
      backgroundColor: Color.colorPapayawhip,
      borderRadius: Border.br_xs,
      height: 28,
      left: 30,
      width: 336,
      position: "absolute",
  },
  recidencesinceinput: {
    top: 471,
    fontSize: FontSize.size_base,
    height: 56,
    overflow: "hidden",
    width: 336,
    left: 12,
    position: "absolute",
  },
  roomnoinput: {
    top: 337,
    fontSize: FontSize.size_base,
    height: 56,
    overflow: "hidden",
    width: 336,
    left: 12,
    position: "absolute",
  },
  emailinput: {
    top: 270,
    fontSize: FontSize.size_base,
    height: 56,
    overflow: "hidden",
  },
  mobilenumberinput: {
    top: 203,
    fontSize: FontSize.size_base,
    height: 56,
    overflow: "hidden",
  },
  nameinput: {
    top: 136,
    fontSize: FontSize.size_base,
    height: 56,
    overflow: "hidden",
  },
  signUp: {
    top: 79,
    left: 150,
    fontSize: FontSize.size_13xl,
    fontWeight: "800",
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
    left: "55%",
    fontSize: FontSize.size_5xl,
    textTransform: "uppercase",
    color: Color.blackPrimary,
    position: "absolute",
  },
  buttonBg1: {
      top: 612, // Adjust top position as needed
      left: 30, // Aligning from the left
      height: 48, // Adjust height as needed
      width: 360, // Adjust width as needed
      position: "absolute",
  },
    pressable: {
        height: "100%",
        backgroundColor: "transparent",
        borderRadius: Border.br_xs,
        width: "100%",
  },
  signUp1: {
    top: 626,
    left: 150,
    width: 66,
    height: 21,
    fontSize: FontSize.size_base,
  },
  ownerregsignup: {
    backgroundColor: Color.white,
    flex: 1,
    height: 708,
    overflow: "hidden",
    width: "100%",
  },
});

export default OwnerSignup;
