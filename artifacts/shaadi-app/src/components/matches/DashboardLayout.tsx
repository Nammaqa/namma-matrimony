import Navbar from "./Navbar";
import BottomNav from "./BottomNav";

interface DashboardLayoutProps {
  setIsLoggedIn: (value: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

export default function DashboardLayout({ setIsLoggedIn, children, className = "" }: DashboardLayoutProps) {
  return (
    <div className={`min-h-screen bg-[#FFF8F5] flex flex-col pb-16 md:pb-0 ${className}`}>
      <Navbar setIsLoggedIn={setIsLoggedIn} />
      <main className="flex-1">
        {children}
      </main>
      <BottomNav setIsLoggedIn={setIsLoggedIn} />
    </div>
  );
}
