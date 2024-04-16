import * as React from "react";
import { Pressable, Text, StyleSheet, View, TextInput } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Padding, Border, FontSize, Color } from "../GlobalStyles";

const RooftopAmenities = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.rooftopamenities, styles.iconLayout]}>
      <Pressable
        style={styles.save}
        onPress={() => navigation.navigate("SocietyInfo")}
      >
        <Text style={[styles.back, styles.backTypo]}>Back</Text>
      </Pressable>
      <View style={[styles.body, styles.bodyShadowBox]}>
        <Text style={[styles.rooftopAmenitiesIn, styles.backTypo]}>
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
          source={require("../assets/drawer10.png")}
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
  },
  body: {
    top: 255,
    backgroundColor: Color.white,
    height: 420,
    paddingVertical: Padding.p_sm,
  },
  subject: {
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
    top: "3.5%",
    right: "82.77%",
    bottom: "95%",
    width: "8.05%",
    height: "1.5%",
    position: "absolute",
  },
  rooftopamenities: {
    backgroundColor: Color.colorPapayawhip,
    flex: 1,
    height: 792,
  },
});

export default RooftopAmenities;
