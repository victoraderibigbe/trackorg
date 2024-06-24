import Image from "next/image";
import Link from "next/link";
import logo from "../../../../../../public/trackorg.svg";
import ThemeToggle from "@/components/ThemeToggle";

const AdminDashboard = () => {
  return (
    <div>
      <nav className="flex items-center justify-between p-5 bg-light-secondary dark:bg-dark-secondary">
        <Link href="/">
          <Image src={logo} alt="TrackOrg Logo" width={100} />
        </Link>
        <ThemeToggle />
      </nav>

      <main>
        <h4 className="mt-5 text-center text-light-accent dark:text-dark-accent">
          Welcome, Admin
        </h4>
      </main>
    </div>
  );
};

export default AdminDashboard;
