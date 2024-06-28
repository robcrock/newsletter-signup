"use client";

import { useState } from "react";
import { CardSignUp, formSchema } from "@/components/fem-card-sign-up";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { CardSuccess } from "@/components/fem-card-success";

export default function Home() {
  const [isNotSignedUp, setIsNotSignedUp] = useState(true);
  const isSignedUp = !isNotSignedUp;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    console.log("form state", form.formState);
    form.reset();
    setIsNotSignedUp(false);
  };

  const handleDismiss = () => {
    setIsNotSignedUp(true);
  };

  return (
    <main className="flex h-screen flex-col items-center justify-start gap-0 md:justify-center md:bg-gray-700 md:p-24">
      {isNotSignedUp && <CardSignUp form={form} handleSubmit={handleSubmit} />}
      {isSignedUp && <CardSuccess handleDismiss={handleDismiss} />}
    </main>
  );
}
