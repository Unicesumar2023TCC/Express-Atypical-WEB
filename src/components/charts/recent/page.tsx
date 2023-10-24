import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
  
  export function RecentUsers() {
    return (
        <Card className="col-span-3">
            <CardHeader>
                <CardTitle>Novos usuários</CardTitle>
                <CardDescription>
                Você fez 2 novo usuários essa semana.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-8">
                    <div className="flex items-center">
                    <Avatar className="h-9 w-9">
                        <AvatarImage src="/avatars/01.png" alt="Avatar" />
                        <AvatarFallback>OM</AvatarFallback>
                    </Avatar>
                    <div className="ml-4 space-y-1">
                        <p className="text-sm font-medium leading-none">Matheus</p>
                        <p className="text-sm text-muted-foreground">
                        matheus@gmail.com
                        </p>
                    </div>
                    <div className="ml-auto font-medium">23/10/2023</div>
                    </div>
                    <div className="flex items-center">
                    <Avatar className="h-9 w-9">
                        <AvatarImage src="/avatars/01.png" alt="Avatar" />
                        <AvatarFallback>OM</AvatarFallback>
                    </Avatar>
                    <div className="ml-4 space-y-1">
                        <p className="text-sm font-medium leading-none">Matheus</p>
                        <p className="text-sm text-muted-foreground">
                        matheus@gmail.com
                        </p>
                    </div>
                    <div className="ml-auto font-medium">23/10/2023</div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
  }