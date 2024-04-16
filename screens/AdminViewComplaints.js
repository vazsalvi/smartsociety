import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const AdminViewComplaints = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.adminviewcomplaints, styles.iconLayout]}>
      <Pressable
        style={styles.back}
        onPress={() => navigation.navigate("AdminComplaints")}
      >
        <Image
          style={styles.backChild}
          contentFit="cover"
          source={require("../assets/rectangle-13.png")}
        />
        <Text style={styles.back1}>Back</Text>
      </Pressable>
      <View style={[styles.english, styles.englishShadowBox]}>
        <Text style={styles.cleanliness}>Cleanliness</Text>
        <Text style={[styles.dearAdminPlease, styles.dearTypo]}>
          Dear Admin, please look into this ma...
        </Text>
      </View>
      <View style={[styles.english1, styles.englishShadowBox]}>
        <Text style={styles.cleanliness}>Cleanliness</Text>
        <Text style={[styles.dearAdminPlease, styles.dearTypo]}>
          Dear Admin, please look into this ma...
        </Text>
      </View>
      <View style={[styles.english2, styles.englishShadowBox]}>
        <Text style={styles.cleanliness}>Cleanliness</Text>
        <Text style={styles.dearTypo}>
          Dear Admin, please look into this ma...
        </Text>
      </View>
      <Text style={[styles.complaints, styles.complaintsTypo]}>Complaints</Text>
      <View style={styles.header}>
        <Image
          style={styles.header}
          contentFit="cover"
          source={require("../assets/societyimg.png")}
        />
        <Text style={[styles.smartIndiaSociety, styles.complaintsTypo]}>
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
  englishShadowBox: {
    paddingVertical: 15,
    paddingHorizontal: Padding.p_23xl,
    height: 85,
    width: 315,
    backgroundColor: Color.white,
    left: 22,
    borderRadius: Border.br_xs,
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
  dearTypo: {
    width: 278,
    fontSize: FontSize.size_sm,
    color: Color.colorDimgray,
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
    lineHeight: 24,
  },
  complaintsTypo: {
    textAlign: "center",
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    textTransform: "uppercase",
    lineHeight: 24,
    left: "50%",
    position: "absolute",
  },
  backChild: {
    marginLeft: -57.5,
    borderRadius: Border.br_xs,
    left: "50%",
    top: 0,
    height: 28,
    width: 115,
    position: "absolute",
  },
  back1: {
    marginLeft: -19.5,
    top: 2,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
    lineHeight: 24,
    color: Color.white,
    left: "50%",
    position: "absolute",
  },
  back: {
    top: 700,
    left: 122,
    height: 28,
    width: 115,
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
  cleanliness: {
    width: 149,
    height: 22,
    color: Color.colorDimgray,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
    lineHeight: 24,
  },
  dearAdminPlease: {
    height: 22,
  },
  english: {
    top: 203,
  },
  english1: {
    top: 298,
  },
  english2: {
    top: 393,
  },
  complaints: {
    marginLeft: -54,
    top: 114,
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
    textAlign: "center",
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    textTransform: "uppercase",
  },
  header: {
    left: 0,
    width: 450,
    height: 65,
    top: 0,
    position: "absolute",
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
    color: Color.white,
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
  adminviewcomplaints: {
    backgroundColor: Color.colorPapayawhip,
    flex: 1,
    height: 800,
  },
});

export default AdminViewComplaints;
