import * as React from "react";
import { Pressable, Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Border, FontSize, Color, Padding } from "../GlobalStyles";

const AdminContactsUs = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.admincontactsus, styles.iconLayout]}>
      <Pressable
        style={styles.save}
        onPress={() => navigation.navigate("AdminSocietyInfo")}
      >
        <Text style={[styles.back, styles.backTypo]}>Back</Text>
      </Pressable>
      <View style={[styles.body, styles.bodyShadowBox]} />
      <View style={[styles.subject, styles.bodyShadowBox]}>
        <Text style={styles.contactsUs}>Contacts Us</Text>
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
        <Text style={[styles.smartIndiaSociety, styles.forInquiriesOrTypo]}>
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
      <Text style={[styles.forInquiriesOr, styles.forInquiriesOrTypo]}>
        For inquiries or assistance, please don't hesitate to contact us. You
        can reach our customer support team via email at [Vazsalvi@@gmail.com]
        or by phone at +91 9404843146. Our office hours are Monday through
        Friday, 9:00 AM to 5:00 PM. We're here to help with any questions you
        may have regarding our services, properties, or anything else you need
        assistance with. Your satisfaction is our priority, and we look forward
        to hearing from you!
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
    fontFamily: FontFamily.openSansRegular,
    textAlign: "left",
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
  forInquiriesOrTypo: {
    fontSize: FontSize.size_xs,
    lineHeight: 24,
    position: "absolute",
  },
  back: {
    marginLeft: -18.5,
    top: 2,
    fontSize: FontSize.size_mini,
    color: Color.colorGray_100,
    textAlign: "left",
    lineHeight: 24,
    left: "50%",
    fontFamily: FontFamily.openSansRegular,
    position: "absolute",
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
  contactsUs: {
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
    paddingHorizontal: Padding.p_43xl,
    paddingVertical: 0,
    backgroundColor: Color.colorOrange_200,
    width: 305,
    left: 33,
  },
  societyInfo: {
    top: 80,
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
    lineHeight: 24,
    marginLeft: -58,
    textAlign: "center",
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    textTransform: "uppercase",
    position: "absolute",
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
    textAlign: "center",
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    textTransform: "uppercase",
    left: "50%",
    color: Color.white,
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
  forInquiriesOr: {
    top: 265,
    left: 41,
    color: Color.colorDimgray,
    width: 289,
    height: 399,
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
  },
  admincontactsus: {
    backgroundColor: Color.colorPapayawhip,
    flex: 1,
    height: 800,
  },
});

export default AdminContactsUs;
