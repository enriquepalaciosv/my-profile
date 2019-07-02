import EmployeeList from "@/components/EmployeeList";
import ProfileDetail from "@/components/ProfileDetail";

export default [
  { path: "/", component: EmployeeList },
  {
    name: "profile",
    path: "/profile/:profileId",
    component: ProfileDetail,
    props: true
  }
];
