import { Route, Routes } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginScreen />} />
      <Route path="/profile" element={<ProfileScreen />} />
    </Routes>
  );
}

export default App;
