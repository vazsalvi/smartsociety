import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const AdminMenu = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.adminmenu}>
      <Pressable
        style={styles.signoff}
        onPress={() => navigation.navigate("Menu1")}
      >
        <Text style={[styles.logout, styles.shareTypo]}>Logout</Text>
        <Pressable
          style={styles.signout2}
          onPress={() => navigation.navigate("Menu1")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/signout-1.png")}
          />
        </Pressable>
      </Pressable>
      <View style={[styles.title, styles.titlePosition]} />
      <Pressable
        style={[styles.developers, styles.themePosition]}
        onPress={() => navigation.navigate("Member")}
      >
        <Text style={[styles.developers1, styles.shareTypo]}>Developers</Text>
      </Pressable>
      <Pressable
        style={[styles.theme, styles.themePosition]}
        onPress={() => navigation.navigate("Menu2")}
      >
        <Text style={styles.shareTypo}>Theme</Text>
      </Pressable>
      <Text style={[styles.rateUs, styles.themePosition]}>Rate us</Text>
      <Text style={[styles.share, styles.shareTypo]}>Share</Text>
      <Pressable
        style={[styles.societyInfo, styles.themePosition]}
        onPress={() => navigation.navigate("AdminSocietyInfo")}
      >
        <Text style={styles.shareTypo}>Society Info</Text>
      </Pressable>
      <Pressable
        style={[styles.profile, styles.themePosition]}
        onPress={() => navigation.navigate("Adminprofile")}
      >
        <Text style={styles.shareTypo}>Profile</Text>
      </Pressable>
      <View style={[styles.header, styles.logoutPosition]}>
        <Image
          style={[styles.header, styles.logoutPosition]}
          contentFit="cover"
          source={require("../assets/societyimg3.png")}
        />
        <Text style={[styles.salviVazAdmin, styles.salviVazAdminFlexBox]}>
          Salvi Vaz (Admin)
        </Text>
        <Text style={[styles.ertukengmailcom, styles.salviVazAdminFlexBox]}>
          ertuken@gmail.com
        </Text>
        <Image
          style={[styles.headerChild, styles.titlePosition]}
          contentFit="cover"
          source={require("../assets/ellipse-51.png")}
        />
      </View>
      <Pressable
        style={styles.drawer}
        onPress={() => navigation.navigate("Adminhome")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/group-88.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  shareTypo: {
    textAlign: "center",
    color: Color.colorDimgray,
    fontFamily: FontFamily.openSansSemiBold,
    fontWeight: "600",
    lineHeight: 24,
    fontSize: FontSize.size_base,
  },
  iconLayout: {
    maxHeight: "100%",
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  titlePosition: {
    top: 47,
    position: "absolute",
  },
  themePosition: {
    left: 29,
    position: "absolute",
  },
  logoutPosition: {
    left: 0,
    position: "absolute",
  },
  salviVazAdminFlexBox: {
    textAlign: "left",
    color: Color.white,
    lineHeight: 24,
    position: "absolute",
  },
  logout: {
    top: 2,
    left: 0,
    position: "absolute",
  },
  icon: {
    marginLeft: 16.5,
  },
  signout2: {
    left: "50%",
    top: "0%",
    bottom: "0%",
    width: 34,
    height: "100%",
    position: "absolute",
  },
  signoff: {
    top: 690,
    left: 33,
    width: 101,
    height: 29,
    position: "absolute",
  },
  title: {
    left: 67,
    width: 226,
    height: 71,
  },
  developers1: {
    marginTop: 150,
  },
  developers: {
    top: "50%",
  },
  theme: {
    top: 449,
  },
  rateUs: {
    top: 387,
    textAlign: "center",
    color: Color.colorDimgray,
    fontFamily: FontFamily.openSansSemiBold,
    fontWeight: "600",
    lineHeight: 24,
    fontSize: FontSize.size_base,
  },
  share: {
    top: 325,
    left: 30,
    position: "absolute",
  },
  societyInfo: {
    top: 260,
  },
  profile: {
    top: 200,
  },
  header: {
    top: 0,
    width: 450,
    height: 178,
  },
  salviVazAdmin: {
    top: 59,
    right: 74,
    fontWeight: "800",
    fontFamily: FontFamily.openSansExtraBold,
    width: 179,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.white,
  },
  ertukengmailcom: {
    top: 82,
    left: 197,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.openSansRegular,
    width: 169,
    height: 24,
  },
  headerChild: {
    left: 84,
    width: 86,
    height: 72,
  },
  icon1: {
    maxWidth: "100%",
  },
  drawer: {
    left: "9.17%",
    top: "3.5%",
    right: "84.44%",
    bottom: "93.63%",
    width: "6.39%",
    height: "2.88%",
    position: "absolute",
  },
  adminmenu: {
    backgroundColor: Color.white,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default AdminMenu;
