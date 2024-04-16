import React, { memo } from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const PositionText = memo(() => {
  return <Text style={styles.position}>Position</Text>;
});

const styles = StyleSheet.create({
  position: {
    fontSize: FontSize.size_sm,
    lineHeight: 24,
    fontFamily: FontFamily.montserratRegular,
    color: Color.colorGray_100,
    textAlign: "left",
    width: 154,
    height: 21,
  },
});

export default PositionText;
