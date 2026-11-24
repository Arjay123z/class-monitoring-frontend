import { Routes, Route, Navigate } from "react-router-dom";
import InstructorLayout from "./components/InstructorLayout";
import PlaceholderPage from "./components/PlaceholderPage";
import InstructorLogin from "./pages/instructor/InstructorLogin";
import Dashboard from "./pages/instructor/Dashboard";
import ClassSelection from "./pages/instructor/ClassSelection";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/instructor/login"/>} />
      <Route path="/instructor/login" element={<InstructorLogin/>} />
      <Route path="/instructor/select-class" element={<ClassSelection />} />
      
       <Route element={<InstructorLayout />}>
          <Route path="/instructor/dashboard" element={<Dashboard />} />
          <Route path="/instructor/classes" element={<PlaceholderPage title="Classes" />} />
          <Route path="/instructor/sessions" element={<PlaceholderPage title="Sessions" />} />
          <Route path="/instructor/students" element={<PlaceholderPage title="Student Accounts" />} />
          <Route path="/instructor/distribution" element={<PlaceholderPage title="Activity Distribution" />} />
          <Route path="/instructor/rules" element={<PlaceholderPage title="Application Rules" />} />
          <Route path="/instructor/notifications" element={<PlaceholderPage title="Notifications" />} />
          <Route path="/instructor/submissions" element={<PlaceholderPage title="Submissions" />} />
          <Route path="/instructor/events" element={<PlaceholderPage title="Event Records" />} />
      </Route>
    </Routes>
  )
}

export default App