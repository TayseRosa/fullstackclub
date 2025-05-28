import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export default function SignUpForm() {
    const registerSchema = z.object({
        name: z.string().trim().min(1, {message:"Nome é obrigatório"}),
        email: z.string().trim().min(1, {message:"Email inválido"}),
        password: z.string().trim().min(8, {message:"Senha deve ter no mínimo 8 caracteres"}),
    })


    const form = useForm<z.infer<typeof registerSchema>>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
          name: "",
          email: "",
          password: "",
        },
      })

    function onSubmit(values: z.infer<typeof registerSchema>) {
        console.log(values)
    }  

    return (
        <Card>
                <CardHeader>
                    <CardTitle>Login</CardTitle>
                    <CardDescription>
                    Faça login para continuar
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    
                </CardContent>
                <CardFooter>
                    <Button>Salvar</Button>
                </CardFooter>
                </Card>
    )
}