import EmployeeList from "@/components/EmployeeList";
import ProfileDetail from "@/components/ProfileDetail";

export default [
  { path: "/", component: EmployeeList },
  { path: "/profile/:profileId", component: ProfileDetail }
];
