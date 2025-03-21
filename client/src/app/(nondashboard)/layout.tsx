import NonDashBoardNavbar from "@/components/NonDashboardNavbar";
import Footer from "@/components/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  console.log("Home component rendered!");
  return (
    <div className="nondashboard-layout">
      <NonDashBoardNavbar />
      <main className="nondashboard-layout__main">{children}</main>
      <Footer />
    </div>
  );
}
