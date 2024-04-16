import * as React from "react";
import { Pressable, Text, StyleSheet, TextInput, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, Color, FontSize, Padding } from "../GlobalStyles";

const AdminAddVote = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.adminaddvote, styles.iconLayout]}>
      <Pressable
        style={[styles.savebutton, styles.newvoteShadowBox]}
        onPress={() => navigation.navigate("AdminVote")}
      >
        <Text style={[styles.save, styles.saveTypo]}>Save</Text>
      </Pressable>
      <Text style={[styles.pleaseNoteOnce, styles.voteUpCanTypo]}>
        Please note once clicked on save, the event will be viewed by all
        members.
      </Text>
      <TextInput
        style={[styles.newvote, styles.saveTypo]}
        placeholder="Type your question here..."
        placeholderTextColor="#4f4f4f"
      />
      <Text style={[styles.voteUpCan, styles.voteUpCanTypo]}>
        Vote up can have yes/no type question only.
      </Text>
      <Text style={[styles.addNewVote, styles.addNewVoteTypo]}>
        Add new Vote
      </Text>
      <View style={styles.header}>
        <Image
          style={styles.header}
          contentFit="cover"
          source={require("../assets/societyimg.png")}
        />
        <Text style={[styles.smartIndiaSociety, styles.addNewVoteTypo]}>
          Smart India Society
        </Text>
      </View>
      <Pressable
        style={styles.vector}
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
  newvoteShadowBox: {
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_xs,
  },
  saveTypo: {
    fontFamily: FontFamily.openSansRegular,
    position: "absolute",
  },
  voteUpCanTypo: {
    textAlign: "center",
    color: Color.colorDimgray,
    lineHeight: 16,
    top: "50%",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.openSansRegular,
    left: "50%",
    position: "absolute",
  },
  addNewVoteTypo: {
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    textTransform: "uppercase",
    textAlign: "center",
    lineHeight: 24,
    left: "50%",
    position: "absolute",
  },
  save: {
    marginLeft: -16.5,
    top: 2,
    fontSize: FontSize.size_mini,
    color: Color.colorGray_100,
    textAlign: "left",
    lineHeight: 24,
    fontFamily: FontFamily.openSansRegular,
    left: "50%",
  },
  savebutton: {
    marginLeft: -57,
    top: 600,
    backgroundColor: Color.colorOrange_200,
    width: 115,
    height: 28,
    left: "50%",
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
  pleaseNoteOnce: {
    marginTop: 99,
    marginLeft: -118,
    width: 235,
  },
  newvote: {
    top: 255,
    left: 33,
    backgroundColor: Color.white,
    width: 305,
    height: 190,
    paddingHorizontal: Padding.p_43xl,
    paddingVertical: Padding.p_sm,
    fontSize: FontSize.size_xs,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_xs,
  },
  voteUpCan: {
    marginTop: -219,
    marginLeft: -136,
    width: 273,
  },
  addNewVote: {
    marginLeft: -62,
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
    marginLeft: -84,
    top: 22,
    color: Color.white,
    width: 169,
    fontSize: FontSize.size_xs,
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  vector: {
    left: "9.17%",
    top: "3.5%",
    right: "82.78%",
    bottom: "95%",
    width: "8.06%",
    height: "1.5%",
    position: "absolute",
  },
  adminaddvote: {
    backgroundColor: Color.colorPapayawhip,
    flex: 1,
    height: 800,
  },
});

export default AdminAddVote;
