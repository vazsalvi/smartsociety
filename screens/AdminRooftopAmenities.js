import * as React from "react";
import { Pressable, Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Padding, Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const AdminRooftopAmenities = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.adminrooftopamenities, styles.iconLayout]}>
      <Pressable
        style={styles.save}
        onPress={() => navigation.navigate("AdminSocietyInfo")}
      >
        <Text style={[styles.back, styles.rooftopFlexBox]}>Back</Text>
      </Pressable>
      <View style={[styles.body, styles.bodyShadowBox]}>
        <Text style={[styles.rooftopAmenitiesIn, styles.rooftopFlexBox]}>
          Rooftop amenities in this society offer an oasis above the bustling
          cityscape, providing residents with spaces for relaxation, recreation,
          and community engagement. From lush rooftop gardens and serene lounges
          to vibrant outdoor theaters and fitness centers with panoramic views,
          these elevated spaces cater to diverse interests and lifestyles.
          Residents can unwind in stylish rooftop bars or host social gatherings
          against the backdrop of breathtaking city skylines. Additionally,
          rooftop amenities serve as hubs for cultural events, wellness
          activities, and communal celebrations, fostering a sense of belonging
          and connection among neighbors. Whether basking in the sun, admiring
          the stars, or engaging in leisurely pursuits, these elevated retreats
          offer a sanctuary amidst the urban hustle and bustle.
        </Text>
      </View>
      <View style={[styles.subject, styles.bodyShadowBox]}>
        <Text style={[styles.rooftopAmenities, styles.rooftopFlexBox]}>
          Rooftop Amenities
        </Text>
      </View>
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
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  rooftopFlexBox: {
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
  rooftopAmenitiesIn: {
    top: 10,
    left: 8,
    color: Color.colorDimgray,
    width: 289,
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
  rooftopAmenities: {
    fontSize: FontSize.size_sm,
    fontWeight: "600",
    fontFamily: FontFamily.openSansSemiBold,
    color: Color.white,
    textAlign: "left",
    lineHeight: 24,
  },
  subject: {
    top: 206,
    height: 30,
    justifyContent: "center",
    paddingVertical: 0,
    backgroundColor: Color.colorOrange_200,
    paddingHorizontal: Padding.p_43xl,
    width: 305,
    left: 33,
  },
  societyInfo: {
    top: 80,
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
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
  adminrooftopamenities: {
    backgroundColor: Color.colorPapayawhip,
    flex: 1,
    height: 800,
  },
});

export default AdminRooftopAmenities;
