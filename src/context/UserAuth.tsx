"use client"
import { createContext, useState, useEffect, SetStateAction } from 'react';
import api from '@/services/api';
import { useRouter } from "next/navigation";

type Message = {
  message: string,
  status: Boolean
}
// Defina o tipo de dados do usuário
type User = {
  id: number | null;
  name: string | null;
  email: string | null;
  password: string | '';
  type: string | null;
};
type UserLogin = {
  email: string ;
  password: string ;
}
interface UserContextData {
  user: User | null;
  login: (userData: UserLogin) => Promise<Message>;
  logout: () => Promise<void>;
}
// Crie o contexto
export const UserContext = createContext<UserContextData>({
  user: null,
  login: async () => ({ message: '', status: false }),
  logout: async () => {},
});
interface Props {
    children: React.ReactNode;
}

// Crie um componente de provedor para envolver seus componentes
export const UserProvider: React.FC<Props> = ({ children }) => {
  const Router = useRouter();

  const [user, setUser] = useState<User | null>(null);


  useEffect(() => {
    const fetchUser = async () => {
      try {
        // Faça a requisição para obter os dados do usuário logado
        const response = await api.get<User>('user');

          
        if(response.data){
          setUser(response.data)
        }else{
          setUser(null)
        }
      } catch (error) {
        setUser(null);
      }
    };

    fetchUser();
  }, []);

  const login = async (userData: UserLogin) => {

    try {

      const response = await api.post(`login`, userData)
      console.log(response)

      const userAuth = await api.get(`user`)

      setUser(userAuth.data);
      Router.push('/app-express')
      return {
        message: 'Login realizado com sucecsso',
        status: true
      }
      

    } catch (error) {
      return {
        message: 'Login inválido',
        status: false
      }
    }

  };






  const logout = async () => {

    await api.post('logout');

    setUser(null);
    Router.push('/')
  };






  return <UserContext.Provider value={{ user, login, logout }}>{children}</UserContext.Provider>;
};