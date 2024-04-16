import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const Member1 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.member, styles.iconLayout]}>
      <Image
        style={styles.headerIcon}
        contentFit="cover"
        source={require("../assets/header.png")}
      />
      <View style={[styles.member1, styles.memberLayout]}>
        <Image
          style={[styles.member1Child, styles.memberLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-53.png")}
        />
        <Text style={[styles.davidJones, styles.home1Typo]}>David jones</Text>
        <Text style={[styles.roomNo401, styles.home1Typo]}>Room no: 401</Text>
      </View>
      <View style={[styles.member11, styles.memberPosition1]}>
        <Image
          style={[styles.member1Child, styles.memberLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-53.png")}
        />
        <Text style={[styles.davidJones, styles.home1Typo]}>David jones</Text>
        <Text style={[styles.roomNo401, styles.home1Typo]}>Room no: 401</Text>
      </View>
      <View style={[styles.member12, styles.memberPosition]}>
        <Image
          style={[styles.member1Child, styles.memberLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-53.png")}
        />
        <Text style={[styles.davidJones, styles.home1Typo]}>David jones</Text>
        <Text style={[styles.roomNo401, styles.home1Typo]}>Room no: 401</Text>
      </View>
      <View style={[styles.member2, styles.memberLayout]}>
        <Image
          style={[styles.member1Child, styles.memberLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-53.png")}
        />
        <Text style={[styles.davidJones, styles.home1Typo]}>Rahul Murgan</Text>
        <Text style={[styles.roomNo401, styles.home1Typo]}>Room no :402</Text>
      </View>
      <View style={[styles.member21, styles.memberPosition1]}>
        <Image
          style={[styles.member1Child, styles.memberLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-53.png")}
        />
        <Text style={[styles.davidJones, styles.home1Typo]}>Rahul Murgan</Text>
        <Text style={[styles.roomNo401, styles.home1Typo]}>Room no :402</Text>
      </View>
      <View style={[styles.member22, styles.memberPosition]}>
        <Image
          style={[styles.member1Child, styles.memberLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-53.png")}
        />
        <Text style={[styles.davidJones, styles.home1Typo]}>Rahul Murgan</Text>
        <Text style={[styles.roomNo401, styles.home1Typo]}>Room no :402</Text>
      </View>
      <View style={[styles.member3, styles.memberLayout]}>
        <Image
          style={[styles.member1Child, styles.memberLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-53.png")}
        />
        <Text style={[styles.davidJones, styles.home1Typo]}>Suraj Kumar</Text>
        <Text style={[styles.roomNo401, styles.home1Typo]}>Room no: 403</Text>
      </View>
      <View style={[styles.member31, styles.memberPosition1]}>
        <Image
          style={[styles.member1Child, styles.memberLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-53.png")}
        />
        <Text style={[styles.davidJones, styles.home1Typo]}>Suraj Kumar</Text>
        <Text style={[styles.roomNo401, styles.home1Typo]}>Room no: 403</Text>
      </View>
      <Text style={[styles.members, styles.homePosition]}>members</Text>
      <View style={[styles.menureturnbutton, styles.menureturnbuttonLayout]}>
        <View
          style={[styles.menureturnbuttonChild, styles.menureturnbuttonLayout]}
        />
        <Pressable
          style={[styles.home, styles.homePosition]}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={[styles.home1, styles.home1Typo]}>Home</Text>
        </Pressable>
      </View>
      <Pressable
        style={styles.drawer}
        onPress={() => navigation.navigate("Menu")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/drawer5.png")}
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
  memberLayout: {
    height: 48,
    position: "absolute",
  },
  home1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
    lineHeight: 24,
  },
  memberPosition1: {
    left: 35,
    height: 48,
    width: 206,
    position: "absolute",
  },
  memberPosition: {
    left: 33,
    height: 48,
    width: 206,
    position: "absolute",
  },
  homePosition: {
    left: "50%",
    position: "absolute",
  },
  menureturnbuttonLayout: {
    height: 28,
    width: 115,
    left: "50%",
    position: "absolute",
  },
  headerIcon: {
    top: -7,
    width: 476,
    height: 65,
    left: 0,
    position: "absolute",
  },
  member1Child: {
    width: 48,
    top: 0,
    left: 0,
  },
  davidJones: {
    color: Color.blackPrimary,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.openSansRegular,
    left: 64,
    top: 0,
    position: "absolute",
  },
  roomNo401: {
    top: 24,
    fontSize: FontSize.size_sm,
    color: Color.greyPrimary,
    left: 64,
    fontFamily: FontFamily.openSansRegular,
    position: "absolute",
  },
  member1: {
    top: 115,
    width: 206,
    left: 37,
    height: 48,
  },
  member11: {
    top: 334,
  },
  member12: {
    top: 553,
  },
  member2: {
    top: 188,
    width: 206,
    left: 37,
    height: 48,
  },
  member21: {
    top: 407,
  },
  member22: {
    top: 626,
  },
  member3: {
    top: 261,
    width: 206,
    left: 37,
    height: 48,
  },
  member31: {
    top: 480,
  },
  members: {
    marginLeft: -40,
    top: 70,
    textTransform: "uppercase",
    fontWeight: "800",
    fontFamily: FontFamily.openSansExtraBold,
    color: Color.colorBlack,
    textAlign: "center",
    lineHeight: 24,
    left: "50%",
    fontSize: FontSize.size_base,
  },
  menureturnbuttonChild: {
    marginLeft: -57.5,
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorOrange_200,
    top: 0,
  },
  home1: {
    marginLeft: -20.5,
    fontSize: FontSize.size_mini,
    color: Color.white,
  },
  home: {
    top: 2,
  },
  menureturnbutton: {
    marginLeft: -46,
    top: 700,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  drawer: {
    left: "9.18%",
    top: "2.63%",
    right: "82.77%",
    bottom: "95.88%",
    width: "8.05%",
    height: "1.5%",
    position: "absolute",
  },
  member: {
    backgroundColor: Color.colorPapayawhip,
    flex: 1,
    height: 708,
  },
});

export default Member1;
