import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Border, FontSize, Color } from "../GlobalStyles";

const Developers = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.developers, styles.iconLayout]}>
      <Pressable
        style={[styles.menureturnbutton, styles.menureturnbuttonLayout]}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={[styles.menureturnbuttonChild, styles.menureturnbuttonLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-13.png")}
        />
        <Text style={styles.menu}>Menu</Text>
      </Pressable>
      <Text style={styles.thankYou}>Thank you</Text>
      <View style={[styles.dev3, styles.devLayout]}>
        <Image
          style={[styles.dev3Child, styles.headerPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-53.png")}
        />
        <Text style={[styles.salviVaz, styles.salviVazPosition]}>
          Salvi Vaz
        </Text>
        <Text style={[styles.brysongmailcom, styles.salviVazPosition]}>
          Bryson@gmail.com
        </Text>
      </View>
      <View style={[styles.dev2, styles.devLayout]}>
        <Image
          style={[styles.dev3Child, styles.headerPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-53.png")}
        />
        <Text
          style={[styles.salviVaz, styles.salviVazPosition]}
        >{`Bryson D’souza `}</Text>
        <Text style={[styles.brysongmailcom, styles.salviVazPosition]}>
          salvivaz@gmail.com
        </Text>
      </View>
      <View style={[styles.dev1, styles.devLayout]}>
        <Image
          style={[styles.dev3Child, styles.headerPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-53.png")}
        />
        <Text style={[styles.salviVaz, styles.salviVazPosition]}>
          Peter Bose
        </Text>
        <Text style={[styles.brysongmailcom, styles.salviVazPosition]}>
          peter@gmail.com
        </Text>
      </View>
      <View style={[styles.header, styles.headerPosition]}>
        <Image
          style={[styles.header, styles.headerPosition]}
          contentFit="cover"
          source={require("../assets/societyimg.png")}
        />
        <Text style={[styles.smartIndiaSociety, styles.developers1Typo]}>
          Smart India Society
        </Text>
      </View>
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
      <Text style={[styles.developers1, styles.developers1Typo]}>
        Developers
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  menureturnbuttonLayout: {
    height: 28,
    width: 115,
    left: "50%",
    position: "absolute",
  },
  devLayout: {
    width: 206,
    left: 33,
    height: 48,
    position: "absolute",
  },
  headerPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  salviVazPosition: {
    left: 64,
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
    lineHeight: 24,
    position: "absolute",
  },
  developers1Typo: {
    textTransform: "uppercase",
    textAlign: "center",
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    lineHeight: 24,
    left: "50%",
    position: "absolute",
  },
  menureturnbuttonChild: {
    marginLeft: -57.5,
    borderRadius: Border.br_xs,
    top: 0,
  },
  menu: {
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
  menureturnbutton: {
    marginLeft: -57,
    top: 700,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
  },
  thankYou: {
    marginLeft: -54,
    top: 461,
    fontSize: FontSize.size_xl,
    lineHeight: 32,
    color: Color.colorOrange_100,
    textAlign: "center",
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    left: "50%",
    position: "absolute",
  },
  dev3Child: {
    width: 48,
    height: 48,
  },
  salviVaz: {
    color: Color.blackPrimary,
    fontSize: FontSize.size_base,
    top: 0,
  },
  brysongmailcom: {
    top: 24,
    fontSize: FontSize.size_sm,
    color: Color.greyPrimary,
  },
  dev3: {
    top: 199,
    height: 48,
  },
  dev2: {
    top: 272,
    height: 48,
  },
  dev1: {
    top: 345,
    height: 48,
  },
  header: {
    width: 450,
    height: 65,
  },
  smartIndiaSociety: {
    marginLeft: -122.1,
    top: 22,
    fontSize: FontSize.size_xs,
    width: 169,
    color: Color.white,
    textTransform: "uppercase",
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
  developers1: {
    marginLeft: -51,
    top: 101,
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
  },
  developers: {
    backgroundColor: Color.colorPapayawhip,
    flex: 1,
    height: 708,
  },
});

export default Developers;
