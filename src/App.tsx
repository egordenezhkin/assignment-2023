import { Route, Routes } from "react-router-dom";
import { LoginScreen } from "./screens/LoginScreen/LoginScreen";
import { ProfileScreen } from "./screens/ProfileScreen/ProfileScreen";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginScreen />} />
      <Route path="/logout" element={<ProfileScreen />} />
    </Routes>
  );
}

export default App;
