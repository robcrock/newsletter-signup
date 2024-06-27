import illustration_desktop from "@/../public/images/illustration-sign-up-desktop.svg";
import illustration_mobile from "@/../public/images/illustration-sign-up-mobile.svg";
import icon_list from "@/../public/images/icon-list.svg";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useWindowSize } from "@uidotdev/usehooks";
import { UseFormReturn } from "react-hook-form";

export const formSchema = z.object({
  email: z.string().email("Valid email required"),
});

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

export const CardSignUp = ({ form, handleSubmit }: Props) => {
  const { width } = useWindowSize();
  if (!width) return null;
  const mobile = width < 768;

  const illustration = mobile ? illustration_mobile : illustration_desktop;

  return (
    <Card className="flex w-full flex-col-reverse items-center gap-0 rounded-none p-0 md:h-[641px] md:w-[928px] md:flex-row md:gap-6 md:rounded-[36px] md:p-6">
      <section className="w-[375px] p-6 md:w-full md:p-9">
        <CardHeader className="mb-6 flex flex-col gap-2 p-0 md:gap-6">
          <CardTitle className="text-[40px] font-bold md:text-5xl">
            Stay updated!
          </CardTitle>
          <CardDescription className="text-base">
            Join 60,000+ product managers receiving monthly updates on:
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-10 p-0">
          <ul className="flex flex-col gap-[10px]">
            <li className="flex items-start gap-4">
              <Image src={icon_list} alt={"list item icon"} />
              Product discovery and building what matters
            </li>
            <li className="flex items-start gap-4">
              <Image src={icon_list} alt={"list item icon"} />
              Measuring to ensure updates are a success
            </li>
            <li className="flex items-start gap-4">
              <Image src={icon_list} alt={"list item icon"} />
              And much more!
            </li>
          </ul>
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
              <Button className="w-full bg-dark-slate-grey" type="submit">
                Subscribe to monthly newsletter
              </Button>
            </form>
          </Form>
        </CardContent>
      </section>
      <Image className="" src={illustration} alt={"Sign-up Illustration"} />
    </Card>
  );
};
