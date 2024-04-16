import * as React from "react";
import { Pressable, Text, StyleSheet, View, TextInput } from "react-native";
import { TextInput as RNPTextInput } from "react-native-paper";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Padding, Border, FontFamily, FontSize } from "../GlobalStyles";

const Complaints1 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.writecomplaints, styles.iconLayout]}>
      <Pressable style={styles.submitbutton}>
        <View style={[styles.submitWrapper, styles.subjectboxFlexBox]}>
          <Pressable onPress={() => navigation.navigate("Home")}>
            <Text style={styles.submit1}>SUBMIT</Text>
          </Pressable>
        </View>
      </Pressable>
      <Text style={styles.pleaseNoteAll}>
        Please note all complaints can only be viewed by the admin.
      </Text>
      <TextInput
        style={[styles.bodybox, styles.bodyboxShadowBox]}
        placeholder="Type here..."
        placeholderTextColor="#4f4f4f"
      />
      <RNPTextInput
        style={[styles.subjectbox, styles.bodyboxShadowBox]}
        placeholder="Subject"
        mode="flat"
        placeholderTextColor="#fff"
        theme={{
          fonts: { regular: { fontFamily: "Montserrat", fontWeight: "Light" } },
          colors: { text: "#fff" },
        }}
      />
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
        onPress={() => navigation.navigate("Menu")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/drawer3.png")}
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
  subjectboxFlexBox: {
    justifyContent: "center",
    backgroundColor: Color.colorOrange_200,
  },
  bodyboxShadowBox: {
    paddingHorizontal: Padding.p_10xl,
    width: 305,
    left: 27,
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
  complaintsTypo: {
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    textTransform: "uppercase",
    textAlign: "center",
    left: "50%",
    lineHeight: 24,
    position: "absolute",
  },
  submit1: {
    fontSize: FontSize.size_mini,
    color: Color.colorWhitesmoke_100,
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
    lineHeight: 24,
  },
  submitWrapper: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorOrange_200,
    alignItems: "center",
    height: 28,
    width: 115,
  },
  submitbutton: {
    top: 531,
    left: 117,
    justifyContent: "flex-end",
    alignItems: "center",
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
  pleaseNoteAll: {
    marginTop: 65,
    marginLeft: -124,
    top: "50%",
    lineHeight: 16,
    color: Color.colorDimgray,
    width: 235,
    textAlign: "center",
    left: "50%",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.openSansRegular,
    position: "absolute",
  },
  bodybox: {
    top: 221,
    backgroundColor: Color.white,
    height: 190,
    paddingVertical: Padding.p_sm,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.openSansRegular,
  },
  subjectbox: {
    top: 172,
    height: 30,
    paddingVertical: 0,
    justifyContent: "center",
    backgroundColor: Color.colorOrange_200,
  },
  complaints: {
    marginLeft: -60,
    top: 80,
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
  },
  header: {
    top: 0,
    left: 0,
    width: 450,
    height: 65,
    position: "absolute",
  },
  smartIndiaSociety: {
    marginLeft: -118.2,
    top: 23,
    color: Color.white,
    width: 169,
    fontSize: FontSize.size_xs,
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  drawer: {
    left: "9.18%",
    top: "3.5%",
    right: "82.77%",
    bottom: "95%",
    width: "8.05%",
    height: "1.5%",
    position: "absolute",
  },
  writecomplaints: {
    backgroundColor: Color.colorPapayawhip,
    flex: 1,
    height: 708,
  },
});

export default Complaints1;
