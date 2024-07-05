import { Navbar } from "@/components/layout/navbar";

interface ContentLayoutProps {
  title: string;
  children: React.ReactNode;
}

export function ContentLayout({ title, children }: ContentLayoutProps) {
  return (
    <div>
      {/* <Navbar title={title} /> */}
      <div className="h-[90vh] px-8">{children}</div>
    </div>
  );
}
