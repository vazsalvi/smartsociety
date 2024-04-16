import * as React from "react";
import { Pressable, Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Padding, Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const AdminSocietyHighlights = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.adminsocietyhighlights, styles.iconLayout]}>
      <Pressable
        style={styles.save}
        onPress={() => navigation.navigate("AdminSocietyInfo")}
      >
        <Text style={[styles.back, styles.societyFlexBox]}>Back</Text>
      </Pressable>
      <View style={[styles.body, styles.bodyShadowBox]}>
        <Text style={[styles.inThisSociety, styles.societyFlexBox]}>
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
      <View style={[styles.societyhighlights, styles.bodyShadowBox]}>
        <Text style={[styles.societyHighlights, styles.societyFlexBox]}>
          Society Highlights
        </Text>
      </View>
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
          source={require("../assets/vector.png")}
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
  societyFlexBox: {
    textAlign: "left",
    lineHeight: 24,
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
    fontFamily: FontFamily.openSansRegular,
    textAlign: "left",
    lineHeight: 24,
    position: "absolute",
    left: "50%",
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
    fontFamily: FontFamily.openSansRegular,
    textAlign: "left",
    lineHeight: 24,
    position: "absolute",
  },
  body: {
    top: 255,
    backgroundColor: Color.white,
    height: 420,
    paddingVertical: Padding.p_sm,
  },
  societyHighlights: {
    fontSize: FontSize.size_sm,
    fontWeight: "600",
    fontFamily: FontFamily.openSansSemiBold,
    color: Color.white,
    textAlign: "left",
    lineHeight: 24,
  },
  societyhighlights: {
    top: 206,
    height: 30,
    justifyContent: "center",
    paddingVertical: 0,
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
    marginLeft: -85,
    top: 22,
    width: 169,
    color: Color.white,
    fontSize: FontSize.size_xs,
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  drawer: {
    left: "9.17%",
    top: "3.5%",
    right: "82.78%",
    bottom: "95%",
    width: "8.06%",
    height: "1.5%",
    position: "absolute",
  },
  societyInfo: {
    marginLeft: -64,
    top: 80,
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
  },
  adminsocietyhighlights: {
    backgroundColor: Color.colorPapayawhip,
    flex: 1,
    height: 800,
  },
});

export default AdminSocietyHighlights;
