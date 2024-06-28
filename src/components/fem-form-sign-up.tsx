import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { formSchema } from "./fem-card-sign-up";
import { UseFormReturn } from "react-hook-form";

type Props = {
  form: UseFormReturn<
    {
      email: string;
    },
    any,
    undefined
  >;
  handleSubmit: (values: z.infer<typeof formSchema>) => void;
};

export const FormSignUp = ({ form, handleSubmit }: Props) => {
  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-6"
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="grid w-full max-w-sm items-center">
              <div className="flex justify-between">
                <FormLabel className="text-xs" htmlFor="email">
                  Email address
                </FormLabel>
                <FormMessage className="text-xs" />
              </div>
              <FormControl>
                <Input placeholder="email@company.com" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button
          className="w-full bg-dark-slate-grey hover:bg-gradient-to-bl hover:from-[#FF6A3A] hover:to-[#FF527B] hover:shadow-[0px_16px_32px_0px_#FF615550]"
          type="submit"
        >
          Subscribe to monthly newsletter
        </Button>
      </form>
    </Form>
  );
};
