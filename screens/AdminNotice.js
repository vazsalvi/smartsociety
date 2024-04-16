import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";

const AdminNotice = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.adminnotice, styles.iconLayout]}>
      <View style={styles.english}>
        <Text style={[styles.fundCollection, styles.fundTypo]}>
          Fund Collection
        </Text>
        <Text style={[styles.itIsAdvised, styles.advisedTypo]}>
          It is advised for everyone to pay...
        </Text>
      </View>
      <View style={[styles.english1, styles.englishShadowBox]}>
        <Text style={[styles.fundCollection1, styles.fundTypo]}>
          Fund Collection
        </Text>
        <Text style={[styles.itIsAdvised1, styles.advisedTypo]}>
          It is advised for everyone to pay...
        </Text>
      </View>
      <View style={[styles.english2, styles.englishShadowBox]}>
        <Text style={[styles.fundCollection1, styles.fundTypo]}>
          Fund Collection
        </Text>
        <Text style={[styles.itIsAdvised1, styles.advisedTypo]}>
          It is advised for everyone to pay...
        </Text>
      </View>
      <View style={[styles.english3, styles.englishShadowBox]}>
        <Text style={[styles.fundCollection1, styles.fundTypo]}>
          Fund Collection
        </Text>
        <Text style={[styles.itIsAdvised1, styles.advisedTypo]}>
          It is advised for everyone to pay...
        </Text>
      </View>
      <Text style={[styles.notice, styles.noticeTypo]}>notice</Text>
      <Pressable
        style={[styles.newnoticeadd, styles.menubuttonShadowBox]}
        onPress={() => navigation.navigate("AdminAddNotice")}
      >
        <Text style={[styles.addNewNotice, styles.menuPosition]}>
          Add new notice
        </Text>
      </Pressable>
      <Pressable
        style={[styles.menubutton, styles.menubuttonLayout]}
        onPress={() => navigation.navigate("Adminhome")}
      >
        <Image
          style={[styles.menubuttonChild, styles.headerPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-13.png")}
        />
        <Text style={[styles.menu, styles.menuPosition]}>Menu</Text>
      </Pressable>
      <View style={[styles.header, styles.headerPosition]}>
        <Image
          style={[styles.header, styles.headerPosition]}
          contentFit="cover"
          source={require("../assets/societyimg.png")}
        />
        <Text style={[styles.smartIndiaSociety, styles.menuPosition]}>
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
  fundTypo: {
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
    height: 22,
    color: Color.colorBlack,
    lineHeight: 24,
    fontSize: FontSize.size_base,
  },
  advisedTypo: {
    color: Color.colorDimgray,
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
    lineHeight: 24,
    fontSize: FontSize.size_base,
  },
  englishShadowBox: {
    paddingVertical: 15,
    paddingHorizontal: Padding.p_24xl,
    height: 85,
    width: 315,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    backgroundColor: Color.white,
    borderRadius: Border.br_xs,
    left: 23,
    position: "absolute",
  },
  noticeTypo: {
    textAlign: "center",
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    textTransform: "uppercase",
  },
  menubuttonShadowBox: {
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
  menuPosition: {
    color: Color.white,
    left: "50%",
    lineHeight: 24,
    position: "absolute",
  },
  menubuttonLayout: {
    height: 28,
    width: 115,
  },
  headerPosition: {
    top: 0,
    position: "absolute",
  },
  fundCollection: {
    width: 164,
    height: 22,
  },
  itIsAdvised: {
    width: 268,
    height: 23,
  },
  english: {
    top: 235,
    paddingVertical: Padding.p_mini,
    paddingHorizontal: Padding.p_24xl,
    height: 85,
    width: 315,
    backgroundColor: Color.white,
    left: 23,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  fundCollection1: {
    width: 149,
    height: 22,
  },
  itIsAdvised1: {
    width: 278,
    height: 22,
  },
  english1: {
    top: 330,
  },
  english2: {
    top: 425,
  },
  english3: {
    top: 520,
  },
  notice: {
    marginLeft: -30,
    top: 114,
    left: "50%",
    color: Color.colorBlack,
    lineHeight: 24,
    fontSize: FontSize.size_base,
    textAlign: "center",
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    textTransform: "uppercase",
    position: "absolute",
  },
  addNewNotice: {
    marginLeft: -61.5,
    top: 13,
    zIndex: 0,
    fontSize: FontSize.size_mini,
    color: Color.white,
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
  },
  newnoticeadd: {
    top: 165,
    left: 77,
    backgroundColor: Color.colorOrange_200,
    width: 207,
    height: 50,
    alignItems: "flex-end",
    justifyContent: "center",
    borderRadius: Border.br_xs,
  },
  menubuttonChild: {
    marginLeft: -57.5,
    height: 28,
    width: 115,
    left: "50%",
    borderRadius: Border.br_xs,
  },
  menu: {
    marginLeft: -22.5,
    top: 2,
    fontSize: FontSize.size_mini,
    color: Color.white,
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
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
  header: {
    left: 0,
    width: 450,
    height: 65,
  },
  smartIndiaSociety: {
    marginLeft: -85,
    top: 22,
    fontSize: FontSize.size_xs,
    width: 169,
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
  adminnotice: {
    backgroundColor: Color.colorPapayawhip,
    flex: 1,
    height: 800,
  },
});

export default AdminNotice;
