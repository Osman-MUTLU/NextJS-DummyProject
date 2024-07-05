import DashboardLayout from "@/components/layout/dashboard-layout";

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
