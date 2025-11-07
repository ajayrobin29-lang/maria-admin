import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import ChatView from "@/components/ChatVew";

export default async function Page() {

  const session = await getServerSession(authOptions);
  if (!session) redirect("/login");

  return (
    <div className="flex h-screen w-full">
  
      <ChatView />
      
    </div>
  );
}