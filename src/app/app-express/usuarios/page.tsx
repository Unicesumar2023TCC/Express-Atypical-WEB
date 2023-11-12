
import { DataTable } from "@/components/tables/logs/page";
import { User, columns } from "./columns"
import { fetchUsers } from "@/actions/fetch-users";
export const revalidate = 0;
export const dynamic = "force-dynamic";

export default async function Logs(){
  const usersData = await fetchUsers();

  return (
    <section className="flex justify-center items-center px-4 sm:px-6 lg:px-8 pt-16 md:pt-20 container"> 
      <div className="text-center space-y-6 w-full max-w-screen-lg md:max-w-screen-xl lg:max-w-screen-2xl pt-20">
        <h1 className="text-4xl text-express-blue">Usuários</h1>
        <div className="pt-5">
          <div className="overflow-x-auto">
            <DataTable data={usersData} columns={columns} />
          </div>
        </div>
      </div>
    </section>
  )
}
