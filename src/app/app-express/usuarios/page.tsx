
import { DataTable } from "@/components/tables/logs/page";
import api from "@/services/api"
import { cookies } from 'next/headers'
import { User, columns } from "./columns"


const DataLogs = async () => {
  const token = cookies().get('jwt')
  const response = await api.get('user/all', {
    headers: {
      'Authorization': `Bearer ${token?.value}`
    },
  });
  return response.data
}

export default async function Logs(){
  const usersData = await DataLogs();

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
