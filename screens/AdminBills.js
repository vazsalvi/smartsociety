import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const AdminBills = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.adminbills, styles.iconLayout]}>
      <Pressable
        style={[styles.editbutton, styles.editbuttonFlexBox]}
        onPress={() => navigation.navigate("AdminAddBills")}
      >
        <Text style={styles.editTypo}>Edit</Text>
      </Pressable>
      <Pressable
        style={[styles.menubutton, styles.editbuttonFlexBox]}
        onPress={() => navigation.navigate("Adminhome")}
      >
        <View style={[styles.vectorParent, styles.frameChildLayout]}>
          <Image
            style={[styles.frameChild, styles.frameChildLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-13.png")}
          />
          <Text style={[styles.menu, styles.editTypo]}>Menu</Text>
        </View>
      </Pressable>
      <View style={styles.allbills}>
        <View style={[styles.extra, styles.waterLayout]}>
          <Text style={[styles.new, styles.textTypo]}>New</Text>
          <Text style={[styles.text, styles.textTypo]}>₹ 0</Text>
        </View>
        <View style={[styles.extreaa, styles.waterLayout]}>
          <Text style={[styles.new, styles.textTypo]}>New</Text>
          <Text style={[styles.text1, styles.textTypo]}>₹ 0</Text>
        </View>
        <View style={[styles.club, styles.waterLayout]}>
          <Text style={[styles.new, styles.textTypo]}>Club house</Text>
          <Text style={[styles.text2, styles.textTypo]}>₹ 2250</Text>
        </View>
        <View style={[styles.gym, styles.waterLayout]}>
          <Text style={[styles.new, styles.textTypo]}>Gym</Text>
          <Text style={[styles.text2, styles.textTypo]}>₹ 2250</Text>
        </View>
        <View style={[styles.electricity, styles.waterLayout]}>
          <Text style={[styles.new, styles.textTypo]}>Electricity</Text>
          <Text style={[styles.text2, styles.textTypo]}>₹ 2250</Text>
        </View>
        <View style={[styles.water, styles.waterLayout]}>
          <View style={[styles.waterChild, styles.waterLayout]} />
          <Text style={[styles.new, styles.textTypo]}>Water</Text>
          <Text style={[styles.text2, styles.textTypo]}>₹ 2250</Text>
        </View>
        <View style={[styles.maintanance, styles.waterLayout]}>
          <Text style={[styles.maintainence, styles.text6Typo]}>
            Maintainence
          </Text>
          <Text style={[styles.text6, styles.text6Typo]}>₹ 2250</Text>
        </View>
      </View>
      <Text style={[styles.bills, styles.billsTypo]}>Bills</Text>
      <View style={styles.header}>
        <Image
          style={styles.header}
          contentFit="cover"
          source={require("../assets/societyimg.png")}
        />
        <Text style={[styles.smartIndiaSociety, styles.billsTypo]}>
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
  editbuttonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    top: 700,
    width: 115,
    position: "absolute",
  },
  frameChildLayout: {
    width: 115,
    height: 28,
  },
  editTypo: {
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
    lineHeight: 24,
    fontSize: FontSize.size_mini,
    color: Color.white,
  },
  waterLayout: {
    height: 56,
    left: 0,
    width: 336,
    position: "absolute",
  },
  textTypo: {
    color: Color.colorGray_100,
    fontSize: FontSize.size_sm,
    top: 16,
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
    lineHeight: 24,
    position: "absolute",
  },
  text6Typo: {
    fontSize: FontSize.size_sm,
    top: 16,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
    lineHeight: 24,
    position: "absolute",
  },
  billsTypo: {
    textAlign: "center",
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    textTransform: "uppercase",
    lineHeight: 24,
    left: "50%",
    position: "absolute",
  },
  editbutton: {
    marginLeft: -145,
    backgroundColor: Color.colorOrange_200,
    height: 28,
    borderRadius: Border.br_xs,
    left: "50%",
  },
  frameChild: {
    marginLeft: -57.5,
    top: 0,
    height: 28,
    borderRadius: Border.br_xs,
    left: "50%",
    position: "absolute",
  },
  menu: {
    marginLeft: -22.5,
    top: 2,
    left: "50%",
    position: "absolute",
  },
  vectorParent: {
    height: 28,
  },
  menubutton: {
    left: 213,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
  },
  new: {
    left: 24,
  },
  text: {
    left: 261,
  },
  extra: {
    top: 432,
    backgroundColor: Color.greyLighter,
    height: 56,
    borderRadius: Border.br_xs,
  },
  text1: {
    left: 257,
  },
  extreaa: {
    top: 360,
    backgroundColor: Color.greyLighter,
    height: 56,
    borderRadius: Border.br_xs,
  },
  text2: {
    left: 241,
  },
  club: {
    top: 216,
    backgroundColor: Color.greyLighter,
    height: 56,
    borderRadius: Border.br_xs,
  },
  gym: {
    top: 288,
    backgroundColor: Color.greyLighter,
    height: 56,
    borderRadius: Border.br_xs,
  },
  electricity: {
    top: 144,
    backgroundColor: Color.greyLighter,
    height: 56,
    borderRadius: Border.br_xs,
  },
  waterChild: {
    backgroundColor: Color.greyLighter,
    height: 56,
    borderRadius: Border.br_xs,
    top: 0,
  },
  water: {
    top: 72,
  },
  maintainence: {
    color: Color.colorBlack,
    left: 24,
  },
  text6: {
    left: 239,
    color: Color.colorBlack,
  },
  maintanance: {
    backgroundColor: Color.colorWhitesmoke_100,
    top: 0,
    borderRadius: Border.br_xs,
  },
  allbills: {
    top: 150,
    left: 11,
    height: 488,
    width: 336,
    position: "absolute",
  },
  bills: {
    marginLeft: -23,
    top: 84,
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
  },
  header: {
    width: 450,
    height: 65,
    left: 0,
    top: 0,
    position: "absolute",
  },
  smartIndiaSociety: {
    marginLeft: -115.7,
    top: 23,
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
  adminbills: {
    backgroundColor: Color.colorPapayawhip,
    flex: 1,
    height: 800,
  },
});

export default AdminBills;
