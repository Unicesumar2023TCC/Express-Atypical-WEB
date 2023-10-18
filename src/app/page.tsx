"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { UserContext } from '@/context/UserAuth';
import { ChangeEvent, SyntheticEvent, useContext, useState } from "react";
import { useToast } from "@/components/ui/use-toast"

export default function Login() {
  const { toast } = useToast()

  const [isLoading, setIsLoading] = useState(false)
  const { login } = useContext(UserContext); 
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleLogin(event: SyntheticEvent) {
    setIsLoading(true)
    event.preventDefault();

      const userData = { email: email, password: password };
      const response = await login(userData)

      if(response.status){
        toast({
          variant: "default",
          description: "Login realizado com sucesso.",
        })
      }else{
        toast({
          variant: "destructive",
          description: response.message,
        })
      }
      

      
    
    setIsLoading(false)
  }
  return (
    <section className="h-screen flex justify-center items-center">
      <div className="text-center space-y-6">
        <div className="grid justify-center">
          <img src="/img/puzzle-game.png" alt="Exprexx Atypical" />
        </div>
        <h1 className="text-4xl text-express-blue">Express Atypical</h1>
        <form className="pt-5 grid gap-4" onSubmit={handleLogin}>
          <Input 
            required 
            type="email" className="p-4 rounded-md" placeholder="E-mail"
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setEmail(event.target.value)
            }
          />
          <Input required type="password" className="p-4 rounded-md" placeholder="Senha"
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setPassword(event.target.value)
            }
          
          />

          <Button
            type="submit"
            variant="outline"
            className="p-4 text-white bg-express-green hover:bg-[#93F283] rounded-lg"
          >
            Login
          </Button>
          <Link href={"esqueci-a-senha"} >Esqueceu a senha?</Link>
        </form>
      </div>
    </section>
  )
}
