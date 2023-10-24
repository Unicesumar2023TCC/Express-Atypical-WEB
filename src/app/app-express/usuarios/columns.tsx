"use client"
import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import api from "@/services/api"
import { useRouter } from 'next/router';
import Link from "next/link"

export type User = {
    id: string
    name: string
    email: string
    birthDate: string
    phone: string
    type: string
  }
  
export const columns: ColumnDef<User>[] = [
    {
      accessorKey: "name",
      header: "Nome",
    },
    {
      accessorKey: "email",
      header: "E-mail",
    },
    {
      accessorKey: "birthDate",
      header: "Data de nascimento",
    },
    {
      accessorKey: "phone",
      header: "Telefone",
    },
    {
      accessorKey: "type",
      header: "Tipo",
    },
    {
        id: "actions",
        header: "Ações",
        cell: ({ row }) => {
          const user = row.original
     
          return (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Abrir menu</span>
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">

                <DropdownMenuLabel>Ações</DropdownMenuLabel>
                <DropdownMenuSeparator />
                
                <Link href={`usuarios/editar/${user.id}`}>
                    <DropdownMenuItem>
                        Editar
                    </DropdownMenuItem>
                </Link>

                <DropdownMenuItem
                    onClick={() => handleDelete(user)}
                >
                    Deletar
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )
        },
      },
  ]
  
const handleDelete = async (row: any) => {
    const confirmDelete = window.confirm(`Deseja realmente excluir o usuário ${row.name}?`);

    if (confirmDelete) {
        try {
        await api.delete(`user/${row.id}`);
        alert(`${row.name} deletado com sucesso`);
        } catch (error) {
        console.log(error);
        }
    }
};
  