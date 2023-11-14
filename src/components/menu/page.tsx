"use client"
import Image from "next/image";
import Link from "next/link";
import { UserContext } from '@/context/UserAuth';
import { useContext } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDownIcon  } from "lucide-react";
import { useToast } from "@/components/ui/use-toast"


export default function Menu() {
  const { toast } = useToast()

  const { user } = useContext(UserContext); 
  const { logout } = useContext(UserContext); 

  const handleLogout = async () => {
    await logout()
    toast({
      description: "Logout realizado com sucesso.",
    })
  }
  
  return (
    <nav className="z-10 flex items-center justify-between flex-wrap bg-express-blue p-5 fixed w-full">
      <div className="container mx-auto flex justify-between">
        <div className="flex items-center">
          <Link href={(user ? `/app-express` : `/`)}>
            <Image src="/img/quebra-cabeca.png"  alt=";;" width={50} height={50}/>
          </Link>
        </div>
        <div className="flex items-center space-x-3">
          {user && (
            <>
              <a href={'/app-express/usuarios'}>
                <span className="text-2xl text-express font-bod uppercase">Usuários</span>
              </a>

              <a href={'/app-express/logs'}>
                <span className="text-2xl text-express font-bod uppercase">Logs</span>
              </a>
              


              <>
                <Avatar>
                  <AvatarImage alt={`${user.name}`} />
                  <AvatarFallback>{user.name?.charAt(0).toUpperCase()}</AvatarFallback>
                </Avatar>
              
                <DropdownMenu>
                  <DropdownMenuTrigger><ChevronDownIcon  /></DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleLogout}>Sair</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}
