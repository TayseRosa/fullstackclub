"use client";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { SignUpForm } from "@/components/sign-up-form";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

const AuthenticationPage = () => {
    const form = useForm();
    
    const onSubmit = (data: any) => {
    console.log(data);
    };

    
    return (
        <div className="h-screen w-screen flex items-center justify-center">
            <Tabs defaultValue="account" className="w-[400px]">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="register">Criar conta</TabsTrigger>
            </TabsList>


            <TabsContent value="login">
                <SignUpForm />
            </TabsContent>

        

            <TabsContent value="register">
                <Card>
                <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    
                    
               
                <CardHeader>
                    <CardTitle>Criar conta</CardTitle>
                    <CardDescription>
                    Crie uma conta para continuar
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Nome</FormLabel>
                        <FormControl>
                            <Input placeholder="Digite seu nome" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />

<FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>E-mail</FormLabel>
                        <FormControl>
                            <Input placeholder="Digite seu email" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />

<FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Senha</FormLabel>
                        <FormControl>
                            <Input placeholder="Digite sua senha" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                </CardContent>
                <CardFooter>
                    <Button type="submit">Submit</Button>
                </CardFooter>

                </form>
                </Form>
                </Card>
            </TabsContent>
            </Tabs>
        </div>
    );
}
 
export default AuthenticationPage;