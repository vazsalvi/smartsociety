import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.home}>
      <View style={styles.headerWrapper}>
        <View style={styles.headerWrapper}>
          <Image
            style={styles.headerWrapper}
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
      </View>
      <View style={[styles.memberWrapper, styles.wrapperPosition3]}>
        <Pressable
          style={[styles.member, styles.memberChildLayout]}
          onPress={() => navigation.navigate("Member1")}
        >
          <View style={[styles.memberChild, styles.childShadowBox]} />
          <Text style={[styles.members, styles.membersTypo]}>Members</Text>
          <Image
            style={[styles.vectorIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/meteoconslightningbolt08.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.maintenanceWrapper, styles.wrapperPosition3]}>
        <View style={[styles.member, styles.memberChildLayout]}>
          <View style={[styles.maintenanceChild, styles.childShadowBox]} />
          <Text style={[styles.maintenance1, styles.membersTypo]}>
            Maintenance
          </Text>
          <Image
            style={[styles.vectorIcon1, styles.vectorIconPosition]}
            contentFit="cover"
            source={require("../assets/meteoconslightningbolt08.png")}
          />
        </View>
      </View>
      <View style={[styles.voteupWrapper, styles.wrapperPosition2]}>
        <Pressable
          style={[styles.voteup, styles.memberChildLayout]}
          onPress={() => navigation.navigate("Events1")}
        >
          <View style={[styles.voteupChild, styles.childShadowBox]} />
          <Text style={[styles.members, styles.membersTypo]}>Vote Up</Text>
          <Image
            style={[styles.vectorIcon2, styles.vectorIconLayout1]}
            contentFit="cover"
            source={require("../assets/meteoconslightningbolt08.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.emergenceyWrapper, styles.wrapperPosition2]}>
        <Pressable
          style={[styles.voteup, styles.memberChildLayout]}
          onPress={() => navigation.navigate("Emergency")}
        >
          <View style={[styles.emergenceyChild, styles.childShadowBox]} />
          <Text style={[styles.emergency, styles.events1Typo]}>Emergency</Text>
          <Image
            style={[styles.vectorIcon3, styles.vectorIconLayout1]}
            contentFit="cover"
            source={require("../assets/meteoconslightningbolt08.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.eventsWrapper, styles.wrapperPosition1]}>
        <Pressable
          style={[styles.events, styles.memberChildLayout]}
          onPress={() => navigation.navigate("Events")}
        >
          <View style={[styles.eventsChild, styles.childShadowBox]} />
          <Text style={[styles.events1, styles.events1Typo]}>Events</Text>
          <Image
            style={[styles.vectorIcon4, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/meteoconslightningbolt08.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.complaintsWrapper, styles.wrapperPosition1]}>
        <Pressable
          style={[styles.events, styles.memberChildLayout]}
          onPress={() => navigation.navigate("COMPLAINTS")}
        >
          <View style={[styles.complaintsChild, styles.childShadowBox]} />
          <Text style={[styles.complaints1, styles.membersTypo]}>
            Complaints
          </Text>
          <Image
            style={[styles.vectorIcon5, styles.vectorIconPosition]}
            contentFit="cover"
            source={require("../assets/vector1.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.noticeWrapper, styles.wrapperPosition]}>
        <Pressable
          style={[styles.notice, styles.memberChildLayout]}
          onPress={() => navigation.navigate("Notice")}
        >
          <View style={[styles.noticeChild, styles.childShadowBox]} />
          <Text style={[styles.members, styles.membersTypo]}>Notice</Text>
          <Image
            style={[styles.vectorIcon6, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/meteoconslightningbolt08.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.billsWrapper, styles.wrapperPosition]}>
        <Pressable
          style={[styles.bills, styles.billsPosition]}
          onPress={() => navigation.navigate("Bills")}
        >
          <View style={[styles.billsChild, styles.billsPosition]} />
          <Text style={[styles.complaints1, styles.membersTypo]}>Bills</Text>
          <Image
            style={[styles.vectorIcon7, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/meteoconslightningbolt08.png")}
          />
        </Pressable>
      </View>
      <Pressable
        style={styles.drawer}
        onPress={() => navigation.navigate("Menu")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/drawer12.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  smartTypo: {
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    textTransform: "uppercase",
    lineHeight: 24,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  wrapperPosition3: {
    height: 112,
    width: 150,
    marginTop: 167.3,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  memberChildLayout: {
    height: 70,
    width: 150,
    left: 0,
    position: "absolute",
  },
  childShadowBox: {
    backgroundColor: Color.white,
    borderRadius: Border.br_2xl,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
  },
  membersTypo: {
    color: Color.colorDimgray,
    fontSize: FontSize.size_base,
    top: 23,
    textAlign: "center",
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    lineHeight: 24,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  vectorIconPosition: {
    left: "8.67%",
    right: "84.67%",
  },
  wrapperPosition2: {
    height: 99,
    marginTop: 67.3,
    width: 150,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  vectorIconLayout1: {
    bottom: "35.71%",
    top: "37.14%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "6.67%",
    height: "27.14%",
    position: "absolute",
    overflow: "hidden",
  },
  events1Typo: {
    left: 33,
    color: Color.colorDimgray,
    fontSize: FontSize.size_base,
    textAlign: "center",
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  wrapperPosition1: {
    height: 86,
    width: 150,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  wrapperPosition: {
    height: 73,
    marginTop: -132.7,
    width: 150,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  vectorIconLayout: {
    bottom: "32.86%",
    top: "40%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "6.67%",
    height: "27.14%",
    position: "absolute",
    overflow: "hidden",
  },
  billsPosition: {
    marginLeft: -75,
    height: 70,
    width: 150,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  headerWrapper: {
    width: 450,
    height: 178,
    left: 0,
    top: 0,
    position: "absolute",
  },
  smartIndiaSociety: {
    marginTop: 1,
    marginLeft: -208.4,
    fontSize: FontSize.size_5xl,
    width: 338,
  },
  smartIndiaSociety1: {
    marginTop: -61,
    marginLeft: -124.6,
    fontSize: FontSize.size_xs,
    width: 169,
  },
  memberChild: {
    height: 70,
    width: 150,
    left: 0,
    position: "absolute",
    top: 0,
    borderRadius: Border.br_2xl,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
  },
  members: {
    left: 32,
  },
  vectorIcon: {
    left: "9.33%",
    right: "84%",
    bottom: "37.14%",
    top: "35.71%",
    maxWidth: "100%",
    width: "6.67%",
    height: "27.14%",
    position: "absolute",
  },
  member: {
    top: 42,
  },
  memberWrapper: {
    marginLeft: 6,
  },
  maintenanceChild: {
    height: 70,
    width: 150,
    left: 0,
    position: "absolute",
    top: 0,
    borderRadius: Border.br_2xl,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
  },
  maintenance1: {
    left: 30,
  },
  vectorIcon1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    bottom: "37.14%",
    top: "35.71%",
    width: "6.67%",
    height: "27.14%",
    position: "absolute",
  },
  maintenanceWrapper: {
    marginLeft: -160,
  },
  voteupChild: {
    height: 70,
    width: 150,
    left: 0,
    position: "absolute",
    top: 0,
    borderRadius: Border.br_2xl,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
  },
  vectorIcon2: {
    left: "9.33%",
    right: "84%",
  },
  voteup: {
    top: 29,
  },
  voteupWrapper: {
    marginLeft: 6,
  },
  emergenceyChild: {
    height: 70,
    width: 150,
    left: 0,
    position: "absolute",
    top: 0,
    borderRadius: Border.br_2xl,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
  },
  emergency: {
    top: 27,
    lineHeight: 16,
    width: 98,
  },
  vectorIcon3: {
    left: "8.67%",
    right: "84.67%",
  },
  emergenceyWrapper: {
    marginLeft: -160,
  },
  eventsChild: {
    height: 70,
    width: 150,
    left: 0,
    position: "absolute",
    top: 0,
    borderRadius: Border.br_2xl,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
  },
  events1: {
    top: 23,
    left: 33,
    lineHeight: 24,
  },
  vectorIcon4: {
    top: "38.57%",
    bottom: "34.29%",
    left: "9.33%",
    right: "84%",
    width: "6.67%",
    maxWidth: "100%",
    position: "absolute",
    height: "27.14%",
  },
  events: {
    top: 16,
  },
  eventsWrapper: {
    marginTop: -32.7,
    marginLeft: 6,
  },
  complaintsChild: {
    height: 70,
    width: 150,
    left: 0,
    position: "absolute",
    top: 0,
    borderRadius: Border.br_2xl,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
  },
  complaints1: {
    left: 34,
  },
  vectorIcon5: {
    height: "27.29%",
    top: "38.71%",
    bottom: "34%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    width: "6.67%",
    position: "absolute",
  },
  complaintsWrapper: {
    marginTop: -33,
    marginLeft: -160,
  },
  noticeChild: {
    height: 70,
    width: 150,
    left: 0,
    position: "absolute",
    top: 0,
    borderRadius: Border.br_2xl,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
  },
  vectorIcon6: {
    left: "9.33%",
    right: "84%",
  },
  notice: {
    top: 3,
  },
  noticeWrapper: {
    marginLeft: 6,
  },
  billsChild: {
    marginTop: -35,
    backgroundColor: Color.white,
    borderRadius: Border.br_2xl,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
  },
  vectorIcon7: {
    left: "8.67%",
    right: "84.67%",
  },
  bills: {
    marginTop: -33.6,
  },
  billsWrapper: {
    marginLeft: -160,
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    width: "100%",
  },
  drawer: {
    left: "6.4%",
    top: "3.5%",
    right: "85.55%",
    bottom: "95%",
    width: "8.05%",
    height: "1.5%",
    position: "absolute",
  },
  home: {
    backgroundColor: Color.colorPapayawhip,
    flex: 1,
    height: 708,
    overflow: "hidden",
    width: "100%",
  },
});

export default Home;
