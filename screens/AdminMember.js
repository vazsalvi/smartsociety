import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Border, FontSize, Color } from "../GlobalStyles";

const AdminMember = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.adminmember, styles.iconLayout]}>
      <Pressable
        style={[styles.menubutton, styles.menubuttonLayout]}
        onPress={() => navigation.navigate("Adminhome")}
      >
        <Image
          style={[styles.menubuttonChild, styles.menubuttonLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-13.png")}
        />
        <Text style={styles.back}>Back</Text>
      </Pressable>
      <View style={[styles.member1, styles.memberLayout]}>
        <Image
          style={[styles.member1Child, styles.headerPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-53.png")}
        />
        <Text style={[styles.davidJones, styles.roomNo401Position]}>
          David jones
        </Text>
        <Text style={[styles.roomNo401, styles.roomNo401Position]}>
          Room no: 401
        </Text>
      </View>
      <View style={[styles.member11, styles.memberLayout]}>
        <Image
          style={[styles.member1Child, styles.headerPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-53.png")}
        />
        <Text style={[styles.davidJones, styles.roomNo401Position]}>
          David jones
        </Text>
        <Text style={[styles.roomNo401, styles.roomNo401Position]}>
          Room no: 401
        </Text>
      </View>
      <View style={[styles.member12, styles.memberLayout]}>
        <Image
          style={[styles.member1Child, styles.headerPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-53.png")}
        />
        <Text style={[styles.davidJones, styles.roomNo401Position]}>
          David jones
        </Text>
        <Text style={[styles.roomNo401, styles.roomNo401Position]}>
          Room no: 401
        </Text>
      </View>
      <View style={[styles.member2, styles.memberLayout]}>
        <Image
          style={[styles.member1Child, styles.headerPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-53.png")}
        />
        <Text style={[styles.davidJones, styles.roomNo401Position]}>
          Rahul Murgan
        </Text>
        <Text style={[styles.roomNo401, styles.roomNo401Position]}>
          Room no :402
        </Text>
      </View>
      <View style={[styles.member21, styles.memberLayout]}>
        <Image
          style={[styles.member1Child, styles.headerPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-53.png")}
        />
        <Text style={[styles.davidJones, styles.roomNo401Position]}>
          Rahul Murgan
        </Text>
        <Text style={[styles.roomNo401, styles.roomNo401Position]}>
          Room no :402
        </Text>
      </View>
      <View style={[styles.member3, styles.memberLayout]}>
        <Image
          style={[styles.member1Child, styles.headerPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-53.png")}
        />
        <Text style={[styles.davidJones, styles.roomNo401Position]}>
          Suraj Kumar
        </Text>
        <Text style={[styles.roomNo401, styles.roomNo401Position]}>
          Room no: 403
        </Text>
      </View>
      <View style={[styles.member31, styles.memberLayout]}>
        <Image
          style={[styles.member1Child, styles.headerPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-53.png")}
        />
        <Text style={[styles.davidJones, styles.roomNo401Position]}>
          Suraj Kumar
        </Text>
        <Text style={[styles.roomNo401, styles.roomNo401Position]}>
          Room no: 403
        </Text>
      </View>
      <Text style={[styles.members, styles.membersTypo]}>members</Text>
      <View style={[styles.header, styles.headerPosition]}>
        <Image
          style={[styles.header, styles.headerPosition]}
          contentFit="cover"
          source={require("../assets/societyimg.png")}
        />
        <Text style={[styles.smartIndiaSociety, styles.membersTypo]}>
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
  menubuttonLayout: {
    height: 28,
    width: 115,
    left: "50%",
    position: "absolute",
  },
  memberLayout: {
    width: 206,
    left: 34,
    height: 48,
    position: "absolute",
  },
  headerPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  roomNo401Position: {
    left: 64,
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
    lineHeight: 24,
    position: "absolute",
  },
  membersTypo: {
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
  },
  back: {
    marginLeft: -15.5,
    top: 2,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
    lineHeight: 24,
    color: Color.white,
    left: "50%",
    position: "absolute",
  },
  menubutton: {
    marginLeft: -58,
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
  member1Child: {
    width: 48,
    height: 48,
  },
  davidJones: {
    color: Color.blackPrimary,
    fontSize: FontSize.size_base,
    top: 0,
  },
  roomNo401: {
    top: 24,
    fontSize: FontSize.size_sm,
    color: Color.greyPrimary,
  },
  member1: {
    top: 187,
    height: 48,
  },
  member11: {
    top: 400,
    height: 48,
  },
  member12: {
    top: 613,
    height: 48,
  },
  member2: {
    top: 260,
    height: 48,
  },
  member21: {
    top: 473,
    height: 48,
  },
  member3: {
    top: 333,
    height: 48,
  },
  member31: {
    top: 546,
    height: 48,
  },
  members: {
    marginLeft: -40,
    top: 114,
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
  },
  header: {
    width: 450,
    height: 65,
  },
  smartIndiaSociety: {
    marginLeft: -85,
    top: 22,
    fontSize: FontSize.size_xs,
    width: 169,
    color: Color.white,
    textAlign: "center",
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
  adminmember: {
    backgroundColor: Color.colorPapayawhip,
    flex: 1,
    height: 800,
  },
});

export default AdminMember;
