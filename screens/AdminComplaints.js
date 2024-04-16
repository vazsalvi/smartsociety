import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const AdminComplaints = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.admincomplaints, styles.iconLayout]}>
      <Pressable
        style={[styles.viewbutton, styles.backShadowBox]}
        onPress={() => navigation.navigate("AdminViewComplaints")}
      >
        <Text style={[styles.viewAllComplaints, styles.back1Typo]}>
          View all complaints
        </Text>
      </Pressable>
      <Pressable
        style={[styles.back, styles.backShadowBox]}
        onPress={() => navigation.navigate("Adminhome")}
      >
        <Image
          style={[styles.backChild, styles.headerPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-13.png")}
        />
        <Text style={[styles.back1, styles.back1Typo]}>Back</Text>
      </Pressable>
      <Text style={styles.asAAdmin}>
        As a admin you can view all the complaints raised by the members.
      </Text>
      <Text style={[styles.complaints, styles.complaintsTypo]}>Complaints</Text>
      <View style={[styles.header, styles.headerPosition]}>
        <Image
          style={[styles.header, styles.headerPosition]}
          contentFit="cover"
          source={require("../assets/societyimg5.png")}
        />
        <Text style={[styles.smartIndiaSociety, styles.complaintsTypo]}>
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
  backShadowBox: {
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    position: "absolute",
  },
  back1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
    lineHeight: 24,
    fontSize: FontSize.size_mini,
    color: Color.white,
    left: "50%",
    position: "absolute",
  },
  headerPosition: {
    top: 0,
    position: "absolute",
  },
  complaintsTypo: {
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    textTransform: "uppercase",
    textAlign: "center",
    lineHeight: 24,
    left: "50%",
    position: "absolute",
  },
  viewAllComplaints: {
    marginLeft: -75.5,
    top: 13,
    zIndex: 0,
  },
  viewbutton: {
    top: 383,
    left: 76,
    backgroundColor: Color.colorOrange_200,
    width: 207,
    height: 50,
    alignItems: "flex-end",
    justifyContent: "center",
    borderRadius: Border.br_xs,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
  },
  backChild: {
    marginLeft: -57.5,
    height: 28,
    width: 115,
    left: "50%",
    top: 0,
    borderRadius: Border.br_xs,
  },
  back1: {
    marginLeft: -19.5,
    top: 2,
  },
  back: {
    top: 700,
    left: 122,
    height: 27,
    width: 115,
  },
  asAAdmin: {
    marginTop: -186,
    marginLeft: -152,
    top: "50%",
    fontSize: FontSize.size_sm,
    lineHeight: 16,
    color: Color.colorDimgray,
    width: 304,
    textAlign: "center",
    fontFamily: FontFamily.openSansRegular,
    left: "50%",
    position: "absolute",
  },
  complaints: {
    marginLeft: -54,
    top: 114,
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
  },
  header: {
    left: 0,
    width: 450,
    height: 63,
  },
  smartIndiaSociety: {
    marginLeft: -88.8,
    top: 22,
    fontSize: FontSize.size_xs,
    width: 176,
    height: 23,
    color: Color.white,
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    textTransform: "uppercase",
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
  admincomplaints: {
    backgroundColor: Color.colorPapayawhip,
    flex: 1,
    height: 800,
  },
});

export default AdminComplaints;
