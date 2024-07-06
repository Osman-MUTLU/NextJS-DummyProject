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
import Link from "next/link";

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
            <CardDescription>
              Please sign in to continue to your account.
            </CardDescription>
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
                      className="bg-secondary dark:bg-secondary/20 w-full"
                      placeholder="user@example.com"
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
                      className="bg-secondary dark:bg-secondary/20 w-full"
                      type="password"
                      placeholder="********"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <div className="flex flex-col w-full space-y-4">
            <div className="flex justify-between items-center px-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded-sm border border-gray-300 dark:border-gray-700"
                />
                <FormDescription className="ml-2">Remember me</FormDescription>
              </div>
              <Button variant={"link"} className="text-xs color-secondary" type="button">
                <Link href="/forgot-password">
                  <div className="text-primary">Forgot password?</div>
                </Link>
              </Button>
            </div>
            <Button
              className={cn(
                buttonVariants({ variant: "secondary" }),
                "w-full "
              )}
              type="submit"
            >
              Submit
            </Button>
            </div>
          </CardFooter>
        </CardWrapper>
      </form>
    </Form>
  );
};

export default LoginForm;
