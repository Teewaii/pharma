import Image from "next/image";

import TopBar from "@/components/utils/TopBar";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <main>
      <TopBar />
      <header>
        <NavBar />
      </header>
    </main>
  );
}
