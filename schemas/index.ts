import {z} from 'zod';

export const LoginSchema = z.object({
  email: z.string().min(1,{
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(1,{
    message: "Please enter your password.",
  }),
});

export const RegisterSchema = z.object({
  name: z.string().min(1,{
    message: "Please enter your password.",
  }),
  surname: z.string().min(1,{
    message: "Please enter your password.",
  }),
  phone: z.string().min(1,{
    message: "Please enter your password.",
  }),
  
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(1,{
    message: "Please enter your password.",
  }),
  confirm_password: z.string().min(1,{
    message: "Please enter your password.",
  }),

}).refine(data => data.password === data.confirm_password, {
  message: "Passwords do not match.",
  path: ["confirm_password"],
});