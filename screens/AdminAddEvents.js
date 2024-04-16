import * as React from "react";
import { Pressable, Text, StyleSheet, TextInput, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Padding, FontSize, FontFamily, Border, Color } from "../GlobalStyles";

const AdminAddEvents = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.adminaddevents, styles.iconLayout]}>
      <Pressable
        style={styles.save}
        onPress={() => navigation.navigate("AdminEvents")}
      >
        <Text style={styles.save1}>Save</Text>
      </Pressable>
      <Text style={styles.pleaseNoteOnce}>
        Please note once clicked on save, the event will be viewed by all
        members.
      </Text>
      <TextInput
        style={[styles.body, styles.bodyShadowBox]}
        placeholder="Type here..."
        placeholderTextColor="#4f4f4f"
      />
      <TextInput
        style={[styles.subject, styles.bodyShadowBox]}
        placeholder="Subject"
        placeholderTextColor="#fff"
      />
      <Text style={[styles.addNewEvent, styles.addNewEventTypo]}>
        Add new event
      </Text>
      <View style={styles.header}>
        <Image
          style={styles.header}
          contentFit="cover"
          source={require("../assets/societyimg.png")}
        />
        <Text style={[styles.smartIndiaSociety, styles.addNewEventTypo]}>
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
  bodyShadowBox: {
    paddingHorizontal: Padding.p_43xl,
    width: 305,
    left: 33,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.openSansRegular,
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
  addNewEventTypo: {
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    textTransform: "uppercase",
    textAlign: "center",
    lineHeight: 24,
    left: "50%",
    position: "absolute",
  },
  save1: {
    marginLeft: -18.5,
    top: 2,
    fontSize: FontSize.size_mini,
    color: Color.colorGray_100,
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
    lineHeight: 24,
    left: "50%",
    position: "absolute",
  },
  save: {
    marginLeft: -58,
    top: 600,
    width: 115,
    height: 28,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_xs,
    left: "50%",
    backgroundColor: Color.colorOrange_200,
    position: "absolute",
  },
  pleaseNoteOnce: {
    marginTop: 99,
    marginLeft: -118,
    top: "50%",
    lineHeight: 16,
    color: Color.colorDimgray,
    width: 235,
    textAlign: "center",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.openSansRegular,
    left: "50%",
    position: "absolute",
  },
  body: {
    top: 255,
    backgroundColor: Color.white,
    height: 190,
    paddingVertical: Padding.p_sm,
  },
  subject: {
    top: 206,
    height: 30,
    justifyContent: "center",
    paddingVertical: 0,
    backgroundColor: Color.colorOrange_200,
    paddingHorizontal: Padding.p_43xl,
    width: 305,
    left: 33,
  },
  addNewEvent: {
    marginLeft: -67,
    top: 114,
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
    marginLeft: -85,
    top: 22,
    color: Color.white,
    width: 169,
    fontSize: FontSize.size_xs,
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
  adminaddevents: {
    backgroundColor: Color.colorPapayawhip,
    flex: 1,
    height: 800,
  },
});

export default AdminAddEvents;
