export const metadata = {
  title: "Dashboard | City Health Care",
  description: "Generated by create next app",
};

export default function DashboardLayout({ children }) {
  return (
    <div className="w-full h-screen ">
      <div>{children}</div>
    </div>
  );
}