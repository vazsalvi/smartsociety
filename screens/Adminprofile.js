import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PositionText from "../components/PositionText";
import { FontFamily, Padding, Color, Border, FontSize } from "../GlobalStyles";

const Adminprofile = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.adminprofile, styles.iconLayout]}>
      <Pressable
        style={styles.menureturnbutton}
        onPress={() => navigation.navigate("AdminMenu")}
      >
        <Image
          style={styles.menureturnbuttonChild}
          contentFit="cover"
          source={require("../assets/rectangle-13.png")}
        />
        <Text style={[styles.back, styles.backTypo]}>Back</Text>
      </Pressable>
      <View style={[styles.residence, styles.roomnoFlexBox]}>
        <View style={[styles.privacy, styles.privacyLayout]}>
          <Text style={[styles.residenceSince, styles.text3Typo]}>
            Residence since
          </Text>
        </View>
        <Text style={[styles.text, styles.textPosition]}>14/07/2011</Text>
      </View>
      <View style={[styles.members, styles.roomnoFlexBox]}>
        <View style={[styles.changePassword, styles.languageLayout]}>
          <Text style={[styles.noOfFamily, styles.roomNoTypo]}>
            No. of family members
          </Text>
        </View>
        <Text style={[styles.text1, styles.textPosition]}>07</Text>
      </View>
      <View style={[styles.roomno, styles.roomnoFlexBox]}>
        <View style={[styles.language, styles.languageLayout]}>
          <Text style={[styles.roomNo, styles.roomNoTypo]}>Room no.</Text>
        </View>
        <Text style={[styles.text2, styles.textPosition]}>401</Text>
      </View>
      <View style={[styles.contact, styles.roomnoFlexBox]}>
        <View style={styles.wrapper}>
          <Text style={[styles.text3, styles.text3Typo]}>12345 67890</Text>
        </View>
      </View>
      <Text style={[styles.contact1, styles.text3Typo]}>Contact</Text>
      <View style={[styles.position, styles.roomnoFlexBox]}>
        <View style={[styles.termsConditions, styles.privacyLayout]}>
          <PositionText />
        </View>
        <Text style={[styles.admin, styles.textPosition]}>Admin</Text>
      </View>
      <Image
        style={[styles.adminprofileChild, styles.infoPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-52.png")}
      />
      <View style={[styles.info, styles.infoPosition]}>
        <Text style={[styles.erenTurkmen, styles.text3Typo]}>Eren Turkmen</Text>
        <Text style={[styles.ertukengmailcom, styles.ertukengmailcomPosition]}>
          ertuken@gmail.com
        </Text>
      </View>
      <View style={styles.header}>
        <Image
          style={styles.header}
          contentFit="cover"
          source={require("../assets/societyimg.png")}
        />
        <Text
          style={[styles.smartIndiaSociety, styles.ertukengmailcomPosition]}
        >
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
  backTypo: {
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
  },
  roomnoFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-end",
    position: "absolute",
  },
  privacyLayout: {
    zIndex: 0,
    paddingHorizontal: Padding.p_5xl,
    backgroundColor: Color.white,
    height: 48,
    width: 336,
    borderRadius: Border.br_xs,
  },
  text3Typo: {
    color: Color.colorGray_100,
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
    lineHeight: 24,
  },
  textPosition: {
    zIndex: 1,
    top: 12,
    color: Color.colorGray_100,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
    lineHeight: 24,
    position: "absolute",
  },
  languageLayout: {
    paddingVertical: 0,
    justifyContent: "center",
    zIndex: 0,
    backgroundColor: Color.white,
    height: 48,
    width: 336,
    borderRadius: Border.br_xs,
  },
  roomNoTypo: {
    height: 20,
    color: Color.colorGray_100,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
    lineHeight: 24,
  },
  infoPosition: {
    left: "50%",
    position: "absolute",
  },
  ertukengmailcomPosition: {
    fontSize: FontSize.size_xs,
    lineHeight: 24,
    left: "50%",
    position: "absolute",
  },
  menureturnbuttonChild: {
    marginLeft: -57.5,
    borderRadius: Border.br_xs,
    left: "50%",
    top: 0,
    height: 28,
    width: 115,
    position: "absolute",
  },
  back: {
    marginLeft: -19.5,
    top: 2,
    color: Color.white,
    lineHeight: 24,
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
    fontSize: FontSize.size_mini,
    left: "50%",
    position: "absolute",
  },
  menureturnbutton: {
    top: 660,
    left: 122,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    height: 28,
    width: 115,
    position: "absolute",
  },
  residenceSince: {
    fontSize: FontSize.size_sm,
    color: Color.colorGray_100,
    left: 23,
    top: 14,
    zIndex: 0,
    position: "absolute",
  },
  privacy: {
    paddingVertical: 10,
    justifyContent: "flex-end",
  },
  text: {
    left: 257,
  },
  residence: {
    top: 501,
    justifyContent: "flex-end",
    height: 48,
    width: 336,
    flexDirection: "row",
    left: 9,
  },
  noOfFamily: {
    width: 171,
  },
  changePassword: {
    paddingHorizontal: 21,
  },
  text1: {
    left: 302,
  },
  members: {
    top: 430,
    left: 11,
    justifyContent: "flex-end",
    height: 48,
    width: 336,
    flexDirection: "row",
  },
  roomNo: {
    width: 108,
    left: 23,
    top: 14,
    zIndex: 0,
    position: "absolute",
  },
  language: {
    paddingHorizontal: Padding.p_5xl,
    justifyContent: "center",
  },
  text2: {
    left: 300,
  },
  roomno: {
    top: 359,
    justifyContent: "flex-end",
    height: 48,
    width: 336,
    flexDirection: "row",
    left: 9,
  },
  text3: {
    fontSize: FontSize.size_sm,
    color: Color.colorGray_100,
  },
  wrapper: {
    alignItems: "flex-end",
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: 9,
    backgroundColor: Color.white,
    justifyContent: "flex-end",
    height: 48,
    width: 336,
    borderRadius: Border.br_xs,
  },
  contact: {
    top: 291,
    left: 10,
    justifyContent: "flex-end",
  },
  contact1: {
    top: 304,
    left: 32,
    width: 67,
    height: 21,
    fontSize: FontSize.size_sm,
    color: Color.colorGray_100,
    position: "absolute",
  },
  termsConditions: {
    paddingVertical: 13,
  },
  admin: {
    left: 277,
  },
  position: {
    top: 217,
    justifyContent: "flex-end",
    height: 48,
    width: 336,
    flexDirection: "row",
    left: 9,
  },
  adminprofileChild: {
    marginLeft: -38,
    top: 74,
    width: 72,
    height: 72,
  },
  erenTurkmen: {
    marginLeft: -49.5,
    color: Color.colorGray_100,
    fontSize: FontSize.size_mini,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  ertukengmailcom: {
    marginLeft: -56.5,
    top: 20,
    color: Color.greyPrimary,
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
  },
  info: {
    marginLeft: -62,
    top: 155,
    width: 113,
    height: 44,
  },
  header: {
    left: 0,
    width: 450,
    height: 65,
    top: 0,
    position: "absolute",
  },
  smartIndiaSociety: {
    marginLeft: -87.7,
    top: 22,
    textTransform: "uppercase",
    fontWeight: "800",
    fontFamily: FontFamily.openSansExtraBold,
    textAlign: "center",
    width: 180,
    opacity: 0.8,
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
  adminprofile: {
    backgroundColor: Color.colorPapayawhip,
    flex: 1,
    height: 800,
  },
});

export default Adminprofile;
