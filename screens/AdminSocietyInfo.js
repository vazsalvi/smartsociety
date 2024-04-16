import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const AdminSocietyInfo = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.adminsocietyinfo}>
      <Pressable
        style={styles.back}
        onPress={() => navigation.navigate("AdminAddSocietyInfo")}
      >
        <Pressable
          style={styles.wrapper}
          onPress={() => navigation.navigate("AdminAddSocietyInfo")}
        >
          <Image
            style={[styles.icon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/rectangle-13.png")}
          />
        </Pressable>
        <Text style={styles.edit}>Edit</Text>
      </Pressable>
      <Text style={[styles.societyInfo, styles.societyTypo]}>
        {" "}
        Society info
      </Text>
      <View style={styles.location}>
        <Text style={styles.katemanivaliKalyanEast}>
          Katemanivali, Kalyan East, Beyond Thane, Mumbai
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
          source={require("../assets/societyimg19.png")}
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
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.contactus, styles.featureLayout]}
        onPress={() => navigation.navigate("AdminContactsUs")}
      >
        <View style={[styles.contactusChild, styles.proximityChildLayout]} />
        <Text style={[styles.contactsUs, styles.feature1Typo]}>{`Contacts Us
`}</Text>
      </Pressable>
      <Pressable
        style={[styles.feature, styles.featureLayout]}
        onPress={() => navigation.navigate("AdminReraNumber")}
      >
        <View style={[styles.featureChild, styles.proximityChildLayout]} />
        <Text style={[styles.feature1, styles.feature1Typo]}>Feature</Text>
      </Pressable>
      <Pressable
        style={[styles.reranumber, styles.featureLayout]}
        onPress={() => navigation.navigate("AdminReraNumber")}
      >
        <View style={[styles.reranumberChild, styles.proximityChildLayout]} />
        <Text style={[styles.feature1, styles.feature1Typo]}>{`Rera Number
`}</Text>
      </Pressable>
      <Pressable
        style={[styles.proximity, styles.proximityChildLayout]}
        onPress={() => navigation.navigate("AdminProximity")}
      >
        <View style={[styles.proximityChild, styles.proximityChildLayout]} />
        <Text
          style={[styles.proximity1, styles.proximity1Position]}
        >{`Proximity 
`}</Text>
      </Pressable>
      <Pressable
        style={[styles.internalamenities, styles.proximityChildLayout]}
        onPress={() => navigation.navigate("AdminRooftopAmenities")}
      >
        <View
          style={[styles.internalamenitiesChild, styles.proximityChildLayout]}
        />
        <Text
          style={[styles.internalAmenities, styles.amenitiesPosition]}
        >{`Internal Amenities  
`}</Text>
      </Pressable>
      <Pressable
        style={[styles.roofamenities, styles.proximityChildLayout]}
        onPress={() => navigation.navigate("AdminRooftopAmenities")}
      >
        <View
          style={[styles.roofamenitiesChild, styles.proximityChildLayout]}
        />
        <Text
          style={[styles.rooftopAmenities, styles.amenitiesPosition]}
        >{`Rooftop Amenities
`}</Text>
      </Pressable>
      <Pressable
        style={[styles.highlights, styles.proximityChildLayout]}
        onPress={() => navigation.navigate("AdminSocietyHighlights")}
      >
        <View style={[styles.highlightsChild, styles.proximityChildLayout]} />
        <Text
          style={[styles.societyHighlights, styles.proximity1Position]}
        >{`Society Highlights
`}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    height: "100%",
    width: "100%",
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
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  featureLayout: {
    height: 38,
    left: 25,
    width: 308,
    position: "absolute",
  },
  proximityChildLayout: {
    height: 30,
    width: 308,
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
  proximity1Position: {
    top: 4,
    width: 128,
    color: Color.colorGray_100,
    left: 89,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
    lineHeight: 24,
    position: "absolute",
  },
  amenitiesPosition: {
    height: 23,
    top: 4,
    color: Color.colorGray_100,
    left: 89,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
    lineHeight: 24,
    position: "absolute",
  },
  icon: {
    marginLeft: -57.5,
    borderRadius: Border.br_xs,
  },
  wrapper: {
    top: 0,
    height: 28,
    width: 115,
    left: "50%",
    position: "absolute",
  },
  edit: {
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
    marginLeft: -55,
    top: 643,
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
    marginLeft: -154,
    top: 130,
    borderRadius: 20,
    shadowRadius: 3.9,
    elevation: 3.9,
    height: 47,
    width: 308,
    backgroundColor: Color.white,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    left: "50%",
    position: "absolute",
  },
  header: {
    width: 460,
    height: 64,
    left: 0,
    top: 0,
    position: "absolute",
  },
  smartIndiaSociety: {
    marginLeft: -86.9,
    top: 18,
    fontSize: FontSize.size_xs,
    width: 173,
    color: Color.white,
    textAlign: "center",
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    textTransform: "uppercase",
  },
  icon1: {
    height: "100%",
    width: "100%",
  },
  drawer: {
    left: "9.17%",
    top: "2.92%",
    right: "82.78%",
    bottom: "95.62%",
    width: "8.06%",
    height: "1.46%",
    position: "absolute",
  },
  contactusChild: {
    elevation: 4,
    shadowRadius: 4,
    borderRadius: Border.br_2xl,
    height: 30,
    left: 0,
    backgroundColor: Color.white,
    top: 0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
  },
  contactsUs: {
    top: 6,
    height: 32,
  },
  contactus: {
    top: 572,
  },
  featureChild: {
    elevation: 4,
    shadowRadius: 4,
    borderRadius: Border.br_2xl,
    height: 30,
    left: 0,
    backgroundColor: Color.white,
    top: 0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
  },
  feature1: {
    top: 5,
    height: 33,
  },
  feature: {
    top: 511,
  },
  reranumberChild: {
    elevation: 4,
    shadowRadius: 4,
    borderRadius: Border.br_2xl,
    height: 30,
    left: 0,
    backgroundColor: Color.white,
    top: 0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
  },
  reranumber: {
    top: 450,
  },
  proximityChild: {
    elevation: 4,
    shadowRadius: 4,
    borderRadius: Border.br_2xl,
    height: 30,
    left: 0,
    backgroundColor: Color.white,
    top: 0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
  },
  proximity1: {
    height: 25,
  },
  proximity: {
    top: 389,
    left: 25,
    height: 30,
  },
  internalamenitiesChild: {
    elevation: 4,
    shadowRadius: 4,
    borderRadius: Border.br_2xl,
    height: 30,
    left: 0,
    backgroundColor: Color.white,
    top: 0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
  },
  internalAmenities: {
    width: 146,
  },
  internalamenities: {
    top: 327,
    left: 25,
    height: 30,
  },
  roofamenitiesChild: {
    elevation: 4,
    shadowRadius: 4,
    borderRadius: Border.br_2xl,
    height: 30,
    left: 0,
    backgroundColor: Color.white,
    top: 0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
  },
  rooftopAmenities: {
    width: 145,
  },
  roofamenities: {
    top: 266,
    left: 25,
    height: 30,
  },
  highlightsChild: {
    elevation: 4,
    shadowRadius: 4,
    borderRadius: Border.br_2xl,
    height: 30,
    left: 0,
    backgroundColor: Color.white,
    top: 0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
  },
  societyHighlights: {
    height: 24,
  },
  highlights: {
    top: 205,
    left: 25,
    height: 30,
  },
  adminsocietyinfo: {
    backgroundColor: Color.colorPapayawhip,
    flex: 1,
    height: 822,
    overflow: "hidden",
    width: "100%",
  },
});

export default AdminSocietyInfo;
