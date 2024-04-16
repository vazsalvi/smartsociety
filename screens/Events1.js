import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, Color, FontFamily } from "../GlobalStyles";

const Events1 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.vote, styles.voteLayout]}>
      <Pressable
        style={styles.menureturnbutton}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={styles.menureturnbuttonChild}
          contentFit="cover"
          source={require("../assets/rectangle-13.png")}
        />
        <Text style={styles.home}>Home</Text>
      </Pressable>
      <Pressable style={[styles.yesbutton, styles.nobuttonShadowBox]}>
        <Text style={[styles.yes, styles.noTypo]}>YES</Text>
      </Pressable>
      <Pressable style={[styles.nobutton, styles.nobuttonShadowBox]}>
        <Text style={[styles.no, styles.noClr]}>NO</Text>
      </Pressable>
      <Text style={[styles.voteUp, styles.voteUpPosition]}>Vote Up</Text>
      <Text style={[styles.shouldTheSunday, styles.voteUpPosition]}>
        Should the Sunday meeting be scheduled on Monday 24/5/24 due to the
        holiday ?
      </Text>
      <View style={styles.header}>
        <Image
          style={styles.header}
          contentFit="cover"
          source={require("../assets/societyimg.png")}
        />
        <Text style={[styles.smartIndiaSociety, styles.voteUpPosition]}>
          Smart India Society
        </Text>
      </View>
      <Pressable
        style={styles.drawer}
        onPress={() => navigation.navigate("Menu")}
      >
        <Image
          style={[styles.icon, styles.voteLayout]}
          contentFit="cover"
          source={require("../assets/drawer3.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  voteLayout: {
    overflow: "hidden",
    width: "100%",
  },
  nobuttonShadowBox: {
    justifyContent: "center",
    alignItems: "center",
    height: 85,
    top: 287,
    borderRadius: Border.br_xs,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    position: "absolute",
  },
  noTypo: {
    fontSize: FontSize.size_13xl,
    textAlign: "left",
    lineHeight: 24,
  },
  noClr: {
    color: Color.colorDimgray,
    fontFamily: FontFamily.openSansRegular,
  },
  voteUpPosition: {
    textAlign: "center",
    left: "50%",
    position: "absolute",
  },
  menureturnbuttonChild: {
    marginLeft: -57.5,
    borderRadius: Border.br_xs,
    top: 0,
    height: 28,
    width: 115,
    left: "50%",
    position: "absolute",
  },
  home: {
    marginLeft: -15.5,
    top: 2,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    lineHeight: 24,
    color: Color.white,
    fontFamily: FontFamily.openSansRegular,
    left: "50%",
    position: "absolute",
  },
  menureturnbutton: {
    marginLeft: -57,
    top: 700,
    height: 28,
    width: 115,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    left: "50%",
    position: "absolute",
  },
  yes: {
    color: Color.white,
    fontFamily: FontFamily.openSansRegular,
    fontSize: FontSize.size_13xl,
  },
  yesbutton: {
    left: 18,
    backgroundColor: Color.colorOrange_200,
    width: 151,
  },
  no: {
    fontSize: FontSize.size_13xl,
    textAlign: "left",
    lineHeight: 24,
  },
  nobutton: {
    left: 177,
    backgroundColor: Color.white,
    width: 165,
  },
  voteUp: {
    marginLeft: -32,
    top: 83,
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    textTransform: "uppercase",
    textAlign: "center",
    lineHeight: 24,
  },
  shouldTheSunday: {
    marginTop: -217,
    marginLeft: -150,
    top: "50%",
    fontSize: FontSize.size_sm,
    lineHeight: 16,
    width: 304,
    color: Color.colorDimgray,
    fontFamily: FontFamily.openSansRegular,
  },
  header: {
    left: 0,
    width: 450,
    height: 65,
    top: 0,
    position: "absolute",
  },
  smartIndiaSociety: {
    marginLeft: -112,
    top: 22,
    fontSize: FontSize.size_xs,
    width: 156,
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    textTransform: "uppercase",
    textAlign: "center",
    lineHeight: 24,
    color: Color.white,
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
  vote: {
    backgroundColor: Color.colorPapayawhip,
    flex: 1,
    height: 708,
  },
});

export default Events1;
