import Document from "@/components/document";
import Sidebar from "@/components/sidebar";

export default function Home() {
  return (
    <div className="flex w-full h-full relative">
      <main className="flex w-full h-full flex-row justify-end gap-[32px] row-start-2 items-center sm:items-start blur-sm">
        <Document />
      </main>
      <Sidebar />
    </div>
  );
}
