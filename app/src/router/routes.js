import EmployeeList from "@/components/EmployeeList";
import ProfileDetail from "@/components/ProfileDetail";

export default [
  {
    path: "/",
    get component() {
      if (process.env.VUE_APP_DEFAULT_PROFILE_ID) {
        return ProfileDetail
      } else {
        return EmployeeList
      }
    }
  },
  {
    name: "profile",
    path: "/profile/:profileId",
    component: ProfileDetail,
    props: true
  }
];
