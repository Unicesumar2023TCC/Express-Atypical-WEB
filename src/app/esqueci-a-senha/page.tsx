import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function EsqueciSenha() {

  return (
    <section className="h-screen flex justify-center items-center">
      <div className="text-center space-y-6">
        <div className="grid justify-center">
          <img src="/img/puzzle-game.png" alt="Exprexx Atypical" />
        </div>
        <h1 className="text-4xl text-express-blue">Express Atypical</h1>
        <h1 className="text-2xl text-express-blue">Esqueci a senha</h1>
        <form className="pt-5 grid gap-4">
            <Input required type="email" className="p-4 rounded-md" placeholder="E-mail"/>
            <Button
                type="submit"
                variant="outline"
                className="p-4 text-white bg-express-green hover:bg-[#93F283] rounded-lg"
                >
                Recupere sua senha
            </Button>
            <Button
                type="submit"
                variant="outline"
                className="p-4 text-white bg-express-blue hover:bg-[#536cf8cb] rounded-lg"
                >
                Realizar login
            </Button>
        </form>
      </div>
    </section>
  )
}
