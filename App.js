const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Splashscreen from "./screens/Splashscreen";
import PositionText from "./components/PositionText";
import AdminInternalAmenities from "./screens/AdminInternalAmenities";
import AdminFeature from "./screens/AdminFeature";
import AdminEmergency1 from "./screens/AdminEmergency1";
import AdminEmergency from "./screens/AdminEmergency";
import Adminhome from "./screens/Adminhome";
import AdminMenu from "./screens/AdminMenu";
import AdminMember from "./screens/AdminMember";
import AdminVote from "./screens/AdminVote";
import AdminEvents from "./screens/AdminEvents";
import AdminComplaints from "./screens/AdminComplaints";
import AdminNotice from "./screens/AdminNotice";
import AdminBills from "./screens/AdminBills";
import Menu2 from "./screens/Menu2";
import Member from "./screens/Member";
import Adminprofile from "./screens/Adminprofile";
import AdminSocietyInfo from "./screens/AdminSocietyInfo";
import Menu1 from "./screens/Menu1";
import AdminAddVote from "./screens/AdminAddVote";
import AdminAddEvents from "./screens/AdminAddEvents";
import AdminAddNotice from "./screens/AdminAddNotice";
import AdminViewComplaints from "./screens/AdminViewComplaints";
import AdminAddBills from "./screens/AdminAddBills";
import AdminAddSocietyInfo from "./screens/AdminAddSocietyInfo";
import AdminContactsUs from "./screens/AdminContactsUs";
import AdminReraNumber from "./screens/AdminReraNumber";
import AdminProximity from "./screens/AdminProximity";
import AdminRooftopAmenities from "./screens/AdminRooftopAmenities";
import AdminSocietyHighlights from "./screens/AdminSocietyHighlights";
import AdminSignin from "./screens/AdminSignin";
import AdminAddProximity from "./screens/AdminAddProximity";
import AdminAddContactsUs from "./screens/AdminAddContactsUs";
import AdminAddFeature from "./components/AdminAddFeature";
import AdminAddReraNumber from "./screens/AdminAddReraNumber";
import AdminAddInternalAmenities from "./screens/AdminAddInternalAmenities";
import AdminAddRooftopAmenities from "./screens/AdminAddRooftopAmenities";
import AdminAddSocietyHighlights from "./screens/AdminAddSocietyHighlights";
import AdminRegSignup from "./screens/AdminRegSignup";
import OwnerSignin from "./screens/OwnerSignin";
import AdminVerification from "./screens/AdminVerification";
import OwnerSignup from "./screens/OwnerSignup";
import Signin from "./screens/Signin";
import Code from "./screens/Code";
import Signup from "./screens/Signup";
import Home from "./screens/Home";
import Bills from "./screens/Bills";
import Events1 from "./screens/Events1";
import Events from "./screens/Events";
import COMPLAINTS from "./screens/COMPLAINTS";
import Member1 from "./screens/Member1";
import Emergency from "./screens/Emergency";
import Notice from "./screens/Notice";
import Menu from "./screens/Menu";
import Complaints1 from "./screens/Complaints1";
import Notice1 from "./screens/Notice1";
import Theme from "./screens/Theme";
import Developers from "./screens/Developers";
import Profile from "./screens/Profile";
import Logout from "./screens/Logout";
import SocietyInfo from "./screens/SocietyInfo";
import Proximity from "./screens/Proximity";
import ContactsUs from "./screens/ContactsUs";
import Feature from "./screens/Feature";
import ReraNumber from "./screens/ReraNumber";
import InternalAmenities from "./screens/InternalAmenities";
import RooftopAmenities from "./screens/RooftopAmenities";
import SocietyHighlights from "./screens/SocietyHighlights";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);

  const [fontsLoaded, error] = useFonts({
    "OpenSans-Regular": require("./assets/fonts/OpenSans-Regular.ttf"),
    "OpenSans-SemiBold": require("./assets/fonts/OpenSans-SemiBold.ttf"),
    "OpenSans-Bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "OpenSans-ExtraBold": require("./assets/fonts/OpenSans-ExtraBold.ttf"),
    "Montserrat-Light": require("./assets/fonts/Montserrat-Light.ttf"),
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "ABeeZee-Regular": require("./assets/fonts/ABeeZee-Regular.ttf"),
  });

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 2000);
  }, []);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Splashscreen"
              component={Splashscreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AdminInternalAmenities"
              component={AdminInternalAmenities}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AdminFeature"
              component={AdminFeature}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AdminEmergency1"
              component={AdminEmergency1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AdminEmergency"
              component={AdminEmergency}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Adminhome"
              component={Adminhome}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AdminMenu"
              component={AdminMenu}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AdminMember"
              component={AdminMember}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AdminVote"
              component={AdminVote}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AdminEvents"
              component={AdminEvents}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AdminComplaints"
              component={AdminComplaints}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AdminNotice"
              component={AdminNotice}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AdminBills"
              component={AdminBills}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Menu2"
              component={Menu2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Member"
              component={Member}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Adminprofile"
              component={Adminprofile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AdminSocietyInfo"
              component={AdminSocietyInfo}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Menu1"
              component={Menu1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AdminAddVote"
              component={AdminAddVote}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AdminAddEvents"
              component={AdminAddEvents}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AdminAddNotice"
              component={AdminAddNotice}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AdminViewComplaints"
              component={AdminViewComplaints}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AdminAddBills"
              component={AdminAddBills}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AdminAddSocietyInfo"
              component={AdminAddSocietyInfo}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AdminContactsUs"
              component={AdminContactsUs}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AdminReraNumber"
              component={AdminReraNumber}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AdminProximity"
              component={AdminProximity}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AdminRooftopAmenities"
              component={AdminRooftopAmenities}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AdminSocietyHighlights"
              component={AdminSocietyHighlights}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AdminSignin"
              component={AdminSignin}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AdminAddProximity"
              component={AdminAddProximity}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AdminAddContactsUs"
              component={AdminAddContactsUs}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AdminAddReraNumber"
              component={AdminAddReraNumber}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AdminAddInternalAmenities"
              component={AdminAddInternalAmenities}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AdminAddRooftopAmenities"
              component={AdminAddRooftopAmenities}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AdminAddSocietyHighlights"
              component={AdminAddSocietyHighlights}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AdminRegSignup"
              component={AdminRegSignup}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OwnerSignin"
              component={OwnerSignin}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AdminVerification"
              component={AdminVerification}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OwnerSignup"
              component={OwnerSignup}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Signin"
              component={Signin}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Code"
              component={Code}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Signup"
              component={Signup}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Bills"
              component={Bills}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Events1"
              component={Events1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Events"
              component={Events}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="COMPLAINTS"
              component={COMPLAINTS}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Member1"
              component={Member1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Emergency"
              component={Emergency}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Notice"
              component={Notice}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Menu"
              component={Menu}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Complaints1"
              component={Complaints1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Notice1"
              component={Notice1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Theme"
              component={Theme}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Developers"
              component={Developers}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Logout"
              component={Logout}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SocietyInfo"
              component={SocietyInfo}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Proximity"
              component={Proximity}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ContactsUs"
              component={ContactsUs}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Feature"
              component={Feature}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ReraNumber"
              component={ReraNumber}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="InternalAmenities"
              component={InternalAmenities}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RooftopAmenities"
              component={RooftopAmenities}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SocietyHighlights"
              component={SocietyHighlights}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <Splashscreen />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
