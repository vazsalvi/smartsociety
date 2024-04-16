import * as React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const AdminAddSocietyInfo = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.adminaddsocietyinfo}>
      <Pressable
        style={styles.save}
        onPress={() => navigation.navigate("AdminSocietyInfo")}
      >
        <Image
          style={styles.saveChild}
          contentFit="cover"
          source={require("../assets/rectangle-13.png")}
        />
        <Text style={styles.save1}>Save</Text>
      </Pressable>
      <Text style={[styles.societyInfo, styles.societyTypo]}>
        {" "}
        Society info
      </Text>
      <View style={styles.header}>
        <Image
          style={styles.header}
          contentFit="cover"
          source={require("../assets/societyimg20.png")}
        />
        <Text style={[styles.smartIndiaSociety, styles.societyTypo]}>
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
      <View style={[styles.location, styles.featureLayout]}>
        <Text style={styles.katemanivaliKalyanEast}>
          Katemanivali, Kalyan East, Beyond Thane, Mumbai
        </Text>
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector11.png")}
        />
      </View>
      <Pressable
        style={[styles.contactus, styles.featureLayout]}
        onPress={() => navigation.navigate("AdminAddContactsUs")}
      >
        <View style={[styles.contactusChild, styles.childShadowBox]} />
        <Text style={styles.contactsUs}>Contacts Us</Text>
      </Pressable>
      <Pressable
        style={[styles.feature, styles.featureLayout]}
        onPress={() => navigation.navigate("AdminAddFeature")}
      >
        <View style={[styles.featureChild, styles.childShadowBox]} />
        <Text style={styles.feature1}>Feature</Text>
      </Pressable>
      <Pressable
        style={[styles.reranumber, styles.reranumberPosition]}
        onPress={() => navigation.navigate("AdminAddReraNumber")}
      >
        <View style={[styles.reranumberChild, styles.childShadowBox]} />
        <Text style={styles.feature1}>{`Rera Number
`}</Text>
      </Pressable>
      <Pressable
        style={[styles.proximity, styles.featureLayout]}
        onPress={() => navigation.navigate("AdminAddProximity")}
      >
        <View style={[styles.proximityChild, styles.childShadowBox]} />
        <Text
          style={[styles.proximity1, styles.proximity1Position]}
        >{`Proximity 
`}</Text>
      </Pressable>
      <Pressable
        style={[styles.internalamenities, styles.featureLayout]}
        onPress={() => navigation.navigate("AdminAddInternalAmenities")}
      >
        <View style={[styles.internalamenitiesChild, styles.childShadowBox]} />
        <Text
          style={[styles.internalAmenities, styles.amenitiesPosition]}
        >{`Internal Amenities  
`}</Text>
      </Pressable>
      <Pressable
        style={[styles.roofamenities, styles.reranumberPosition]}
        onPress={() => navigation.navigate("AdminAddRooftopAmenities")}
      >
        <View style={[styles.roofamenitiesChild, styles.childShadowBox]} />
        <Text
          style={[styles.rooftopAmenities, styles.amenitiesPosition]}
        >{`Rooftop Amenities
`}</Text>
      </Pressable>
      <Pressable
        style={[styles.highlights, styles.featureLayout]}
        onPress={() => navigation.navigate("AdminAddSocietyHighlights")}
      >
        <View style={[styles.highlightsChild, styles.childShadowBox]} />
        <Text
          style={[styles.societyHighlights, styles.proximity1Position]}
        >{`Society Highlights
`}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  societyTypo: {
    textAlign: "center",
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    textTransform: "uppercase",
    lineHeight: 24,
    left: "50%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  featureLayout: {
    width: 308,
    position: "absolute",
  },
  childShadowBox: {
    elevation: 4,
    shadowRadius: 4,
    borderRadius: Border.br_2xl,
    height: 30,
    width: 308,
    backgroundColor: Color.white,
    left: 0,
    top: 0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    position: "absolute",
  },
  reranumberPosition: {
    left: 21,
    width: 308,
    position: "absolute",
  },
  proximity1Position: {
    top: 4,
    left: 89,
    width: 128,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorGray_100,
    fontFamily: FontFamily.openSansRegular,
    lineHeight: 24,
    position: "absolute",
  },
  amenitiesPosition: {
    height: 23,
    top: 4,
    left: 89,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorGray_100,
    fontFamily: FontFamily.openSansRegular,
    lineHeight: 24,
    position: "absolute",
  },
  saveChild: {
    marginLeft: -57.5,
    borderRadius: Border.br_xs,
    top: 0,
    height: 28,
    width: 115,
    left: "50%",
    position: "absolute",
  },
  save1: {
    marginLeft: -18.5,
    top: 3,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.colorGray_100,
    fontFamily: FontFamily.openSansRegular,
    lineHeight: 24,
    left: "50%",
    position: "absolute",
  },
  save: {
    marginLeft: -58,
    top: 651,
    shadowRadius: 20,
    elevation: 20,
    height: 28,
    width: 115,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    left: "50%",
    position: "absolute",
  },
  societyInfo: {
    marginLeft: -56,
    top: 80,
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
  },
  header: {
    width: 437,
    height: 64,
    left: 0,
    top: 0,
    position: "absolute",
  },
  smartIndiaSociety: {
    marginLeft: -82.5,
    top: 18,
    fontSize: FontSize.size_xs,
    color: Color.white,
    width: 164,
  },
  icon: {
    height: "100%",
    width: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  vector: {
    left: "9.17%",
    top: "2.92%",
    right: "82.78%",
    bottom: "95.62%",
    width: "8.06%",
    height: "1.46%",
    position: "absolute",
  },
  katemanivaliKalyanEast: {
    top: 8,
    left: 38,
    lineHeight: 16,
    fontWeight: "700",
    fontFamily: FontFamily.openSansBold,
    color: Color.colorDimgray,
    width: 252,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    position: "absolute",
  },
  vectorIcon: {
    height: "48.94%",
    width: "4.55%",
    top: "25.53%",
    right: "89.29%",
    bottom: "25.53%",
    left: "6.17%",
    position: "absolute",
  },
  location: {
    top: 130,
    borderRadius: 20,
    shadowRadius: 3.9,
    elevation: 3.9,
    height: 47,
    backgroundColor: Color.white,
    width: 308,
    left: 25,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
  },
  contactusChild: {
    height: 30,
  },
  contactsUs: {
    top: 6,
    left: 90,
    height: 32,
    width: 128,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorGray_100,
    fontFamily: FontFamily.openSansRegular,
    lineHeight: 24,
    position: "absolute",
  },
  contactus: {
    top: 572,
    left: 19,
    height: 38,
  },
  featureChild: {
    height: 30,
  },
  feature1: {
    top: 5,
    height: 33,
    left: 89,
    width: 128,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorGray_100,
    fontFamily: FontFamily.openSansRegular,
    lineHeight: 24,
    position: "absolute",
  },
  feature: {
    top: 511,
    left: 20,
    height: 38,
  },
  reranumberChild: {
    height: 30,
  },
  reranumber: {
    top: 450,
    height: 38,
  },
  proximityChild: {
    height: 30,
  },
  proximity1: {
    height: 25,
  },
  proximity: {
    top: 389,
    left: 22,
    height: 30,
  },
  internalamenitiesChild: {
    height: 30,
  },
  internalAmenities: {
    width: 146,
  },
  internalamenities: {
    top: 327,
    left: 23,
    height: 30,
  },
  roofamenitiesChild: {
    height: 30,
  },
  rooftopAmenities: {
    width: 145,
  },
  roofamenities: {
    top: 266,
    height: 30,
  },
  highlightsChild: {
    height: 30,
  },
  societyHighlights: {
    height: 24,
  },
  highlights: {
    top: 205,
    height: 30,
    left: 25,
    width: 308,
  },
  adminaddsocietyinfo: {
    backgroundColor: Color.colorPapayawhip,
    flex: 1,
    height: 822,
    overflow: "hidden",
    width: "100%",
  },
});

export default AdminAddSocietyInfo;
