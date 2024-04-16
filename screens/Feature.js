import * as React from "react";
import { Pressable, Text, StyleSheet, View, TextInput } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Border, FontSize, Color, Padding } from "../GlobalStyles";

const Feature = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.feature, styles.iconLayout]}>
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
      <Text style={[styles.societyInfo, styles.societyTypo1]}>
        {" "}
        Society info
      </Text>
      <View style={styles.header}>
        <Image
          style={styles.header}
          contentFit="cover"
          source={require("../assets/societyimg.png")}
        />
        <Text style={[styles.smartIndiaSociety, styles.societyTypo]}>
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
          source={require("../assets/drawer7.png")}
        />
      </Pressable>
      <Text style={[styles.inThisSociety, styles.societyTypo]}>
        In this society, every residential property boasts an array of features
        designed to enhance comfort, convenience, and quality of life for
        residents. From modern architectural designs and eco-friendly
        construction materials to smart home technology and energy-efficient
        appliances, these features embody the ethos of contemporary living.
        Residents enjoy a range of amenities such as swimming pools, fitness
        centers, and landscaped gardens, fostering active and healthy
        lifestyles. Additionally, communal spaces like rooftop lounges,
        entertainment rooms, and coworking areas promote social interaction and
        community bonding. With a focus on innovation and sustainability, these
        features contribute to creating vibrant and harmonious living
        environments within the society.
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
  societyTypo1: {
    textAlign: "center",
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    textTransform: "uppercase",
    left: "50%",
  },
  societyTypo: {
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
    marginLeft: -58,
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
    fontWeight: "600",
    fontFamily: FontFamily.openSansSemiBold,
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
    marginLeft: -58,
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
    marginLeft: -83,
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
    top: "3.5%",
    right: "82.77%",
    bottom: "94.99%",
    width: "8.05%",
    height: "1.5%",
    position: "absolute",
  },
  inThisSociety: {
    top: 265,
    left: 41,
    color: Color.colorDimgray,
    width: 289,
    height: 399,
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
  },
  feature: {
    backgroundColor: Color.colorPapayawhip,
    flex: 1,
    height: 779,
  },
});

export default Feature;
