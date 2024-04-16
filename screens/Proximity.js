import * as React from "react";
import { Pressable, Text, StyleSheet, View, TextInput } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Border, FontSize, Color, Padding } from "../GlobalStyles";

const Proximity = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.proximity, styles.iconLayout]}>
      <Pressable
        style={styles.save}
        onPress={() => navigation.navigate("SocietyInfo")}
      >
        <Text style={[styles.back, styles.backTypo]}>Back</Text>
      </Pressable>
      <View style={[styles.body, styles.bodyShadowBox]} />
      <TextInput
        style={[styles.subject, styles.bodyShadowBox]}
        placeholder="Subject"
        placeholderTextColor="#fff"
      />
      <Text style={[styles.societyInfo, styles.societyTypo]}>
        {" "}
        Society info
      </Text>
      <View style={styles.header}>
        <Image
          style={styles.header}
          contentFit="cover"
          source={require("../assets/societyimg.png")}
        />
        <Text style={[styles.smartIndiaSociety, styles.proximityInThisTypo]}>
          Smart India Society
        </Text>
      </View>
      <Pressable
        style={styles.drawer}
        onPress={() => navigation.navigate("AdminMenu")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/drawer1.png")}
        />
      </Pressable>
      <Text style={[styles.proximityInThis, styles.proximityInThisTypo]}>
        Proximity in this society fosters connectivity and convenience, with
        essential services, recreational facilities, and cultural venues located
        within close reach of residential areas. Residents enjoy easy access to
        shops, restaurants, and entertainment options, facilitating a vibrant
        and dynamic lifestyle. Additionally, proximity to public transportation
        hubs and green spaces promotes sustainability and enhances mobility.
        This close-knit proximity encourages interaction and collaboration among
        residents, fostering a strong sense of community and belonging within
        neighborhoods.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  backTypo: {
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
  },
  bodyShadowBox: {
    width: 305,
    left: 33,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  societyTypo: {
    textAlign: "center",
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    textTransform: "uppercase",
    left: "50%",
  },
  proximityInThisTypo: {
    fontSize: FontSize.size_xs,
    lineHeight: 24,
    position: "absolute",
  },
  back: {
    marginLeft: -18.5,
    top: 2,
    fontSize: FontSize.size_mini,
    color: Color.colorGray_100,
    lineHeight: 24,
    position: "absolute",
    left: "50%",
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
  },
  save: {
    top: 700,
    width: 115,
    height: 28,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorOrange_200,
    left: "50%",
    marginLeft: -57.5,
    position: "absolute",
  },
  body: {
    top: 255,
    backgroundColor: Color.white,
    height: 420,
  },
  subject: {
    top: 206,
    height: 30,
    justifyContent: "center",
    paddingHorizontal: Padding.p_43xl,
    paddingVertical: 0,
    fontSize: FontSize.size_sm,
    backgroundColor: Color.colorOrange_200,
    width: 305,
    left: 33,
  },
  societyInfo: {
    top: 80,
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
    lineHeight: 24,
    position: "absolute",
    marginLeft: -57.5,
    textAlign: "center",
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    textTransform: "uppercase",
  },
  header: {
    top: 0,
    left: 0,
    width: 450,
    height: 65,
    position: "absolute",
  },
  smartIndiaSociety: {
    marginLeft: -82,
    top: 22,
    color: Color.white,
    width: 169,
    textAlign: "center",
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    textTransform: "uppercase",
    left: "50%",
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  drawer: {
    left: "9.18%",
    top: "3.49%",
    right: "82.77%",
    bottom: "95%",
    width: "8.05%",
    height: "1.51%",
    position: "absolute",
  },
  proximityInThis: {
    top: 265,
    left: 41,
    color: Color.colorDimgray,
    width: 289,
    height: 399,
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
  },
  proximity: {
    backgroundColor: Color.colorPapayawhip,
    flex: 1,
    height: 764,
  },
});

export default Proximity;
