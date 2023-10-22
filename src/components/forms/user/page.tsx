"use client"
import ButtonLoading from "@/components/loadingButton/page"
import { Button } from "@/components/ui/button"
import api from "@/services/api"
import { Input } from "@/components/ui/input"
import { ChangeEvent, useState } from "react"
import Link from "next/link"



export default function FormUser(User : any){
    const user = User.user;
    
    const [isLoading, setIsLoading] = useState(false)

    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [birthDate, setBirthDate] = useState(user.birthDate)
    const [phone, setPhone] = useState(user.phone)
    
    return (
        <form className="pt-5 grid grid-cols-2 gap-4 container" >
            <Input
                required 
                value={name}
                type="name" className="p-4 rounded-md" placeholder="Nome"
                    onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    setName(event.target.value)
                }
            />
            <Input
                required 
                value={email}
                type="email" className="p-4 rounded-md" placeholder="E-mail"
                    onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    setEmail(event.target.value)
                }
            />
            <Input
                required 
                value={birthDate}
                type="date" className="p-4 rounded-md"
                    onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    setBirthDate(event.target.value)
                }
            />
            <Input
                required 
                value={phone}
                type="text" className="p-4 rounded-md" placeholder="Telefone"
                    onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    setPhone(event.target.value)
                }
            />
        
            {!isLoading ? (
                <>
                    <Link
                        href={"/app-express/usuarios"}
                        className="text-center flex justify-center items-center text-white bg-express-red hover:bg-[red] rounded-lg outline"
                    >
                        Cancelar
                    </Link>

                    <Button
                        type="submit"
                        variant="outline"
                        className="p-4 text-white bg-express-green hover:bg-[#93F283] rounded-lg"
                    >
                        Salvar
                    </Button>
                </>
                
            ) : (
                <>
                    <ButtonLoading />
                    <ButtonLoading />
                </>
            )}
            
        </form>
    )
}
