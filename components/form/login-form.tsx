"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { Separator } from "@/components/ui/separator";
import TextSeperator from "../ui/text-seperator";
import { cn } from "@/lib/utils";
import BrandButtons from "./brand-buttons";
import CardWrapper from "../layout/components/card-wrapper";

const formSchema = z.object({
  email: z.string().email("Invalid email").min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(2, {
    message: "Password must be at least 2 characters.",
  }),
});

const LoginForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-[90vw] sm:w-[60vw] md:w-[40vw] lg:w-[30vw]"
      >
        <CardWrapper variant={"glass"}>
          <CardHeader>
            <CardTitle className="text-2xl">Sign In</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <BrandButtons />
            <TextSeperator text="Or Continue With" />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-white/10 border border-white/20 w-full"
                      placeholder="shadcn"
                      {...field}
                    />
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
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-white/10 border border-white/20 w-full"
                      type="password"
                      placeholder="shadcn"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <Button
              className={cn(
                buttonVariants({ variant: "secondary" }),
                "w-full color-primary"
              )}
              type="submit"
            >
              Submit
            </Button>
          </CardFooter>
        </CardWrapper>
      </form>
    </Form>
  );
};

export default LoginForm;
