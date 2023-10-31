"use client"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
  
export function RecentUsers({ count, lastUsers }: any) {
    return (
      <Card className="col-span-3">
        <CardHeader>
          <CardTitle>Novos usuários</CardTitle>
          <CardDescription>
            Você fez {count} novos usuários essa semana.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {lastUsers?.map((user: any, index: number) => (
              <div className="flex items-center" key={index}>
                <Avatar className="h-9 w-9">
                  <AvatarImage src={`/avatars/${index % 2 + 1}.png`} alt="Avatar" />
                  <AvatarFallback>{user.name[0].toUpperCase()}{user.name[1]}</AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1">
                  <p className="text-sm font-medium leading-none">{user.name}</p>
                  <p className="text-sm text-muted-foreground">{user.email}</p>
                </div>
                <div className="ml-auto font-medium">
                  {new Date(user.createdAt).toLocaleDateString('pt-BR')}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
}
  