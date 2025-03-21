import NonDashBoardNavbar from "@/components/NonDashboardNavbar";
import Landing from "@/app/(nondashboard)/landing/page";
import Footer from "@/components/Footer";

export default function Home() {
  console.log("Home component rendered!");
  return (
    <div className="nondashboard-layout">
      <NonDashBoardNavbar />
      <main className="nondashboard-layout__main">
        <Landing />
      </main>
      <Footer />
    </div>
  );
}
