import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Border, FontSize, Color } from "../GlobalStyles";

const Member = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.admindevelopers, styles.iconLayout]}>
      <Pressable
        style={[styles.back, styles.backLayout]}
        onPress={() => navigation.navigate("AdminMenu")}
      >
        <Image
          style={[styles.backChild, styles.backLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-13.png")}
        />
        <Text style={styles.back1}>Back</Text>
      </Pressable>
      <Text style={styles.thankYou}>Thank you</Text>
      <Text style={[styles.developers, styles.developersTypo]}>Developers</Text>
      <View style={[styles.header, styles.headerPosition]}>
        <Image
          style={[styles.header, styles.headerPosition]}
          contentFit="cover"
          source={require("../assets/societyimg31.png")}
        />
        <Text style={[styles.smartIndiaSociety, styles.developersTypo]}>
          Smart India Society
        </Text>
      </View>
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("AdminMenu")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
      </Pressable>
      <View style={[styles.dev3, styles.devLayout]}>
        <Image
          style={[styles.dev3Child, styles.devLayout]}
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
          style={[styles.dev3Child, styles.devLayout]}
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
          style={[styles.dev3Child, styles.devLayout]}
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
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  backLayout: {
    height: 28,
    width: 115,
    left: "50%",
    position: "absolute",
  },
  developersTypo: {
    textTransform: "uppercase",
    textAlign: "center",
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    lineHeight: 24,
    left: "50%",
    position: "absolute",
  },
  headerPosition: {
    left: 0,
    top: 0,
  },
  devLayout: {
    height: 48,
    position: "absolute",
  },
  salviVazPosition: {
    left: 64,
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
    lineHeight: 24,
    position: "absolute",
  },
  backChild: {
    marginLeft: -57.5,
    borderRadius: Border.br_xs,
    top: 0,
  },
  back1: {
    marginLeft: -16.5,
    top: 2,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
    lineHeight: 24,
    color: Color.white,
    left: "50%",
    position: "absolute",
  },
  back: {
    marginLeft: -50,
    top: 646,
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
    top: 440,
    fontSize: FontSize.size_xl,
    lineHeight: 32,
    color: Color.colorOrange_100,
    textAlign: "center",
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    left: "50%",
    position: "absolute",
  },
  developers: {
    marginLeft: -51,
    top: 80,
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
  },
  header: {
    width: 436,
    height: 65,
    position: "absolute",
  },
  smartIndiaSociety: {
    marginLeft: -82.4,
    top: 22,
    fontSize: FontSize.size_xs,
    width: 164,
    color: Color.white,
    textTransform: "uppercase",
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  vector: {
    left: "9.17%",
    top: "3.5%",
    right: "82.78%",
    bottom: "95%",
    width: "8.06%",
    height: "1.5%",
    position: "absolute",
  },
  dev3Child: {
    width: 48,
    left: 0,
    top: 0,
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
    top: 180,
    width: 206,
    left: 53,
    height: 48,
  },
  dev2: {
    top: 253,
    width: 206,
    left: 53,
    height: 48,
  },
  dev1: {
    top: 326,
    width: 206,
    left: 53,
    height: 48,
  },
  admindevelopers: {
    backgroundColor: Color.colorPapayawhip,
    flex: 1,
    height: 800,
  },
});

export default Member;
