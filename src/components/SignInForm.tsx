import { useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod"
import * as z from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import GoogleLogo from "@/assets/google.png"
import { Link } from "react-router-dom";
import { toast } from "sonner"
import { signInFormSchema } from "@/validation/signInform.schema";
const SignInForm=()=>{
  const [isSubmitting,setisSubmitting]=useState(false)
  const form = useForm<z.infer<typeof signInFormSchema>>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      email:"",
      password:""
    },
  })

  function onSubmit(values: z.infer<typeof signInFormSchema>) {
try {
   console.log(values)
  toast.success("check your email");
} catch (error:any) {
    console.log("error",error)
  toast.error(error.message || "Something went wrong.");

}
  }
    return (
        <div className="flex flex-col w-full h-full bg-white px-5">
   <h1 className="text-center text-xl font-medium  tracking-wide" style={{ fontFamily: 'var(--font-inter)' }}>Welcome Back!</h1>
   <p className="text-center text ">please fill your Details Below</p>
<Form {...form}> 
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">


<FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />

<FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />

            <Button type="submit" disabled={isSubmitting} className='w-full rounded-none text-white text-md bg-[#DB4444] hover:bg-[#e43636] '>
              {isSubmitting ? <Loader2 className="animate-spin h-4 w-4 " /> : "Submit"}
            </Button>
            <Button type="button" disabled={isSubmitting} className='w-full rounded-none border text-black text-md bg-white hover:bg-slate-100'>
<img src={GoogleLogo} alt="google" height={20} width={20} className="h-full "/>
Sign In with Google
            </Button>
            <div className="flex flex-wrap items-center justify-center">
                <span className="text-md text-black ">you dont have an Account?</span>
                <Link to={'/signup'} className="underline hover:text-black text-gray-400">Signup</Link>
            </div>
          </form>
        </Form>

        </div>
    )
}

export default SignInForm;