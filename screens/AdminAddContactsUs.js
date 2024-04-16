import * as React from "react";
import { Pressable, Text, StyleSheet, TextInput, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Border, FontSize, Color, Padding } from "../GlobalStyles";

const AdminAddContactsUs = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.adminaddcontactsus, styles.iconLayout]}>
      <Pressable
        style={styles.save}
        onPress={() => navigation.navigate("AdminAddSocietyInfo")}
      >
        <Text style={[styles.save1, styles.save1Typo]}>Save</Text>
      </Pressable>
      <TextInput
        style={[styles.body, styles.bodyShadowBox]}
        placeholder="Type here..."
        placeholderTextColor="#4f4f4f"
      />
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
        <Text style={[styles.smartIndiaSociety, styles.typeHereTypo]}>
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
      <Text style={[styles.typeHere, styles.typeHereTypo]}>Type here...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  save1Typo: {
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
  typeHereTypo: {
    fontSize: FontSize.size_xs,
    lineHeight: 24,
    position: "absolute",
  },
  save1: {
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
  typeHere: {
    top: 265,
    left: 41,
    color: Color.colorDimgray,
    width: 289,
    height: 399,
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
  },
  adminaddcontactsus: {
    backgroundColor: Color.colorPapayawhip,
    flex: 1,
    height: 800,
  },
});

export default AdminAddContactsUs;
