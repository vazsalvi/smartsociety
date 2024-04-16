import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const SocietyInfo = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.societyinfo}>
      <View style={styles.menureturnbutton}>
        <Pressable
          style={styles.english}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            style={styles.englishChild}
            contentFit="cover"
            source={require("../assets/rectangle-13.png")}
          />
          <Text style={styles.menu}>Menu</Text>
        </Pressable>
      </View>
      <Pressable
        style={[styles.contactus, styles.featureLayout]}
        onPress={() => navigation.navigate("ContactsUs")}
      >
        <View style={[styles.contactusChild, styles.childShadowBox]} />
        <Text style={[styles.contactsUs, styles.feature1Typo]}>{`Contacts Us
`}</Text>
      </Pressable>
      <Pressable
        style={[styles.feature, styles.featureLayout]}
        onPress={() => navigation.navigate("Feature")}
      >
        <View style={[styles.featureChild, styles.childShadowBox]} />
        <Text style={[styles.feature1, styles.feature1Typo]}>Feature</Text>
      </Pressable>
      <Pressable
        style={[styles.reranumber, styles.reranumberPosition]}
        onPress={() => navigation.navigate("ReraNumber")}
      >
        <View style={[styles.reranumberChild, styles.childShadowBox]} />
        <Text style={[styles.feature1, styles.feature1Typo]}>{`Rera Number
`}</Text>
      </Pressable>
      <Pressable
        style={[styles.proximity, styles.featureLayout]}
        onPress={() => navigation.navigate("Proximity")}
      >
        <View style={[styles.proximityChild, styles.childShadowBox]} />
        <Text
          style={[styles.proximity1, styles.proximity1Position]}
        >{`Proximity 
`}</Text>
      </Pressable>
      <Pressable
        style={[styles.internalamenities, styles.featureLayout]}
        onPress={() => navigation.navigate("InternalAmenities")}
      >
        <View style={[styles.internalamenitiesChild, styles.childShadowBox]} />
        <Text
          style={[styles.internalAmenities, styles.amenitiesPosition]}
        >{`Internal Amenities  
`}</Text>
      </Pressable>
      <Pressable
        style={[styles.roofamenities, styles.reranumberPosition]}
        onPress={() => navigation.navigate("RooftopAmenities")}
      >
        <View style={[styles.roofamenitiesChild, styles.childShadowBox]} />
        <Text
          style={[styles.rooftopAmenities, styles.amenitiesPosition]}
        >{`Rooftop Amenities
`}</Text>
      </Pressable>
      <Pressable
        style={[styles.highlights, styles.locationPosition]}
        onPress={() => navigation.navigate("SocietyHighlights")}
      >
        <View style={[styles.highlightsChild, styles.childShadowBox]} />
        <Text
          style={[styles.societyHighlights, styles.proximity1Position]}
        >{`Society Highlights
`}</Text>
      </Pressable>
      <Text style={[styles.societyInfo, styles.societyFlexBox]}>
        {" "}
        Society info
      </Text>
      <View style={[styles.location, styles.locationPosition]}>
        <Text style={[styles.katemanivaliKalyanEast, styles.societyFlexBox]}>
          Katemanivali, Kalyan East, Beyond Thane, Thane
        </Text>
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector11.png")}
        />
      </View>
      <View style={styles.header}>
        <Image
          style={styles.header}
          contentFit="cover"
          source={require("../assets/societyimg2.png")}
        />
        <Text style={[styles.smartIndiaSociety, styles.societyFlexBox]}>
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
          source={require("../assets/drawer.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  featureLayout: {
    width: 308,
    position: "absolute",
  },
  childShadowBox: {
    elevation: 4,
    shadowRadius: 4,
    borderRadius: Border.br_2xl,
    height: 30,
    backgroundColor: Color.white,
    left: 0,
    width: 308,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    top: 0,
    position: "absolute",
  },
  feature1Typo: {
    width: 128,
    color: Color.colorGray_100,
    left: 89,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
    lineHeight: 24,
    position: "absolute",
  },
  reranumberPosition: {
    left: 22,
    width: 308,
    position: "absolute",
  },
  proximity1Position: {
    top: 4,
    width: 128,
    color: Color.colorGray_100,
    fontSize: FontSize.size_sm,
    left: 89,
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
    lineHeight: 24,
    position: "absolute",
  },
  amenitiesPosition: {
    height: 23,
    top: 4,
    color: Color.colorGray_100,
    fontSize: FontSize.size_sm,
    left: 89,
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
    lineHeight: 24,
    position: "absolute",
  },
  locationPosition: {
    left: 26,
    width: 308,
    position: "absolute",
  },
  societyFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  englishChild: {
    borderRadius: Border.br_xs,
    left: "50%",
    top: 0,
    marginLeft: -57.5,
    height: 28,
    width: 115,
    position: "absolute",
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
  english: {
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    left: "50%",
    top: 0,
    marginLeft: -57.5,
    height: 28,
    width: 115,
    position: "absolute",
  },
  menureturnbutton: {
    top: 700,
    left: 125,
    height: 28,
    width: 115,
    position: "absolute",
  },
  contactusChild: {
    height: 30,
  },
  contactsUs: {
    top: 6,
    height: 32,
  },
  contactus: {
    top: 613,
    left: 20,
    height: 38,
  },
  featureChild: {
    height: 30,
  },
  feature1: {
    top: 5,
    height: 33,
  },
  feature: {
    top: 552,
    left: 21,
    height: 38,
  },
  reranumberChild: {
    height: 30,
  },
  reranumber: {
    top: 491,
    height: 38,
  },
  proximityChild: {
    height: 30,
  },
  proximity1: {
    height: 25,
  },
  proximity: {
    top: 430,
    left: 23,
    height: 30,
  },
  internalamenitiesChild: {
    height: 30,
  },
  internalAmenities: {
    width: 146,
  },
  internalamenities: {
    top: 368,
    left: 24,
    height: 30,
  },
  roofamenitiesChild: {
    height: 30,
  },
  rooftopAmenities: {
    width: 145,
  },
  roofamenities: {
    top: 307,
    height: 30,
  },
  highlightsChild: {
    height: 30,
  },
  societyHighlights: {
    height: 24,
  },
  highlights: {
    top: 246,
    height: 30,
  },
  societyInfo: {
    marginLeft: -70,
    top: 94,
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
    width: 138,
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    textTransform: "uppercase",
    textAlign: "center",
    lineHeight: 24,
    left: "50%",
  },
  katemanivaliKalyanEast: {
    top: 8,
    left: 38,
    lineHeight: 16,
    color: Color.colorDimgray,
    width: 252,
    textAlign: "center",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.openSansRegular,
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
    top: 151,
    borderRadius: 20,
    shadowRadius: 3.9,
    elevation: 3.9,
    height: 47,
    backgroundColor: Color.white,
    left: 26,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
  },
  header: {
    width: 450,
    height: 64,
    left: 0,
    top: 0,
    position: "absolute",
  },
  smartIndiaSociety: {
    marginLeft: -111,
    top: 22,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    textTransform: "uppercase",
    textAlign: "center",
    lineHeight: 24,
    left: "50%",
    color: Color.white,
  },
  icon: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
  },
  drawer: {
    left: "9.18%",
    top: "3.4%",
    right: "82.77%",
    bottom: "95.14%",
    width: "8.05%",
    height: "1.45%",
    position: "absolute",
  },
  societyinfo: {
    backgroundColor: Color.colorPapayawhip,
    flex: 1,
    height: 708,
    overflow: "hidden",
    width: "100%",
  },
});

export default SocietyInfo;
