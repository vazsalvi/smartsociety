import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const Bills = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.bills, styles.iconLayout]}>
      <Pressable
        style={styles.menureturn}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={styles.menureturnChild}
          contentFit="cover"
          source={require("../assets/rectangle-13.png")}
        />
        <Text style={styles.home}>Home</Text>
      </Pressable>
      <View style={[styles.extra, styles.extraLayout]}>
        <Text style={[styles.new, styles.textPosition]}>New</Text>
        <Text style={[styles.text, styles.textPosition]}>₹ 0</Text>
      </View>
      <View style={[styles.extra1, styles.extraLayout]}>
        <Text style={[styles.new, styles.textPosition]}>New</Text>
        <Text style={[styles.text, styles.textPosition]}>₹ 0</Text>
      </View>
      <View style={[styles.gym, styles.extraLayout]}>
        <Text style={[styles.new, styles.textPosition]}>Gym</Text>
        <Text style={[styles.text, styles.textPosition]}>₹ 2250</Text>
      </View>
      <View style={[styles.clubs, styles.extraLayout]}>
        <Text style={[styles.new, styles.textPosition]}>Club house</Text>
        <Text style={[styles.text, styles.textPosition]}>₹ 2250</Text>
      </View>
      <View style={[styles.electricity, styles.extraLayout]}>
        <Text style={[styles.new, styles.textPosition]}>Electricity</Text>
        <Text style={[styles.text, styles.textPosition]}>₹ 2250</Text>
      </View>
      <View style={[styles.water, styles.extraLayout]}>
        <View style={[styles.water1, styles.waterPosition]}>
          <View style={[styles.waterChild, styles.waterPosition]} />
          <Text style={[styles.new, styles.textPosition]}>Water</Text>
          <Text style={[styles.text5, styles.textPosition]}>₹ 2250</Text>
        </View>
      </View>
      <View style={[styles.maintainence, styles.extraLayout]}>
        <Text style={[styles.maintainence1, styles.textPosition]}>
          Maintainence
        </Text>
        <Text style={[styles.text6, styles.textPosition]}>₹ 2250</Text>
      </View>
      <View style={[styles.header, styles.waterPosition]}>
        <Image
          style={[styles.header, styles.waterPosition]}
          contentFit="cover"
          source={require("../assets/societyimg.png")}
        />
        <Text style={[styles.smartIndiaSociety, styles.bills1Typo]}>
          Smart India Society
        </Text>
      </View>
      <Text style={[styles.bills1, styles.bills1Typo]}>Bills</Text>
      <Pressable
        style={styles.drawer}
        onPress={() => navigation.navigate("Menu")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/drawer3.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  extraLayout: {
    height: 56,
    width: 336,
  },
  textPosition: {
    color: Color.colorGray_100,
    top: 16,
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
    lineHeight: 24,
    position: "absolute",
  },
  waterPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  bills1Typo: {
    textAlign: "center",
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    textTransform: "uppercase",
    lineHeight: 24,
    left: "50%",
    position: "absolute",
  },
  menureturnChild: {
    marginLeft: -57.5,
    borderRadius: Border.br_xs,
    top: 0,
    height: 28,
    width: 115,
    left: "50%",
    position: "absolute",
  },
  home: {
    marginLeft: -22.5,
    top: 2,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
    lineHeight: 24,
    color: Color.white,
    left: "50%",
    position: "absolute",
  },
  menureturn: {
    marginLeft: -57,
    top: 700,
    height: 28,
    width: 115,
    left: "50%",
    position: "absolute",
  },
  new: {
    fontSize: FontSize.size_sm,
    color: Color.colorGray_100,
    top: 16,
    left: 24,
  },
  text: {
    left: 241,
    fontSize: FontSize.size_sm,
    color: Color.colorGray_100,
    top: 16,
  },
  extra: {
    top: 590,
    backgroundColor: Color.greyLighter,
    width: 336,
    borderRadius: Border.br_xs,
    left: 12,
    position: "absolute",
  },
  extra1: {
    top: 518,
    backgroundColor: Color.greyLighter,
    width: 336,
    borderRadius: Border.br_xs,
    left: 12,
    position: "absolute",
  },
  gym: {
    top: 446,
    backgroundColor: Color.greyLighter,
    width: 336,
    borderRadius: Border.br_xs,
    left: 12,
    position: "absolute",
  },
  clubs: {
    top: 374,
    backgroundColor: Color.greyLighter,
    width: 336,
    borderRadius: Border.br_xs,
    left: 12,
    position: "absolute",
  },
  electricity: {
    top: 302,
    backgroundColor: Color.greyLighter,
    width: 336,
    borderRadius: Border.br_xs,
    left: 12,
    position: "absolute",
  },
  waterChild: {
    height: 56,
    width: 336,
    backgroundColor: Color.greyLighter,
    borderRadius: Border.br_xs,
  },
  text5: {
    left: 240,
    fontSize: FontSize.size_sm,
    color: Color.colorGray_100,
    top: 16,
  },
  water1: {
    height: 56,
    width: 336,
  },
  water: {
    top: 230,
    left: 12,
    position: "absolute",
  },
  maintainence1: {
    fontSize: FontSize.size_base,
    left: 24,
    top: 16,
    color: Color.colorGray_100,
  },
  text6: {
    left: 235,
    fontSize: FontSize.size_base,
    top: 16,
    color: Color.colorGray_100,
  },
  maintainence: {
    top: 158,
    backgroundColor: Color.colorWhitesmoke_100,
    left: 12,
    position: "absolute",
    borderRadius: Border.br_xs,
  },
  header: {
    width: 450,
    height: 65,
  },
  smartIndiaSociety: {
    marginLeft: -103.3,
    top: 22,
    fontSize: FontSize.size_xs,
    width: 144,
    color: Color.white,
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    textTransform: "uppercase",
  },
  bills1: {
    marginLeft: -22,
    top: 92,
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  drawer: {
    left: "9.18%",
    top: "3.5%",
    right: "82.77%",
    bottom: "95%",
    width: "8.05%",
    height: "1.5%",
    position: "absolute",
  },
  bills: {
    backgroundColor: Color.colorPapayawhip,
    flex: 1,
    height: 708,
  },
});

export default Bills;
