import api from "@/services/api";
import { IncomingMessage } from "http";

export default async function checkAuthUser(req: IncomingMessage & { cookies: Partial<{ [key: string]: string; }>; }){
    try {
        const response = await api.get('http://localhost:3000/api/user', {
            headers: {
                'Authorization': `Bearer ${req.cookies.jwt}`
            },
        });

        const user = response.data;
        console.log(req.cookies.jwt)
        return user;
    } 
    catch (error) {
        // Trate o erro de acordo com suas necessidades
        return false
    }
}