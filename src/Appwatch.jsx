import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import AppSelection from "./pages/DeviceGuide/SmartWatch/AppSelection";
import LodingPageA from "./pages/DeviceGuide/SmartWatch/LodingPageA";
import BluetoothOn from "./pages/DeviceGuide/SmartWatch/BluetoothOn";
import InstallationPermissionA from "./pages/DeviceGuide/SmartWatch/InstallationPermissionA";
import InstallationPermissionB from "./pages/DeviceGuide/SmartWatch/InstallationPermissionB";
import InstallationPermissionC from "./pages/DeviceGuide/SmartWatch/InstallationPermissionC";
import MatchingNumber from "./pages/DeviceGuide/SmartWatch/MatchingNumber";
import WatchAccessGranted from "./pages/DeviceGuide/SmartWatch/WatchAccessGranted";
import LodingPageB from "./pages/DeviceGuide/SmartWatch/LodingPageB";
import SoftwareAgreeA from "./pages/DeviceGuide/SmartWatch/SoftwareAgreeA";
import SoftwareAgreeB from "./pages/DeviceGuide/SmartWatch/SoftwareAgreeB";
import GoogleAgree from "./pages/DeviceGuide/SmartWatch/GoogleAgree";
import BluetoothOff from "./pages/DeviceGuide/SmartWatch/BluetoothOff";
import MainSettings from "./pages/DeviceGuide/SmartWatch/MainSettings";
import ConnectionSettings from "./pages/DeviceGuide/SmartWatch/ConnectionSettings";
import BluetoothConnection from "./pages/DeviceGuide/SmartWatch/BluetoothConnection";
import LodingPageC from "./pages/DeviceGuide/SmartWatch/LodingPageC";
import GoogleLogin from "./pages/DeviceGuide/SmartWatch/GoogleLogin";
import UseAppSelect from "./pages/DeviceGuide/SmartWatch/UseAppSelect";
import BackupInfo from "./pages/DeviceGuide/SmartWatch/BackupInfo";
import EmergencyGuide from "./pages/DeviceGuide/SmartWatch/EmergencyGuide";
import HeartRhythmGuide from "./pages/DeviceGuide/SmartWatch/HeartRhythmGuide";
import LodingPageD from "./pages/DeviceGuide/SmartWatch/LodingPageD";
import PreInstallAppPermission from "./pages/DeviceGuide/SmartWatch/PreInstallAppPermission";
import LodingPageE from "./pages/DeviceGuide/SmartWatch/LodingPageE";
import SetupComplete from "./pages/DeviceGuide/SmartWatch/SetupComplete";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/DeviceGuide/SmartWatch/":
        title = "";
        metaDescription = "";
        break;
      case "/DeviceGuide/SmartWatch/lodingpagea-07":
        title = "";
        metaDescription = "";
        break;
      case "/DeviceGuide/SmartWatch/bluetoothon-05":
        title = "";
        metaDescription = "";
        break;
      case "/DeviceGuide/SmartWatch/installationpermissiona-08":
        title = "";
        metaDescription = "";
        break;
      case "/DeviceGuide/SmartWatch/installationpermissionb-09":
        title = "";
        metaDescription = "";
        break;
      case "/DeviceGuide/SmartWatch/installationpermissionc-10":
        title = "";
        metaDescription = "";
        break;
      case "/DeviceGuide/SmartWatch/matchingnumber-11":
        title = "";
        metaDescription = "";
        break;
      case "/DeviceGuide/SmartWatch/watchaccessgranted-12":
        title = "";
        metaDescription = "";
        break;
      case "/DeviceGuide/SmartWatch/lodingpageb-13":
        title = "";
        metaDescription = "";
        break;
      case "/DeviceGuide/SmartWatch/softwareagreea-14":
        title = "";
        metaDescription = "";
        break;
      case "/DeviceGuide/SmartWatch/softwareagreeb-15":
        title = "";
        metaDescription = "";
        break;
      case "/DeviceGuide/SmartWatch/googleagree-16":
        title = "";
        metaDescription = "";
        break;
      case "/DeviceGuide/SmartWatch/bluetoothoff-04":
        title = "";
        metaDescription = "";
        break;
      case "/DeviceGuide/SmartWatch/mainsettings-02":
        title = "";
        metaDescription = "";
        break;
      case "/DeviceGuide/SmartWatch/connectionsettings-03":
        title = "";
        metaDescription = "";
        break;
      case "/DeviceGuide/SmartWatch/bluetoothconnection-06":
        title = "";
        metaDescription = "";
        break;
      case "/DeviceGuide/SmartWatch/lodingpagec-17":
        title = "";
        metaDescription = "";
        break;
      case "/DeviceGuide/SmartWatch/googlelogin-18":
        title = "";
        metaDescription = "";
        break;
      case "/DeviceGuide/SmartWatch/useappselect-19":
        title = "";
        metaDescription = "";
        break;
      case "/DeviceGuide/SmartWatch/backupinfo-20":
        title = "";
        metaDescription = "";
        break;
      case "/DeviceGuide/SmartWatch/emergencyguide-21":
        title = "";
        metaDescription = "";
        break;
      case "/DeviceGuide/SmartWatch/-heartrhythmguide-22":
        title = "";
        metaDescription = "";
        break;
      case "/DeviceGuide/SmartWatch/lodingpaged-23":
        title = "";
        metaDescription = "";
        break;
      case "/DeviceGuide/SmartWatch/preinstallapppermission-24":
        title = "";
        metaDescription = "";
        break;
      case "/DeviceGuide/SmartWatch/lodingpagee-25":
        title = "";
        metaDescription = "";
        break;
      case "/DeviceGuide/SmartWatch/setupcomplete-26":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/DeviceGuide/SmartWatch/" element={<AppSelection />} />
      <Route path="/DeviceGuide/SmartWatch/lodingpagea-07" element={<LodingPageA />} />
      <Route path="/DeviceGuide/SmartWatch/bluetoothon-05" element={<BluetoothOn />} />
      <Route path="/DeviceGuide/SmartWatch/installationpermissiona-08" element={<InstallationPermissionA />} />
      <Route path="/DeviceGuide/SmartWatch/installationpermissionb-09" element={<InstallationPermissionB />} />
      <Route path="/DeviceGuide/SmartWatch/installationpermissionc-10" element={<InstallationPermissionC />} />
      <Route path="/DeviceGuide/SmartWatch/matchingnumber-11" element={<MatchingNumber />} />
      <Route path="/DeviceGuide/SmartWatch/watchaccessgranted-12" element={<WatchAccessGranted />} />
      <Route path="/DeviceGuide/SmartWatch/lodingpageb-13" element={<LodingPageB />} />
      <Route path="/DeviceGuide/SmartWatch/softwareagreea-14" element={<SoftwareAgreeA />} />
      <Route path="/DeviceGuide/SmartWatch/softwareagreeb-15" element={<SoftwareAgreeB />} />
      <Route path="/DeviceGuide/SmartWatch/googleagree-16" element={<GoogleAgree />} />
      <Route path="/DeviceGuide/SmartWatch/bluetoothoff-04" element={<BluetoothOff />} />
      <Route path="/DeviceGuide/SmartWatch/mainsettings-02" element={<MainSettings />} />
      <Route path="/DeviceGuide/SmartWatch/connectionsettings-03" element={<ConnectionSettings />} />
      <Route path="/DeviceGuide/SmartWatch/bluetoothconnection-06" element={<BluetoothConnection />} />
      <Route path="/DeviceGuide/SmartWatch/lodingpagec-17" element={<LodingPageC />} />
      <Route path="/DeviceGuide/SmartWatch/googlelogin-18" element={<GoogleLogin />} />
      <Route path="/DeviceGuide/SmartWatch/useappselect-19" element={<UseAppSelect />} />
      <Route path="/DeviceGuide/SmartWatch/backupinfo-20" element={<BackupInfo />} />
      <Route path="/DeviceGuide/SmartWatch/emergencyguide-21" element={<EmergencyGuide />} />
      <Route path="/DeviceGuide/SmartWatch/-heartrhythmguide-22" element={<HeartRhythmGuide />} />
      <Route path="/DeviceGuide/SmartWatch/lodingpaged-23" element={<LodingPageD />} />
      <Route path="/DeviceGuide/SmartWatch/preinstallapppermission-24" element={<PreInstallAppPermission />} />
      <Route path="/DeviceGuide/SmartWatch/lodingpagee-25" element={<LodingPageE />} />
      <Route path="/DeviceGuide/SmartWatch/setupcomplete-26" element={<SetupComplete />} />
    </Routes>
  );
}
export default App;
