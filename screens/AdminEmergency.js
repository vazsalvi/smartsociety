import * as React from "react";
import { StyleSheet, View, Text, Pressable, TextInput } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const AdminEmergency = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.adminaddemergency, styles.iconLayout]}>
      <Pressable
        style={[styles.done, styles.doneLayout]}
        onPress={() => navigation.navigate("AdminEmergency1")}
      >
        <View style={[styles.doneChild, styles.headerPosition]} />
        <Text style={styles.save}>Save</Text>
      </Pressable>
      <Text style={[styles.clickOnTheContainer, styles.clickContainerTypo]}>
        {`Click on the number `}
        <Text style={styles.forQuickDial}> FOR QUICK DIAL</Text>
      </Text>
      <Text style={[styles.clickOnTheContainer1, styles.clickContainerTypo]}>
        {`Click on the Location `}
        <Text style={styles.forQuickDial}> FOR Near by facilities</Text>
      </Text>
      <Text style={[styles.emergencyNumber, styles.emergencyNumberTypo]}>
        Emergency number
      </Text>
      <View style={[styles.header, styles.headerPosition]}>
        <Image
          style={[styles.header, styles.headerPosition]}
          contentFit="cover"
          source={require("../assets/societyimg1.png")}
        />
        <Text style={[styles.smartIndiaSociety, styles.emergencyNumberTypo]}>
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
      <View style={[styles.poisionControl, styles.policeShadowBox]}>
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector11.png")}
        />
        <Image
          style={[styles.callLogoIcon, styles.callIconLayout]}
          contentFit="cover"
          source={require("../assets/call-logo.png")}
        />
        <Text
          style={[styles.poisonControl, styles.police1Position]}
        >{`Poison Control: `}</Text>
        <TextInput
          style={[styles.textinput, styles.textinputTypo]}
          placeholder="123456789"
          keyboardType="number-pad"
          placeholderTextColor="#1e1e1e"
        />
      </View>
      <View style={[styles.animalContrl, styles.policeShadowBox]}>
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector11.png")}
        />
        <Image
          style={[styles.callLogoIcon1, styles.callIconPosition1]}
          contentFit="cover"
          source={require("../assets/call-logo1.png")}
        />
        <Text
          style={[styles.poisonControl, styles.police1Position]}
        >{`Animal Control: `}</Text>
        <TextInput
          style={[styles.textinput1, styles.textinputTypo]}
          placeholder="123456789"
          keyboardType="number-pad"
          placeholderTextColor="#1e1e1e"
        />
      </View>
      <View style={[styles.fireDepartment, styles.electricityShadowBox]}>
        <Image
          style={[styles.vectorIcon2, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector11.png")}
        />
        <Image
          style={[styles.callLogoIcon2, styles.callIconPosition1]}
          contentFit="cover"
          source={require("../assets/call-logo1.png")}
        />
        <Text
          style={[styles.fireDepartment1, styles.police1Position]}
        >{`Fire Department: `}</Text>
        <TextInput
          style={[styles.textinput2, styles.textinputTypo]}
          placeholder="123456789"
          keyboardType="number-pad"
          placeholderTextColor="#1e1e1e"
        />
      </View>
      <View style={[styles.police, styles.policeShadowBox]}>
        <Image
          style={[styles.vectorIcon2, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector11.png")}
        />
        <Image
          style={[styles.callLogoIcon3, styles.callIconLayout]}
          contentFit="cover"
          source={require("../assets/call-logo2.png")}
        />
        <Text style={[styles.police1, styles.police1Position]}>Police:</Text>
        <TextInput
          style={[styles.textinput3, styles.textinputTypo]}
          placeholder="123456789"
          keyboardType="number-pad"
          placeholderTextColor="#1e1e1e"
        />
      </View>
      <View style={[styles.localHospital, styles.waterShadowBox]}>
        <Text
          style={[styles.localHospital1, styles.waterCompanyPosition]}
        >{`Local Hospital: `}</Text>
        <Image
          style={[styles.vectorIcon4, styles.vectorIconPosition]}
          contentFit="cover"
          source={require("../assets/vector11.png")}
        />
        <Image
          style={[styles.callLogoIcon4, styles.callIconPosition]}
          contentFit="cover"
          source={require("../assets/call-logo3.png")}
        />
        <TextInput
          style={[styles.textinput4, styles.textinputTypo]}
          placeholder="123456789"
          keyboardType="number-pad"
          placeholderTextColor="#1e1e1e"
        />
      </View>
      <View style={[styles.water, styles.waterShadowBox]}>
        <Image
          style={[styles.vectorIcon5, styles.vectorIconPosition]}
          contentFit="cover"
          source={require("../assets/vector11.png")}
        />
        <Image
          style={[styles.callLogoIcon5, styles.callIconPosition]}
          contentFit="cover"
          source={require("../assets/call-logo3.png")}
        />
        <Text
          style={[styles.waterCompany, styles.waterCompanyPosition]}
        >{`Water Company: `}</Text>
        <TextInput
          style={[styles.textinput5, styles.textinputTypo]}
          placeholder="123456789"
          keyboardType="number-pad"
          placeholderTextColor="#1e1e1e"
        />
      </View>
      <View style={[styles.electricity, styles.electricityShadowBox]}>
        <Image
          style={[styles.vectorIcon6, styles.vectorIconPosition]}
          contentFit="cover"
          source={require("../assets/vector11.png")}
        />
        <Image
          style={[styles.callLogoIcon3, styles.callIconLayout]}
          contentFit="cover"
          source={require("../assets/call-logo4.png")}
        />
        <Text
          style={[styles.electricityCompany, styles.companyPosition]}
        >{`Electricity Company: `}</Text>
        <TextInput
          style={[styles.textinput6, styles.textinputTypo]}
          placeholder="123456789"
          keyboardType="number-pad"
          placeholderTextColor="#1e1e1e"
        />
      </View>
      <View style={[styles.gasCompany, styles.secretoryShadowBox]}>
        <Image
          style={[styles.vectorIcon7, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector11.png")}
        />
        <Image
          style={[styles.callLogoIcon5, styles.callIconPosition]}
          contentFit="cover"
          source={require("../assets/call-logo3.png")}
        />
        <Text
          style={[styles.gasCompany1, styles.textinput7Typo]}
        >{`Gas Company: `}</Text>
        <TextInput
          style={[styles.textinput7, styles.textinput7Typo]}
          placeholder="123456789"
          keyboardType="number-pad"
          placeholderTextColor="#1e1e1e"
        />
      </View>
      <View style={[styles.secretory, styles.secretoryShadowBox]}>
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector11.png")}
        />
        <Image
          style={[styles.callLogoIcon8, styles.callIconLayout]}
          contentFit="cover"
          source={require("../assets/call-logo1.png")}
        />
        <Text
          style={[styles.secretory1, styles.companyPosition]}
        >{`Secretory: `}</Text>
        <TextInput
          style={[styles.textinput8, styles.textinputTypo]}
          placeholder="123456789"
          keyboardType="number-pad"
          placeholderTextColor="#1e1e1e"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  doneLayout: {
    height: 28,
    width: 115,
    left: "50%",
  },
  headerPosition: {
    top: 0,
    position: "absolute",
  },
  clickContainerTypo: {
    width: 280,
    textAlign: "center",
    color: Color.colorDimgray,
    lineHeight: 16,
    left: 48,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.openSansRegular,
    position: "absolute",
  },
  emergencyNumberTypo: {
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    textTransform: "uppercase",
    textAlign: "center",
    lineHeight: 24,
    left: "50%",
    position: "absolute",
  },
  policeShadowBox: {
    paddingVertical: 2,
    height: 30,
    width: 308,
    elevation: 4,
    shadowRadius: 4,
    backgroundColor: Color.white,
    borderRadius: Border.br_2xl,
    left: 24,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    position: "absolute",
  },
  vectorIconLayout: {
    height: 23,
    width: 14,
    zIndex: 0,
    position: "absolute",
  },
  callIconLayout: {
    height: 19,
    width: 17,
    zIndex: 1,
    position: "absolute",
    overflow: "hidden",
  },
  police1Position: {
    height: 26,
    color: Color.colorGray_100,
    zIndex: 2,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
    lineHeight: 24,
    top: 2,
    position: "absolute",
  },
  textinputTypo: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.openSansRegular,
    position: "absolute",
  },
  callIconPosition1: {
    left: 17,
    zIndex: 1,
    height: 19,
    width: 17,
    position: "absolute",
    overflow: "hidden",
  },
  electricityShadowBox: {
    alignItems: "flex-end",
    paddingVertical: 2,
    height: 30,
    width: 308,
    elevation: 4,
    shadowRadius: 4,
    backgroundColor: Color.white,
    borderRadius: Border.br_2xl,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    position: "absolute",
  },
  waterShadowBox: {
    paddingHorizontal: Padding.p_16xl,
    left: 28,
    paddingVertical: 2,
    height: 30,
    width: 308,
    elevation: 4,
    shadowRadius: 4,
    backgroundColor: Color.white,
    borderRadius: Border.br_2xl,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    position: "absolute",
  },
  waterCompanyPosition: {
    left: 35,
    height: 26,
    color: Color.colorGray_100,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
    lineHeight: 24,
    top: 2,
    position: "absolute",
  },
  vectorIconPosition: {
    left: 267,
    height: 23,
    width: 14,
    position: "absolute",
  },
  callIconPosition: {
    left: 14,
    height: 19,
    width: 17,
    position: "absolute",
    overflow: "hidden",
  },
  companyPosition: {
    left: 37,
    zIndex: 2,
    height: 26,
    color: Color.colorGray_100,
    textAlign: "left",
    lineHeight: 24,
  },
  secretoryShadowBox: {
    paddingHorizontal: Padding.p_18xl,
    paddingVertical: 2,
    height: 30,
    width: 308,
    elevation: 4,
    shadowRadius: 4,
    backgroundColor: Color.white,
    borderRadius: Border.br_2xl,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    position: "absolute",
  },
  textinput7Typo: {
    fontFamily: FontFamily.montserratRegular,
    fontSize: FontSize.size_sm,
    top: 2,
    position: "absolute",
  },
  doneChild: {
    marginLeft: -57.5,
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorOrange_200,
    height: 28,
    width: 115,
    left: "50%",
  },
  save: {
    marginLeft: -20.5,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
    lineHeight: 24,
    color: Color.white,
    top: 2,
    left: "50%",
    position: "absolute",
  },
  done: {
    marginLeft: -58,
    top: 700,
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    height: 28,
    position: "absolute",
  },
  forQuickDial: {
    textTransform: "lowercase",
  },
  clickOnTheContainer: {
    top: 144,
  },
  clickOnTheContainer1: {
    top: 160,
  },
  emergencyNumber: {
    marginLeft: -87,
    top: 105,
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
  },
  header: {
    left: 0,
    width: 450,
    height: 60,
  },
  smartIndiaSociety: {
    marginLeft: -85,
    top: 22,
    fontSize: FontSize.size_xs,
    width: 169,
    color: Color.white,
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
  vectorIcon: {
    zIndex: 0,
    left: 271,
    height: 23,
    width: 14,
    top: 3,
  },
  callLogoIcon: {
    left: 19,
    zIndex: 1,
    top: 7,
  },
  poisonControl: {
    zIndex: 2,
    width: 106,
    left: 39,
    color: Color.colorGray_100,
  },
  textinput: {
    left: 142,
    zIndex: 3,
    top: 2,
    fontSize: FontSize.size_sm,
  },
  poisionControl: {
    top: 576,
    paddingHorizontal: Padding.p_20xl,
    paddingVertical: 2,
    height: 30,
    width: 308,
    elevation: 4,
    shadowRadius: 4,
    backgroundColor: Color.white,
    borderRadius: Border.br_2xl,
  },
  callLogoIcon1: {
    top: 7,
  },
  textinput1: {
    left: 141,
    zIndex: 3,
    top: 2,
    fontSize: FontSize.size_sm,
  },
  animalContrl: {
    top: 525,
    paddingHorizontal: Padding.p_20xl,
    paddingVertical: 2,
    height: 30,
    width: 308,
    elevation: 4,
    shadowRadius: 4,
    backgroundColor: Color.white,
    borderRadius: Border.br_2xl,
  },
  vectorIcon2: {
    top: 5,
    zIndex: 0,
    left: 271,
    height: 23,
    width: 14,
  },
  callLogoIcon2: {
    top: 5,
  },
  fireDepartment1: {
    zIndex: 2,
    left: 39,
    color: Color.colorGray_100,
    width: 115,
  },
  textinput2: {
    left: 153,
    zIndex: 3,
    top: 2,
    fontSize: FontSize.size_sm,
  },
  fireDepartment: {
    top: 474,
    paddingHorizontal: Padding.p_8xl,
    left: 24,
    alignItems: "flex-end",
  },
  callLogoIcon3: {
    left: 16,
    top: 5,
    zIndex: 1,
  },
  police1: {
    left: 36,
    width: 47,
    zIndex: 2,
  },
  textinput3: {
    left: 85,
    zIndex: 3,
    top: 2,
    fontSize: FontSize.size_sm,
  },
  police: {
    top: 428,
    paddingHorizontal: Padding.p_17xl,
    paddingVertical: 2,
    height: 30,
    width: 308,
    elevation: 4,
    shadowRadius: 4,
    backgroundColor: Color.white,
    borderRadius: Border.br_2xl,
  },
  localHospital1: {
    width: 99,
    zIndex: 0,
  },
  vectorIcon4: {
    top: 5,
    zIndex: 1,
  },
  callLogoIcon4: {
    top: 5,
    zIndex: 2,
  },
  textinput4: {
    left: 137,
    zIndex: 3,
    top: 2,
    fontSize: FontSize.size_sm,
  },
  localHospital: {
    top: 377,
  },
  vectorIcon5: {
    top: 5,
    zIndex: 0,
  },
  callLogoIcon5: {
    zIndex: 1,
    top: 7,
  },
  waterCompany: {
    width: 112,
    zIndex: 2,
  },
  textinput5: {
    left: 146,
    zIndex: 3,
    top: 3,
  },
  water: {
    top: 331,
  },
  vectorIcon6: {
    zIndex: 0,
    top: 3,
  },
  electricityCompany: {
    width: 134,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.openSansRegular,
    position: "absolute",
    top: 2,
  },
  textinput6: {
    left: 175,
    zIndex: 3,
    top: 2,
    fontSize: FontSize.size_sm,
  },
  electricity: {
    top: 285,
    paddingHorizontal: Padding.p_9xs,
    left: 28,
  },
  vectorIcon7: {
    left: 270,
    zIndex: 0,
    top: 3,
  },
  gasCompany1: {
    left: 37,
    zIndex: 2,
    height: 26,
    color: Color.colorGray_100,
    textAlign: "left",
    lineHeight: 24,
    width: 106,
  },
  textinput7: {
    left: 145,
    zIndex: 3,
  },
  gasCompany: {
    top: 239,
    left: 28,
  },
  callLogoIcon8: {
    left: 15,
    top: 5,
    zIndex: 1,
  },
  secretory1: {
    width: 69,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.openSansRegular,
    position: "absolute",
    top: 2,
  },
  textinput8: {
    left: 131,
    zIndex: 3,
    top: 3,
  },
  secretory: {
    marginLeft: -154,
    top: 194,
    left: "50%",
    paddingHorizontal: Padding.p_18xl,
  },
  adminaddemergency: {
    backgroundColor: Color.colorPapayawhip,
    flex: 1,
    height: 800,
  },
});

export default AdminEmergency;
