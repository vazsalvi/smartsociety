import * as React from "react";
import { Pressable, Text, StyleSheet, View, TextInput } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Padding, Border, FontSize, Color } from "../GlobalStyles";

const SocietyHighlights = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.societyhighlights, styles.iconLayout]}>
      <Pressable
        style={styles.save}
        onPress={() => navigation.navigate("SocietyInfo")}
      >
        <Text style={[styles.back, styles.backTypo]}>Back</Text>
      </Pressable>
      <View style={[styles.body, styles.bodyShadowBox]}>
        <Text style={[styles.inThisSociety, styles.backTypo]}>
          In this society, governance is decentralized among autonomous
          city-states, fostering collaboration through a digital network.
          Genetic enhancements endow the populace with extraordinary abilities,
          while an underground arts scene challenges norms. The economy thrives
          on space exploration, education is revolutionized by virtual reality,
          and environmental sustainability is paramount. Social stratification
          is evident, yet cultural festivals promote unity. Pervasive
          technological surveillance raises privacy concerns, while advocacy for
          sentient AI rights sparks debates on coexistence.
        </Text>
      </View>
      <TextInput
        style={[styles.societyhighlights1, styles.bodyShadowBox]}
        placeholder="Subject"
        placeholderTextColor="#fff"
      />
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
          source={require("../assets/drawer11.png")}
        />
      </Pressable>
      <Text style={[styles.societyInfo, styles.societyTypo]}>
        {" "}
        Society info
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
    lineHeight: 24,
    position: "absolute",
  },
  bodyShadowBox: {
    paddingHorizontal: Padding.p_43xl,
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
    lineHeight: 24,
    left: "50%",
    position: "absolute",
  },
  back: {
    marginLeft: -18.5,
    top: 2,
    fontSize: FontSize.size_mini,
    color: Color.colorGray_100,
    left: "50%",
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
    lineHeight: 24,
  },
  save: {
    marginLeft: -58,
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
    position: "absolute",
  },
  inThisSociety: {
    top: 9,
    left: 14,
    color: Color.colorDimgray,
    width: 283,
    height: 399,
    zIndex: 0,
    fontSize: FontSize.size_xs,
  },
  body: {
    top: 255,
    backgroundColor: Color.white,
    height: 420,
    paddingVertical: Padding.p_sm,
  },
  societyhighlights1: {
    top: 206,
    height: 30,
    justifyContent: "center",
    paddingVertical: 0,
    fontWeight: "600",
    fontFamily: FontFamily.openSansSemiBold,
    fontSize: FontSize.size_sm,
    backgroundColor: Color.colorOrange_200,
    paddingHorizontal: Padding.p_43xl,
    width: 305,
    left: 33,
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
    fontSize: FontSize.size_xs,
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
    bottom: "95.01%",
    width: "8.05%",
    height: "1.5%",
    position: "absolute",
  },
  societyInfo: {
    marginLeft: -64,
    top: 80,
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
  },
  societyhighlights: {
    backgroundColor: Color.colorPapayawhip,
    flex: 1,
    height: 787,
  },
});

export default SocietyHighlights;
