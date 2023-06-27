import { TabBar } from "@/components/TabBar";
import { cookies } from "next/dist/client/components/headers";


export const metadata = {
  title: 'Cookies page',
  description: 'Cookies',
};

export default async function CookiesPage() {
  const cookieStore = cookies();
  const cookieTab = Number(cookieStore.get("selectedTab")?.value ?? '1');

  return (
    <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div className="flex flex-col">
        <span className="text-3xl">Tabs</span>
        <TabBar currentTab={ cookieTab } />
      </div>

    </div>
  );
}
