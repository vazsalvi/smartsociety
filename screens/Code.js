import React from "react";
import { Text, StyleSheet, Pressable, TextInput, View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Code = ({ navigation }) => {
  return (
    <View style={styles.vcode}>
      <Text style={[styles.didntReceiveAContainer, styles.signInTypo]}>
        <Text style={styles.didntReceiveA}>Didn’t receive a code?</Text>
        <Text style={styles.text}>{` `}</Text>
        <Text style={styles.sendAgain}>Send again</Text>
      </Text>
      <LinearGradient
        style={styles.primaryButton}
        locations={[0, 0.56, 1]}
        colors={["#e49700", "#e4ce00", "rgba(228, 110, 0, 0.78)"]}
      >
        <Pressable
          style={styles.pressable}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={[styles.signIn, styles.signInTypo]}>Sign In</Text>
        </Pressable>
      </LinearGradient>
      <TextInput
        style={styles.numberinput}
        placeholder="Enter Otp Pin "
        keyboardType="number-pad"
        placeholderTextColor="#a6a6a6"
      />
      <View style={styles.titleguide}>
        <Text style={[styles.youNeedTo, styles.youNeedToTypo]}>
          You need to enter 4-digit code we sent to your registered mobile
          number
        </Text>
        <View style={[styles.heading, styles.headingPosition]}>
          <Image
            style={[styles.vectorIcon, styles.headingPosition]}
            contentFit="cover"
            source={require("../assets/vector1.png")}
          />
          <Text style={[styles.verificationCode, styles.youNeedToTypo]}>
            Verification Code
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  signInTypo: {
    textAlign: "center",
    fontFamily: FontFamily.openSansRegular,
    fontSize: FontSize.size_base,
  },
  youNeedToTypo: {
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
    position: "absolute",
  },
  headingPosition: {
    top: "0%",
    position: "absolute",
  },
  didntReceiveA: {
    color: Color.greyPrimary,
  },
  text: {
    color: Color.blackPrimary,
  },
  sendAgain: {
    color: Color.colorOrange_300,
  },
  didntReceiveAContainer: {
    top: 559,
    left: 56,
    lineHeight: 32,
    position: "absolute",
  },
  signIn: {
    color: Color.white,
    width: 148,
    height: 20,
    lineHeight: 24,
  },
  pressable: {
    borderRadius: Border.br_xs,
    height: "100%",
    justifyContent: "center",
    backgroundColor: "transparent",
    alignItems: "center",
    width: "100%",
  },
  primaryButton: {
    left: 9,
    top: 421,
    height: 48,
    width: 336,
    position: "absolute",
  },
  numberinput: {
    marginLeft: -171,
    top: 291,
    left: "50%",
    height: 56,
    width: 336,
    fontFamily: FontFamily.openSansRegular,
    fontSize: FontSize.size_base,
    position: "absolute",
    overflow: "hidden",
  },
  youNeedTo: {
    top: 53,
    left: 1,
    fontSize: FontSize.size_mini,
    lineHeight: 24,
    width: 336,
    color: Color.greyPrimary,
  },
  vectorIcon: {
    height: "40.97%",
    width: "8.41%",
    right: "8.03%",
    bottom: "59.03%",
    left: "83.56%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  verificationCode: {
    top: 13,
    left: 0,
    fontSize: FontSize.size_5xl,
    display: "flex",
    width: 264,
    alignItems: "center",
    color: Color.blackPrimary,
    lineHeight: 32,
  },
  heading: {
    height: "44.77%",
    width: "78.34%",
    right: "21.66%",
    bottom: "55.23%",
    left: "0%",
  },
  titleguide: {
    top: 134,
    left: 15,
    width: 337,
    height: 101,
    position: "absolute",
  },
  vcode: {
    backgroundColor: Color.white,
    flex: 1,
    height: 708,
    overflow: "hidden",
    width: "100%",
  },
});

export default Code;
