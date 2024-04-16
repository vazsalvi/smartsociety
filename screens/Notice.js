import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";

const Notice = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.notice, styles.iconLayout]}>
      <Pressable
        style={styles.menureturnbutton}
        onPress={() => navigation.navigate("Home")}
      >
        <View style={styles.vectorParent}>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/rectangle-13.png")}
          />
          <Text style={styles.home}>home</Text>
        </View>
      </Pressable>
      <View style={styles.english}>
        <Text style={[styles.fundCollection, styles.fundTypo]}>
          Fund Collection
        </Text>
        <Text style={styles.itIsAdvised}>
          It is advised for everyone to pay...
        </Text>
      </View>
      <View style={[styles.english1, styles.englishShadowBox]}>
        <Text style={[styles.fundCollection1, styles.fundTypo]}>
          Fund Collection
        </Text>
        <Text style={[styles.itIsAdvised1, styles.fundTypo]}>
          It is advised for everyone to pay...
        </Text>
      </View>
      <View style={[styles.english2, styles.englishShadowBox]}>
        <Text style={[styles.fundCollection1, styles.fundTypo]}>
          Fund Collection
        </Text>
        <Text style={[styles.itIsAdvised1, styles.fundTypo]}>
          It is advised for everyone to pay...
        </Text>
      </View>
      <View style={[styles.english3, styles.englishShadowBox]}>
        <Text style={[styles.fundCollection1, styles.fundTypo]}>
          Fund Collection
        </Text>
        <Text style={[styles.itIsAdvised1, styles.fundTypo]}>
          It is advised for everyone to pay...
        </Text>
      </View>
      <View style={[styles.english4, styles.englishShadowBox]}>
        <Text style={[styles.fundCollection1, styles.fundTypo]}>
          Fund Collection
        </Text>
        <Text style={[styles.itIsAdvised1, styles.fundTypo]}>
          It is advised for everyone to pay...
        </Text>
      </View>
      <Text style={[styles.notice1, styles.notice1Typo]}>notice</Text>
      <View style={styles.vectorGroup}>
        <Pressable
          style={styles.vector}
          onPress={() => navigation.navigate("Menu")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector2.png")}
          />
        </Pressable>
        <Image
          style={styles.societyimgIcon}
          contentFit="cover"
          source={require("../assets/societyimg.png")}
        />
        <Text style={[styles.smartIndiaSociety, styles.notice1Typo]}>
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
  fundTypo: {
    height: 22,
    color: Color.colorDimgray,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
    lineHeight: 24,
  },
  englishShadowBox: {
    paddingVertical: 15,
    paddingHorizontal: Padding.p_24xl,
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
  notice1Typo: {
    textAlign: "center",
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    textTransform: "uppercase",
    lineHeight: 24,
    left: "50%",
    position: "absolute",
  },
  frameChild: {
    marginLeft: -57.5,
    borderRadius: Border.br_xs,
    top: 0,
    height: 28,
    width: 115,
    left: "50%",
    position: "absolute",
  },
  home: {
    marginLeft: -22.5,
    top: 2,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
    lineHeight: 24,
    color: Color.white,
    left: "50%",
    position: "absolute",
  },
  vectorParent: {
    height: 28,
    width: 115,
  },
  menureturnbutton: {
    marginLeft: -57,
    top: 700,
    alignItems: "center",
    justifyContent: "center",
    width: 115,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    left: "50%",
    position: "absolute",
  },
  fundCollection: {
    width: 164,
  },
  itIsAdvised: {
    width: 268,
    height: 23,
    color: Color.colorDimgray,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
    lineHeight: 24,
  },
  english: {
    top: 155,
    paddingVertical: Padding.p_mini,
    paddingHorizontal: Padding.p_24xl,
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
  fundCollection1: {
    width: 149,
  },
  itIsAdvised1: {
    width: 278,
  },
  english1: {
    top: 250,
  },
  english2: {
    top: 345,
  },
  english3: {
    top: 440,
  },
  english4: {
    top: 535,
  },
  notice1: {
    marginLeft: -31,
    top: 88,
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
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
  vector: {
    left: "9.27%",
    top: "38.15%",
    right: "82.58%",
    bottom: "45.54%",
    width: "8.16%",
    height: "16.31%",
    position: "absolute",
  },
  societyimgIcon: {
    left: 0,
    width: 450,
    height: 65,
    top: 0,
    position: "absolute",
  },
  smartIndiaSociety: {
    marginLeft: -128.6,
    top: 17,
    fontSize: FontSize.size_xs,
    width: 169,
    textAlign: "center",
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    textTransform: "uppercase",
    color: Color.white,
  },
  vectorGroup: {
    height: "9.18%",
    width: "123.63%",
    top: "0%",
    right: "-23.63%",
    bottom: "90.82%",
    left: "0%",
    position: "absolute",
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
  notice: {
    backgroundColor: Color.colorPapayawhip,
    flex: 1,
    height: 708,
  },
});

export default Notice;
