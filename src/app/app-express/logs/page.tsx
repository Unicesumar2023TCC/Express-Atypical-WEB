import { DataTable } from "@/components/tables/logs/page";
import api from "@/services/api"
import { ColumnDef } from "@tanstack/react-table";
import { cookies } from 'next/headers'
import { ArrowUpDown, MoreHorizontal } from "lucide-react"

const DataLogs = async () => {
    
    const token = cookies().get('jwt')
    console.log(token)
    const response = await api.get('logs', {
        headers: {
            'Authorization': `Bearer ${token?.value}`
          },
    });
    return response.data
}
type Payment = {
    id: string
    amount: number
    status: "pending" | "processing" | "success" | "failed"
    email: string
  }
const columns: ColumnDef<Payment>[] = [
    {
      accessorKey: "idUser",
      header: "Id Usuário",
    },
    {
      accessorKey: "idReference",
      header: "Registro",
    },
    {
      accessorKey: "origem",
      header: "Tabela",
    },
    {
        accessorKey: "action",
        header: "Ação",
    },
    {
    accessorKey: "time",
    header: "Data",
    }
  ]

export default async function Logs(){
    const logdata = await DataLogs();
    
    return (
        <section className="flex justify-center items-center px-4 sm:px-6 lg:px-8 pt-16 md:pt-20 container"> 
          <div className="text-center space-y-6 w-full max-w-screen-lg md:max-w-screen-xl lg:max-w-screen-2xl pt-20">
            <h1 className="text-4xl text-express-blue">Logs</h1>
            <div className="pt-5">
              <div className="overflow-x-auto">
                <DataTable data={logdata} columns={columns} />
              </div>
            </div>
          </div>
        </section>
    )
}