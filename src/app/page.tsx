import Document from "@/components/document";
import Sidebar from "@/components/sidebar";

export default function Home() {
  return (
    <div className="flex w-full h-full">
      <main className="flex w-full h-full flex-row justify-between gap-[32px] row-start-2 items-center sm:items-start">
        <Sidebar />
        <Document />
      </main>
    </div>
  );
}
