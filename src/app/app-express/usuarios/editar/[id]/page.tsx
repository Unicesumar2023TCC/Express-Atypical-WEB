
import FormUser from "@/components/forms/user/page";
import api from "@/services/api"
import { cookies } from 'next/headers'


const UserData = async (id: string) => {

  const token = cookies().get('jwt')
  const response = await api.get(`user/${id}`, {
    headers: {
      'Authorization': `Bearer ${token?.value}`
    },
  });
  return response.data
}

export default async function Usuario({ params }: { params: { id: string } }) {

  const userData = await UserData(params.id);

  return (
    <section className="flex justify-center items-center px-4 sm:px-6 lg:px-8 pt-16 md:pt-20 container"> 
      <div className="text-center space-y-6 w-full max-w-screen-lg md:max-w-screen-xl lg:max-w-screen-2xl pt-20">
        <h1 className="text-4xl text-express-blue">Editar usuário {userData.name}</h1>
        <div className="pt-5">
          <div className="overflow-x-auto">
            <FormUser user={userData}/>
          </div>
        </div>
      </div>
    </section>
  )
}
