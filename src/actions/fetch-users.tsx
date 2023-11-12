
import api from "@/services/api"
import { cookies } from 'next/headers'


export async function fetchUsers() {
    const token = cookies().get('jwt')
    try {
        const response = await fetch('http://localhost:3002/user/all', {
            headers: {
              'Authorization': `Bearer ${token?.value}`
            },
            cache: 'no-store'
          });

        return await response.json()
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
    
}