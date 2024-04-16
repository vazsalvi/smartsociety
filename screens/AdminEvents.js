import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

const AdminEvents = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.adminevents, styles.iconLayout]}>
      <Pressable
        style={[styles.menubutton, styles.menubuttonLayout]}
        onPress={() => navigation.navigate("Adminhome")}
      >
        <Image
          style={[styles.menubuttonChild, styles.menuPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-13.png")}
        />
        <Text style={[styles.menu, styles.menuTypo]}>Menu</Text>
      </Pressable>
      <View style={[styles.frame, styles.frameFlexBox]}>
        <View style={styles.english}>
          <Text style={[styles.januaryRepublicDay, styles.eventsClr]}>
            26 January Republic Day
          </Text>
        </View>
        <Text style={[styles.theEventPreparation, styles.thePosition]}>
          The event preparation will be done...
        </Text>
      </View>
      <View style={[styles.frame1, styles.frameFlexBox]}>
        <View style={styles.englishShadowBox}>
          <Text style={[styles.januaryRepublicDay, styles.eventsClr]}>
            26 January Republic day
          </Text>
        </View>
        <Text style={[styles.theMainEvent, styles.thePosition]}>
          The main event will start at 4:00...
        </Text>
      </View>
      <View style={[styles.frame2, styles.frameFlexBox]}>
        <View style={styles.englishShadowBox}>
          <Text style={[styles.januaryRepublicDay, styles.eventsClr]}>
            26 January Republic day
          </Text>
        </View>
        <Text style={[styles.theMainEvent, styles.thePosition]}>
          It is advised for everyone to pay...
        </Text>
      </View>
      <View style={[styles.frame3, styles.frameFlexBox]}>
        <View style={styles.englishShadowBox}>
          <Text style={[styles.januaryRepublicDay, styles.eventsClr]}>
            26 January Republic day
          </Text>
        </View>
        <Text style={[styles.theMainEvent, styles.thePosition]}>
          It is advised for everyone to pay...
        </Text>
      </View>
      <Pressable
        style={[styles.addneweventbutton, styles.headerIconFlexBox]}
        onPress={() => navigation.navigate("AdminAddEvents")}
      >
        <Text style={[styles.addNewEvent, styles.menuTypo]}>Add new event</Text>
      </Pressable>
      <Text style={[styles.events, styles.eventsTypo]}>Events</Text>
      <ImageBackground
        style={[styles.headerIcon, styles.headerIconFlexBox]}
        resizeMode="cover"
        source={require("../assets/societyimg.png")}
      >
        <Text style={[styles.smartIndiaSociety, styles.eventsTypo]}>
          Smart India Society
        </Text>
      </ImageBackground>
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
    width: "100%",
    overflow: "hidden",
  },
  menubuttonLayout: {
    height: 28,
    width: 115,
  },
  menuPosition: {
    left: "50%",
    position: "absolute",
  },
  menuTypo: {
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
    lineHeight: 24,
  },
  frameFlexBox: {
    justifyContent: "flex-end",
    height: 85,
    width: 315,
    left: 21,
    alignItems: "center",
    position: "absolute",
    overflow: "hidden",
  },
  eventsClr: {
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
  },
  thePosition: {
    zIndex: 1,
    color: Color.colorDimgray,
    fontSize: FontSize.size_sm,
    left: 20,
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
    lineHeight: 24,
    position: "absolute",
  },
  headerIconFlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  eventsTypo: {
    textAlign: "center",
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    textTransform: "uppercase",
    lineHeight: 24,
    left: "50%",
    position: "absolute",
  },
  menubuttonChild: {
    marginLeft: -57.5,
    borderRadius: Border.br_xs,
    top: 0,
    height: 28,
    width: 115,
  },
  menu: {
    marginLeft: -22.5,
    top: 2,
    color: Color.white,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.openSansRegular,
    lineHeight: 24,
    left: "50%",
    position: "absolute",
  },
  menubutton: {
    top: 680,
    left: 122,
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
  januaryRepublicDay: {
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
    lineHeight: 24,
  },
  english: {
    paddingVertical: Padding.p_mini,
    zIndex: 0,
    paddingHorizontal: Padding.p_22xl,
    backgroundColor: Color.white,
    height: 85,
    width: 315,
    borderRadius: Border.br_xs,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
  },
  theEventPreparation: {
    top: 62,
    width: 268,
    height: 23,
  },
  frame: {
    top: 246,
  },
  englishShadowBox: {
    paddingVertical: 15,
    zIndex: 0,
    paddingHorizontal: Padding.p_22xl,
    backgroundColor: Color.white,
    height: 85,
    width: 315,
    borderRadius: Border.br_xs,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
  },
  theMainEvent: {
    top: 63,
    width: 278,
    height: 22,
  },
  frame1: {
    top: 341,
  },
  frame2: {
    top: 436,
  },
  frame3: {
    top: 531,
  },
  addNewEvent: {
    color: Color.white,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.openSansRegular,
    lineHeight: 24,
  },
  addneweventbutton: {
    top: 162,
    left: 77,
    backgroundColor: Color.colorOrange_200,
    width: 207,
    height: 50,
    justifyContent: "center",
    borderRadius: Border.br_xs,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
  },
  events: {
    marginLeft: -30,
    top: 114,
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
  },
  smartIndiaSociety: {
    marginLeft: -68,
    top: 22,
    fontSize: FontSize.size_xs,
    zIndex: 0,
    color: Color.white,
  },
  headerIcon: {
    left: 0,
    width: 450,
    height: 65,
    flexDirection: "row",
    paddingHorizontal: 33,
    paddingTop: Padding.p_3xl,
    paddingBottom: 19,
    top: 0,
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
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
  adminevents: {
    backgroundColor: Color.colorPapayawhip,
    flex: 1,
    height: 800,
    overflow: "hidden",
  },
});

export default AdminEvents;
