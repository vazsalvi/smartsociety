import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Adminhome = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.adminhome}>
      <Pressable
        style={[styles.member, styles.memberLayout]}
        onPress={() => navigation.navigate("AdminMember")}
      >
        <View style={styles.childShadowBox} />
        <Text style={[styles.members, styles.membersTypo]}>Members</Text>
        <Image
          style={[styles.meteoconslightningbolt0Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/meteoconslightningbolt08.png")}
        />
      </Pressable>
      <View style={[styles.maintenance, styles.memberLayout]}>
        <View style={styles.childShadowBox} />
        <Text style={[styles.maintenance1, styles.membersTypo]}>
          Maintenance
        </Text>
        <Image
          style={[styles.meteoconslightningbolt0Icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/meteoconslightningbolt08.png")}
        />
      </View>
      <Pressable
        style={[styles.voteup, styles.voteupPosition]}
        onPress={() => navigation.navigate("AdminVote")}
      >
        <View style={styles.childShadowBox} />
        <Text style={[styles.members, styles.membersTypo]}>Vote Up</Text>
        <Image
          style={[styles.meteoconslightningbolt0Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/meteoconslightningbolt08.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.emergencey, styles.voteupPosition]}
        onPress={() => navigation.navigate("AdminEmergency1")}
      >
        <View style={styles.childShadowBox} />
        <Text style={[styles.emergency, styles.events1Typo]}>Emergency</Text>
        <Image
          style={[styles.meteoconslightningbolt0Icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/meteoconslightningbolt08.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.events, styles.eventsPosition]}
        onPress={() => navigation.navigate("AdminEvents")}
      >
        <View style={styles.childShadowBox} />
        <Text style={[styles.events1, styles.events1Typo]}>Events</Text>
        <Image
          style={[styles.meteoconslightningbolt0Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/meteoconslightningbolt08.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.complaints, styles.eventsPosition]}
        onPress={() => navigation.navigate("AdminComplaints")}
      >
        <View style={styles.childShadowBox} />
        <Text style={[styles.complaints1, styles.membersTypo]}>Complaints</Text>
        <Image
          style={[styles.meteoconslightningbolt0Icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/meteoconslightningbolt08.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.notice, styles.billsPosition]}
        onPress={() => navigation.navigate("AdminNotice")}
      >
        <View style={styles.childShadowBox} />
        <Text style={[styles.members, styles.membersTypo]}>Notice</Text>
        <Image
          style={[styles.meteoconslightningbolt0Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/meteoconslightningbolt08.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.bills, styles.billsPosition]}
        onPress={() => navigation.navigate("AdminBills")}
      >
        <View style={styles.childShadowBox} />
        <Text style={[styles.complaints1, styles.membersTypo]}>Bills</Text>
        <Image
          style={[styles.meteoconslightningbolt0Icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/meteoconslightningbolt08.png")}
        />
      </Pressable>
      <Text style={styles.signedInAs}>Signed in as Admin</Text>
      <View style={styles.header}>
        <Image
          style={styles.header}
          contentFit="cover"
          source={require("../assets/societyimg3.png")}
        />
        <Text style={[styles.smartIndiaSociety, styles.smartTypo]}>
          Smart India Society
        </Text>
        <Text style={[styles.smartIndiaSociety1, styles.smartTypo]}>
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
  memberLayout: {
    height: 70,
    width: 150,
    top: 593,
    position: "absolute",
  },
  membersTypo: {
    textAlign: "center",
    color: Color.colorDimgray,
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_base,
    lineHeight: 24,
    top: 23,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  voteupPosition: {
    top: 480,
    height: 70,
    width: 150,
    position: "absolute",
  },
  events1Typo: {
    left: 33,
    textAlign: "center",
    color: Color.colorDimgray,
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  eventsPosition: {
    top: 367,
    height: 70,
    width: 150,
    position: "absolute",
  },
  billsPosition: {
    top: 254,
    height: 70,
    width: 150,
    position: "absolute",
  },
  smartTypo: {
    color: Color.white,
    textTransform: "uppercase",
    left: "50%",
    textAlign: "center",
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    lineHeight: 24,
    position: "absolute",
  },
  childShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    backgroundColor: Color.white,
    borderRadius: Border.br_2xl,
    left: 0,
    top: 0,
    height: 70,
    width: 150,
    position: "absolute",
  },
  members: {
    left: 32,
  },
  meteoconslightningbolt0Icon: {
    right: "85.33%",
    left: "8%",
    bottom: "35.71%",
    top: "37.14%",
    width: "6.67%",
    height: "27.14%",
    maxWidth: "100%",
    position: "absolute",
  },
  member: {
    left: 188,
  },
  maintenance1: {
    left: 30,
  },
  meteoconslightningbolt0Icon1: {
    right: "84.67%",
    left: "8.67%",
    bottom: "35.71%",
    top: "37.14%",
    width: "6.67%",
    height: "27.14%",
    maxWidth: "100%",
    position: "absolute",
  },
  maintenance: {
    left: 22,
  },
  voteup: {
    left: 188,
  },
  emergency: {
    top: 27,
    lineHeight: 16,
    width: 98,
  },
  emergencey: {
    left: 22,
  },
  events1: {
    lineHeight: 24,
    top: 23,
    left: 33,
  },
  events: {
    left: 188,
  },
  complaints1: {
    left: 34,
  },
  complaints: {
    left: 22,
  },
  notice: {
    left: 188,
  },
  bills: {
    left: 22,
  },
  signedInAs: {
    marginLeft: -75,
    top: 195,
    fontSize: FontSize.size_mini,
    color: Color.colorGray_100,
    textAlign: "left",
    left: "50%",
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    lineHeight: 24,
    position: "absolute",
  },
  header: {
    width: 450,
    height: 178,
    left: 0,
    top: 0,
    position: "absolute",
  },
  smartIndiaSociety: {
    marginLeft: -219.1,
    top: 90,
    fontSize: FontSize.size_5xl,
    width: 338,
  },
  smartIndiaSociety1: {
    marginLeft: -135.4,
    top: 28,
    fontSize: FontSize.size_xs,
    width: 169,
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    width: "100%",
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
  adminhome: {
    backgroundColor: Color.colorPapayawhip,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default Adminhome;
