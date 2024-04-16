import * as React from "react";
import { Button as RNEButton } from "@rneui/themed";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Menu = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.menu, styles.menuLayout]}>
      <Pressable
        style={[styles.signout, styles.sharePosition]}
        onPress={() => navigation.navigate("Logout")}
      >
        <View style={[styles.signoff, styles.signoffPosition]}>
          <Pressable
            style={[styles.signout2, styles.signoffPosition]}
            onPress={() => navigation.navigate("Logout")}
          >
            <RNEButton
              radius={5}
              iconPosition="left"
              type="solid"
              color="#4f4f4f"
              containerStyle={styles.vectorIconBtn}
              buttonStyle={styles.vectorIconBtn1}
            />
          </Pressable>
          <Pressable
            style={[styles.logout, styles.logoutPosition]}
            onPress={() => navigation.navigate("Logout")}
          >
            <Text style={styles.logout1}>Logout</Text>
          </Pressable>
        </View>
      </Pressable>
      <Pressable
        style={[styles.developers, styles.themePosition]}
        onPress={() => navigation.navigate("Developers")}
      >
        <Text style={styles.shareTypo}>Developers</Text>
      </Pressable>
      <Pressable
        style={[styles.profile, styles.themePosition]}
        onPress={() => navigation.navigate("Profile")}
      >
        <Text style={styles.shareTypo}>Profile</Text>
      </Pressable>
      <Pressable
        style={[styles.theme, styles.themePosition]}
        onPress={() => navigation.navigate("Theme")}
      >
        <Text style={styles.shareTypo}>Theme</Text>
      </Pressable>
      <Text style={[styles.rateUs, styles.shareTypo]}>Rate us</Text>
      <Text style={[styles.share, styles.shareTypo]}>Share</Text>
      <Pressable
        style={[styles.societyInfo, styles.themePosition]}
        onPress={() => navigation.navigate("SocietyInfo")}
      >
        <Text style={styles.shareTypo}>Society Info</Text>
      </Pressable>
      <View style={[styles.infoprofile, styles.logoutPosition]}>
        <Image
          style={[styles.infoprofile, styles.logoutPosition]}
          contentFit="cover"
          source={require("../assets/societyimg3.png")}
        />
        <View
          style={[styles.infoprofileheading, styles.infoprofileheadingLayout]}
        >
          <Image
            style={[
              styles.infoprofileheadingChild,
              styles.infoprofileheadingLayout,
            ]}
            contentFit="cover"
            source={require("../assets/ellipse-5.png")}
          />
          <Text style={[styles.salviVaz, styles.salviVazLayout]}>
            Salvi Vaz
          </Text>
          <Text style={[styles.ertukengmailcom, styles.salviVazLayout]}>
            ertuken@gmail.com
          </Text>
        </View>
      </View>
      <Pressable
        style={styles.drawer}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={[styles.icon, styles.menuLayout]}
          contentFit="cover"
          source={require("../assets/drawer4.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIconBtn: {
    left: "20%",
    right: "13.24%",
    top: "10.45%",
    bottom: "6.27%",
    position: "absolute",
  },
  vectorIconBtn1: {
    height: "83.28%",
    width: "66.76%",
  },
  menuLayout: {
    width: "100%",
    overflow: "hidden",
  },
  sharePosition: {
    left: 30,
    position: "absolute",
  },
  signoffPosition: {
    bottom: "0%",
    left: "50%",
    position: "absolute",
  },
  logoutPosition: {
    top: 0,
    left: 0,
  },
  themePosition: {
    left: 29,
    position: "absolute",
  },
  shareTypo: {
    color: Color.colorDimgray,
    textAlign: "center",
    fontFamily: FontFamily.openSansSemiBold,
    fontWeight: "600",
    lineHeight: 24,
    fontSize: FontSize.size_base,
  },
  infoprofileheadingLayout: {
    height: 71,
    position: "absolute",
  },
  salviVazLayout: {
    height: 24,
    textAlign: "left",
    color: Color.white,
    left: 91,
    lineHeight: 24,
    position: "absolute",
  },
  signout2: {
    height: "98.97%",
    marginLeft: 15.5,
    top: "1.03%",
    width: 34,
    left: "50%",
    overflow: "hidden",
  },
  logout1: {
    color: Color.colorOrange_100,
    textAlign: "center",
    fontFamily: FontFamily.openSansSemiBold,
    fontWeight: "600",
    lineHeight: 24,
    fontSize: FontSize.size_base,
  },
  logout: {
    position: "absolute",
  },
  signoff: {
    marginLeft: -48,
    top: "0%",
    width: 99,
    left: "50%",
    height: "100%",
  },
  signout: {
    top: 690,
    width: 102,
    height: 29,
  },
  developers: {
    top: 508,
  },
  profile: {
    top: 200,
  },
  theme: {
    top: 449,
  },
  rateUs: {
    top: 387,
    left: 29,
    position: "absolute",
  },
  share: {
    top: 325,
    left: 30,
    position: "absolute",
  },
  societyInfo: {
    top: 260,
  },
  infoprofile: {
    width: 450,
    height: 178,
    position: "absolute",
  },
  infoprofileheadingChild: {
    width: 68,
    top: 0,
    left: 0,
  },
  salviVaz: {
    top: 12,
    fontWeight: "800",
    fontFamily: FontFamily.openSansExtraBold,
    width: 103,
    fontSize: FontSize.size_base,
    height: 24,
    textAlign: "left",
    color: Color.white,
    left: 91,
  },
  ertukengmailcom: {
    top: 35,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.openSansRegular,
    width: 135,
  },
  infoprofileheading: {
    marginLeft: -138.2,
    top: 47,
    width: 283,
    left: "50%",
  },
  icon: {
    maxWidth: "100%",
    maxHeight: "100%",
    height: "100%",
    overflow: "hidden",
  },
  drawer: {
    left: "9.18%",
    top: "4.51%",
    right: "84.44%",
    bottom: "92.61%",
    width: "6.38%",
    height: "2.88%",
    position: "absolute",
  },
  menu: {
    backgroundColor: Color.white,
    flex: 1,
    height: 708,
    overflow: "hidden",
  },
});

export default Menu;
