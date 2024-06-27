import icon_success from "@/../public/images/icon-success.svg";
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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useWindowSize } from "@uidotdev/usehooks";

const formSchema = z.object({
  email: z.string().email("Valid email required"),
});

type Props = {
  handleDismiss: () => void;
};

export const CardSuccess = ({ handleDismiss }: Props) => {
  return (
    <Card className="flex min-h-screen w-full flex-col gap-10 rounded-none p-6 md:min-h-[520px] md:w-[504px] md:rounded-[36px] md:px-16 md:py-12">
      <Image
        className="mt-[124px] md:mt-0"
        src={icon_success}
        alt={"list item icon"}
      />
      <CardHeader className="flex flex-col gap-6 p-0">
        <CardTitle className="text-5xl font-bold">
          Thanks for subscribing!
        </CardTitle>
        <CardDescription className="wrap-pretty text-base leading-normal">
          A confirmation email has been sent to{" "}
          <strong>ash@loremcompany.com</strong>. Please open it and click the
          button inside to confirm your subscription.
        </CardDescription>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col gap-10 p-0 md:mt-0">
        <Button className="w-full bg-dark-slate-grey" onClick={handleDismiss}>
          Dismiss message
        </Button>
      </CardContent>
    </Card>
  );
};
