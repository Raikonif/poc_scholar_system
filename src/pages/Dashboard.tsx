import TableInformation from "~/components/TableInformation";
import AvatarProfile from "../components/AvatarProfile";
import PrimaryButton from "../components/PrimaryButton";
function Dashboard() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <h1>Dashboard</h1>
      <AvatarProfile />
      <PrimaryButton />
      <TableInformation />
    </div>
  );
}

export default Dashboard;
