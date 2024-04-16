import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const Splashscreen = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.splashscreen}
      onPress={() => navigation.navigate("OwnerSignin")}
    >
      <Text style={[styles.smartIndiaSociety, styles.smartText]}>
        Smart India Society
      </Text>
      <Text style={[styles.smartIndiaSociety1, styles.smartText]}>
        Smart India Society
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  smartText: {
    textAlign: "center",
    color: Color.colorBlack,
    textTransform: "uppercase",
    lineHeight: 24,
    left: "50%",
    position: "absolute",
  },
  smartIndiaSociety: {
    marginLeft: -123,
    top: 333,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.openSansRegular,
  },
  smartIndiaSociety1: {
    marginLeft: -64,
    top: 271,
    fontSize: FontSize.size_xs,
    fontWeight: "600",
    fontFamily: FontFamily.openSansSemiBold,
  },
  splashscreen: {
    backgroundColor: Color.colorPapayawhip,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Splashscreen;
