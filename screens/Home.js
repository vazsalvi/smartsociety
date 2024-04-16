import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.home}>
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
        style={[styles.member, styles.memberLayout]}
        onPress={() => navigation.navigate("Member1")}
      >
        <View style={styles.childShadowBox3} />
        <Text style={[styles.members, styles.voteUpTypo]}>Members</Text>
        <View
          style={[
            styles.meteoconslightningbolt0,
            styles.meteoconslightningboltPosition4,
          ]}
        />
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/meteoconslightningbolt08.png")}
        />
      </Pressable>
      <View style={[styles.maintenance, styles.memberLayout]}>
        <View style={styles.childShadowBox3} />
        <Text style={[styles.maintenance1, styles.voteUpTypo]}>
          Maintenance
        </Text>
        <View
          style={[
            styles.meteoconslightningbolt01,
            styles.meteoconslightningboltPosition3,
          ]}
        />
        <Image
          style={[styles.vectorIcon1, styles.vectorIconPosition]}
          contentFit="cover"
          source={require("../assets/meteoconslightningbolt08.png")}
        />
      </View>
      <Pressable
        style={[styles.voteup, styles.voteupLayout]}
        onPress={() => navigation.navigate("Events1")}
      >
        <View style={styles.childShadowBox2} />
        <Text style={[styles.voteUp, styles.voteUpTypo]}>Vote Up</Text>
        <View
          style={[
            styles.meteoconslightningbolt02,
            styles.meteoconslightningboltPosition2,
          ]}
        />
        <Image
          style={[styles.vectorIcon2, styles.vectorIconLayout2]}
          contentFit="cover"
          source={require("../assets/meteoconslightningbolt08.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.emergencey, styles.voteupLayout]}
        onPress={() => navigation.navigate("Emergency")}
      >
        <View style={styles.childShadowBox2} />
        <Text style={[styles.emergency, styles.voteUpTypo]}>Emergency</Text>
        <View
          style={[
            styles.meteoconslightningbolt03,
            styles.meteoconslightningboltPosition2,
          ]}
        />
        <Image
          style={[styles.vectorIcon3, styles.vectorIconLayout2]}
          contentFit="cover"
          source={require("../assets/meteoconslightningbolt08.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.events, styles.eventsLayout]}
        onPress={() => navigation.navigate("Events")}
      >
        <View style={styles.childShadowBox1} />
        <Text style={[styles.events1, styles.events1Typo]}>Events</Text>
        <View
          style={[
            styles.meteoconslightningbolt04,
            styles.meteoconslightningboltPosition1,
          ]}
        />
        <Image
          style={[styles.vectorIcon4, styles.vectorIconLayout1]}
          contentFit="cover"
          source={require("../assets/meteoconslightningbolt08.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.complaints, styles.eventsLayout]}
        onPress={() => navigation.navigate("COMPLAINTS")}
      >
        <View style={styles.childShadowBox1} />
        <Text style={[styles.complaints1, styles.events1Typo]}>Complaints</Text>
        <View
          style={[
            styles.meteoconslightningbolt05,
            styles.meteoconslightningboltPosition1,
          ]}
        />
        <Image
          style={[styles.vectorIcon5, styles.vectorIconLayout1]}
          contentFit="cover"
          source={require("../assets/meteoconslightningbolt08.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.notice, styles.billsLayout]}
        onPress={() => navigation.navigate("Notice")}
      >
        <View style={styles.childShadowBox} />
        <Text style={[styles.notice1, styles.bills1Typo]}>Notice</Text>
        <View
          style={[
            styles.meteoconslightningbolt06,
            styles.meteoconslightningboltPosition,
          ]}
        />
        <Image
          style={[styles.vectorIcon6, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/meteoconslightningbolt08.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.bills, styles.billsLayout]}
        onPress={() => navigation.navigate("Bills")}
      >
        <View style={styles.childShadowBox} />
        <Text style={[styles.bills1, styles.bills1Typo]}>Bills</Text>
        <View
          style={[
            styles.meteoconslightningbolt07,
            styles.meteoconslightningboltPosition,
          ]}
        />
        <Image
          style={[styles.vectorIcon7, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/meteoconslightningbolt08.png")}
        />
      </Pressable>
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
    left: "50%",
    lineHeight: 24,
    position: "absolute",
  },
  memberLayout: {
    height: 112,
    width: 150,
    top: 521,
    position: "absolute",
  },
  voteUpTypo: {
    color: Color.colorDimgray,
    fontSize: FontSize.size_base,
    textAlign: "center",
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  meteoconslightningboltPosition4: {
    left: "9.47%",
    right: "83.8%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  meteoconslightningboltPosition3: {
    left: "8.93%",
    right: "84.33%",
  },
  vectorIconPosition: {
    left: "8.67%",
    right: "84.67%",
  },
  voteupLayout: {
    height: 99,
    top: 421,
    width: 150,
    position: "absolute",
  },
  meteoconslightningboltPosition2: {
    bottom: "82.98%",
    height: "17.02%",
    top: "0%",
    width: "6.73%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconLayout2: {
    bottom: "25.33%",
    top: "55.42%",
    height: "19.25%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "6.67%",
    position: "absolute",
    overflow: "hidden",
  },
  eventsLayout: {
    height: 86,
    top: 321,
    width: 150,
    position: "absolute",
  },
  events1Typo: {
    top: 39,
    color: Color.colorDimgray,
    fontSize: FontSize.size_base,
    textAlign: "center",
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    lineHeight: 24,
    position: "absolute",
  },
  meteoconslightningboltPosition1: {
    bottom: "80.4%",
    height: "19.6%",
    top: "0%",
    width: "6.73%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconLayout1: {
    bottom: "28%",
    top: "49.82%",
    height: "22.17%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "6.67%",
    position: "absolute",
    overflow: "hidden",
  },
  billsLayout: {
    height: 73,
    top: 221,
    width: 150,
    position: "absolute",
  },
  bills1Typo: {
    top: 26,
    color: Color.colorDimgray,
    fontSize: FontSize.size_base,
    textAlign: "center",
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    lineHeight: 24,
    position: "absolute",
  },
  meteoconslightningboltPosition: {
    bottom: "76.92%",
    height: "23.08%",
    top: "0%",
    width: "6.73%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconLayout: {
    bottom: "31.59%",
    top: "42.31%",
    height: "26.1%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "6.67%",
    position: "absolute",
    overflow: "hidden",
  },
  header: {
    top: 0,
    width: 450,
    height: 178,
    left: 0,
    position: "absolute",
  },
  smartIndiaSociety: {
    marginLeft: -208.4,
    top: 90,
    fontSize: FontSize.size_5xl,
    width: 338,
  },
  smartIndiaSociety1: {
    marginLeft: -124.6,
    top: 28,
    fontSize: FontSize.size_xs,
    width: 169,
  },
  childShadowBox3: {
    height: 70,
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
    top: 42,
    width: 150,
    left: 0,
    position: "absolute",
  },
  members: {
    left: 32,
    top: 65,
    fontSize: FontSize.size_base,
    lineHeight: 24,
  },
  meteoconslightningbolt0: {
    bottom: "84.96%",
    top: "0%",
    width: "6.73%",
    height: "15.04%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon: {
    left: "9.33%",
    right: "84%",
    bottom: "23.28%",
    top: "59.71%",
    width: "6.67%",
    height: "17.01%",
    maxWidth: "100%",
    position: "absolute",
  },
  member: {
    left: 188,
  },
  maintenance1: {
    left: 30,
    top: 65,
    fontSize: FontSize.size_base,
    lineHeight: 24,
  },
  meteoconslightningbolt01: {
    bottom: "84.96%",
    top: "0%",
    width: "6.73%",
    height: "15.04%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    bottom: "23.28%",
    top: "59.71%",
    width: "6.67%",
    height: "17.01%",
    position: "absolute",
  },
  maintenance: {
    left: 22,
  },
  childShadowBox2: {
    top: 29,
    height: 70,
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
    width: 150,
    left: 0,
    position: "absolute",
  },
  voteUp: {
    top: 52,
    left: 32,
    lineHeight: 24,
    fontSize: FontSize.size_base,
  },
  meteoconslightningbolt02: {
    left: "9.47%",
    right: "83.8%",
  },
  vectorIcon2: {
    left: "9.33%",
    right: "84%",
  },
  voteup: {
    left: 188,
  },
  emergency: {
    top: 56,
    lineHeight: 16,
    width: 98,
    left: 33,
  },
  meteoconslightningbolt03: {
    left: "8.93%",
    right: "84.33%",
  },
  vectorIcon3: {
    left: "8.67%",
    right: "84.67%",
  },
  emergencey: {
    left: 22,
  },
  childShadowBox1: {
    top: 16,
    height: 70,
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
    width: 150,
    left: 0,
    position: "absolute",
  },
  events1: {
    left: 33,
  },
  meteoconslightningbolt04: {
    left: "9.47%",
    right: "83.8%",
  },
  vectorIcon4: {
    left: "9.33%",
    right: "84%",
  },
  events: {
    left: 188,
  },
  complaints1: {
    left: 34,
  },
  meteoconslightningbolt05: {
    left: "8.93%",
    right: "84.33%",
  },
  vectorIcon5: {
    left: "8.67%",
    right: "84.67%",
  },
  complaints: {
    left: 22,
  },
  childShadowBox: {
    top: 3,
    height: 70,
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
    width: 150,
    left: 0,
    position: "absolute",
  },
  notice1: {
    left: 32,
  },
  meteoconslightningbolt06: {
    left: "9.47%",
    right: "83.8%",
  },
  vectorIcon6: {
    left: "9.33%",
    right: "84%",
  },
  notice: {
    left: 188,
  },
  bills1: {
    left: 34,
  },
  meteoconslightningbolt07: {
    left: "8.93%",
    right: "84.33%",
  },
  vectorIcon7: {
    left: "8.67%",
    right: "84.67%",
  },
  bills: {
    left: 22,
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
