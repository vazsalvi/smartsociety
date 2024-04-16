import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const Profile = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.profile, styles.iconLayout]}>
      <Pressable
        style={styles.menureturnbutton}
        onPress={() => navigation.navigate("Menu")}
      >
        <View style={styles.vectorParent}>
          <Image
            style={styles.groupChild}
            contentFit="cover"
            source={require("../assets/rectangle-13.png")}
          />
          <Text style={[styles.menu, styles.menuTypo]}>Menu</Text>
        </View>
      </Pressable>
      <View style={[styles.residencesince, styles.positionFlexBox]}>
        <View style={[styles.privacy, styles.privacyLayout]}>
          <Text style={[styles.residenceSince, styles.noOfFamilyClr]}>
            Residence since
          </Text>
        </View>
        <Text style={[styles.text, styles.textTypo]}>14/07/2011</Text>
      </View>
      <View style={[styles.noofmember, styles.roomnoFlexBox]}>
        <View style={[styles.changePassword, styles.privacyLayout]}>
          <Text style={[styles.noOfFamily, styles.noOfFamilyClr]}>
            No. of family members
          </Text>
        </View>
        <Text style={[styles.text1, styles.textTypo]}>07</Text>
      </View>
      <View style={[styles.roomno, styles.roomnoFlexBox]}>
        <View style={[styles.privacy, styles.privacyLayout]}>
          <Text style={[styles.residenceSince, styles.noOfFamilyClr]}>
            Room No:
          </Text>
        </View>
        <Text style={[styles.text2, styles.textTypo]}>402</Text>
      </View>
      <View style={[styles.contactnumber, styles.roomnoFlexBox]}>
        <View style={[styles.privacy, styles.privacyLayout]}>
          <Text style={[styles.residenceSince, styles.noOfFamilyClr]}>
            Contact Number
          </Text>
        </View>
        <Text style={[styles.text3, styles.textTypo]}>9430782011</Text>
      </View>
      <View style={[styles.position, styles.positionFlexBox]}>
        <View style={[styles.privacy, styles.privacyLayout]}>
          <Text style={[styles.residenceSince, styles.noOfFamilyClr]}>
            Position
          </Text>
        </View>
        <Text style={[styles.member, styles.textTypo]}>Member</Text>
      </View>
      <View style={[styles.nameemail, styles.profile1Layout]}>
        <View style={[styles.profile1, styles.profile1Layout]}>
          <Text style={[styles.erenTurkmen, styles.noOfFamilyClr]}>
            ______Salvi Vaz
          </Text>
          <Text style={[styles.ertukengmailcom, styles.ertukengmailcomTypo]}>
            ertuken@gmail.com
          </Text>
        </View>
      </View>
      <Image
        style={styles.profileChild}
        contentFit="cover"
        source={require("../assets/ellipse-52.png")}
      />
      <Image
        style={styles.societyimgIcon}
        contentFit="cover"
        source={require("../assets/societyimg.png")}
      />
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("Menu")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/drawer3.png")}
        />
      </Pressable>
      <Text style={[styles.smartIndiaSociety, styles.ertukengmailcomTypo]}>
        Smart India Society
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  menuTypo: {
    fontFamily: FontFamily.openSansSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_mini,
    left: "50%",
    position: "absolute",
  },
  positionFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    height: 48,
    width: 336,
    justifyContent: "flex-end",
    position: "absolute",
  },
  privacyLayout: {
    zIndex: 0,
    backgroundColor: Color.white,
    height: 48,
    width: 336,
    borderRadius: Border.br_xs,
  },
  noOfFamilyClr: {
    color: Color.colorGray_100,
    textAlign: "left",
    lineHeight: 24,
  },
  textTypo: {
    zIndex: 1,
    color: Color.colorGray_100,
    fontFamily: FontFamily.openSansRegular,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    lineHeight: 24,
    position: "absolute",
  },
  roomnoFlexBox: {
    left: 12,
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
    height: 48,
    width: 336,
    position: "absolute",
  },
  profile1Layout: {
    height: 44,
    position: "absolute",
  },
  ertukengmailcomTypo: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.openSansRegular,
    lineHeight: 24,
    left: "50%",
    position: "absolute",
  },
  groupChild: {
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
    textAlign: "left",
    color: Color.white,
    lineHeight: 24,
    fontFamily: FontFamily.openSansSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_mini,
  },
  vectorParent: {
    left: "50%",
    top: 0,
    marginLeft: -57.5,
    height: 28,
    width: 115,
    position: "absolute",
  },
  menureturnbutton: {
    top: 700,
    left: 122,
    height: 28,
    width: 115,
    position: "absolute",
  },
  residenceSince: {
    fontFamily: FontFamily.openSansRegular,
    fontSize: FontSize.size_sm,
    color: Color.colorGray_100,
  },
  privacy: {
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_3xs,
    justifyContent: "flex-end",
  },
  text: {
    left: 243,
    top: 12,
    zIndex: 1,
  },
  residencesince: {
    top: 529,
    left: 11,
    justifyContent: "flex-end",
  },
  noOfFamily: {
    width: 171,
    height: 20,
    fontFamily: FontFamily.openSansRegular,
    fontSize: FontSize.size_sm,
    color: Color.colorGray_100,
  },
  changePassword: {
    justifyContent: "center",
    paddingHorizontal: Padding.p_3xl,
    paddingVertical: 0,
  },
  text1: {
    top: 14,
    left: 298,
  },
  noofmember: {
    top: 462,
  },
  text2: {
    left: 287,
    top: 12,
    zIndex: 1,
  },
  roomno: {
    top: 395,
  },
  text3: {
    left: 242,
    top: 12,
    zIndex: 1,
  },
  contactnumber: {
    top: 328,
  },
  member: {
    left: 261,
    top: 12,
    zIndex: 1,
  },
  position: {
    top: 261,
    left: 10,
    justifyContent: "flex-end",
  },
  erenTurkmen: {
    marginLeft: -49.5,
    fontFamily: FontFamily.openSansSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_mini,
    left: "50%",
    position: "absolute",
    color: Color.colorGray_100,
    top: 0,
  },
  ertukengmailcom: {
    marginLeft: -56.5,
    top: 20,
    color: Color.greyPrimary,
    textAlign: "left",
  },
  profile1: {
    marginLeft: -62,
    width: 113,
    left: "50%",
    top: 0,
  },
  nameemail: {
    top: 173,
    left: 118,
    width: 124,
  },
  profileChild: {
    marginLeft: -38,
    top: 92,
    width: 72,
    height: 72,
    left: "50%",
    position: "absolute",
  },
  societyimgIcon: {
    left: 0,
    width: 450,
    height: 65,
    top: 0,
    position: "absolute",
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  vector: {
    left: "9.18%",
    top: "3.5%",
    right: "82.77%",
    bottom: "95%",
    width: "8.05%",
    height: "1.5%",
    position: "absolute",
  },
  smartIndiaSociety: {
    marginLeft: -63,
    top: 22,
    textTransform: "uppercase",
    textAlign: "center",
    color: Color.white,
  },
  profile: {
    backgroundColor: Color.colorPapayawhip,
    flex: 1,
    height: 708,
  },
});

export default Profile;
