import React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Splashscreen = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.splashscreen}
      onPress={() => navigation.navigate("OwnerSignin")}
    >
      <Text style={styles.smartIndiaSociety}>Smart India Society</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  smartIndiaSociety: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -125 }, { translateY: -12 }], // Adjust according to text size and container
    fontSize: 30, // Adjust the font size as needed
    lineHeight: 36,
    textTransform: "uppercase",
    fontFamily: "System", // Using system font
    color: "black", // Using black color
    textAlign: "center",
  },
  splashscreen: {
    backgroundColor: "papayawhip", // Using papayawhip color
    flex: 1,
    alignItems: "center", // Center align the content horizontally
    justifyContent: "center", // Center align the content vertically
    width: "100%",
    height: "100%", // Use 100% height to cover the entire screen
    overflow: "hidden",
  },
});

export default Splashscreen;
