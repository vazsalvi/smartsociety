import * as React from "react";
import { Text, StyleSheet, Pressable, View, TextInput } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const AdminVerification = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.adminverification}>
      <Text style={[styles.didntReceiveAContainer, styles.text1Typo]}>
        <Text style={styles.didntReceiveA}>Didn’t receive a code?</Text>
        <Text style={styles.text}>{` `}</Text>
        <Text style={styles.sendAgain}>Send again</Text>
      </Text>
      <Pressable
        style={styles.notAnAdminContainer}
        onPress={() => navigation.navigate("OwnerSignin")}
      >
        <Text style={styles.text1Typo}>
          <Text style={styles.didntReceiveA}>Not an Admin?</Text>
          <Text style={styles.text}>{` `}</Text>
          <Text style={styles.sendAgain}>Sign in here</Text>
        </Text>
      </Pressable>
      <View style={styles.titleguideWrapper}>
        <View style={styles.titleguide}>
          <Text style={styles.youNeedTo}>
            You need to enter 4-digit code we sent to your registered mobile
            number
          </Text>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector3.png")}
          />
          <Text style={styles.verificationCode}>Verification Code</Text>
        </View>
      </View>
      <LinearGradient
        style={[styles.primaryButton, styles.numberinputPosition]}
        locations={[0, 0.56, 1]}
        colors={["#e49700", "#e4ce00", "rgba(228, 110, 0, 0.78)"]}
      >
        <Pressable
          style={styles.pressable}
          onPress={() => navigation.navigate("Adminhome")}
        >
          <Text style={styles.signInAs}>Sign In as Admin</Text>
        </Pressable>
      </LinearGradient>
      <TextInput
        style={[styles.numberinput, styles.numberinputPosition]}
        placeholder="Enter Otp Pin"
        keyboardType="number-pad"
        placeholderTextColor="#a6a6a6"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text1Typo: {
    textAlign: "center",
    lineHeight: 32,
    fontFamily: FontFamily.openSansRegular,
    fontSize: FontSize.size_base,
  },
  numberinputPosition: {
    left: 9,
    width: 336,
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
    top: 600,
    left: 56,
    position: "absolute",
  },
  notAnAdminContainer: {
    left: 76,
    top: 661,
    position: "absolute",
  },
  youNeedTo: {
    top: 40,
    left: 1,
    fontSize: FontSize.size_mini,
    width: 336,
    textAlign: "left",
    lineHeight: 24,
    color: Color.greyPrimary,
    fontFamily: FontFamily.openSansRegular,
    position: "absolute",
  },
  vectorIcon: {
    height: "23.86%",
    width: "6.53%",
    top: "4.55%",
    right: "28.78%",
    bottom: "71.59%",
    left: "64.69%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  verificationCode: {
    fontSize: FontSize.size_5xl,
    display: "flex",
    alignItems: "center",
    width: 264,
    textAlign: "left",
    left: 0,
    top: 0,
    color: Color.blackPrimary,
    fontFamily: FontFamily.openSansRegular,
    lineHeight: 32,
    position: "absolute",
  },
  titleguide: {
    left: 0,
    top: 0,
    height: 88,
    width: 337,
    position: "absolute",
  },
  titleguideWrapper: {
    top: 188,
    left: 15,
    height: 88,
    width: 337,
    position: "absolute",
  },
  signInAs: {
    color: Color.white,
    width: 156,
    height: 20,
    lineHeight: 24,
    textAlign: "center",
    fontFamily: FontFamily.openSansRegular,
    fontSize: FontSize.size_base,
  },
  pressable: {
    borderRadius: Border.br_xs,
    height: "100%",
    alignItems: "flex-end",
    justifyContent: "center",
    paddingHorizontal: Padding.p_57xl,
    paddingVertical: 0,
    backgroundColor: "transparent",
    width: "100%",
  },
  primaryButton: {
    top: 427,
    height: 48,
  },
  numberinput: {
    top: 324,
    height: 56,
    fontFamily: FontFamily.openSansRegular,
    fontSize: FontSize.size_base,
    left: 9,
    overflow: "hidden",
  },
  adminverification: {
    backgroundColor: Color.white,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default AdminVerification;
