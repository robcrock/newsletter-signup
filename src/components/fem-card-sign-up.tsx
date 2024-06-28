import illustration_desktop from "@/../public/images/illustration-sign-up-desktop.svg";
import illustration_mobile from "@/../public/images/illustration-sign-up-mobile.svg";
import icon_list from "@/../public/images/icon-list.svg";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { z } from "zod";
import { useWindowSize } from "@uidotdev/usehooks";
import { UseFormReturn } from "react-hook-form";
import { FemCardTitle } from "./fem-card-title";
import { FormSignUp } from "./fem-form-sign-up";

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
  return (
    <Card className="flex w-full flex-col-reverse items-center rounded-none md:h-[641px] md:w-[928px] md:flex-row md:gap-6 md:rounded-[36px] md:p-6">
      <section className="mr-6 w-full p-8 md:mr-0 md:w-full md:p-9">
        <FemCardHeader />
        <FemCardContent form={form} handleSubmit={handleSubmit} />
      </section>
      <FemHeroImage />
    </Card>
  );
};

const FemCardHeader = () => {
  return (
    <CardHeader className="mb-6 flex flex-col gap-2 p-0 md:gap-6">
      <FemCardTitle title={"Stay updated!"} />
      <CardDescription className="text-base">
        Join 60,000+ product managers receiving monthly updates on:
      </CardDescription>
    </CardHeader>
  );
};

const items = [
  "Product discovery and building what matters",
  "Measuring to ensure updates are a success",
  "And much more!",
];

const FemListItem = ({ item }: { item: string }) => {
  return (
    <li className="flex items-start gap-4">
      <Image src={icon_list} alt={"list item icon"} />
      {item}
    </li>
  );
};

const FemCardContent = ({ form, handleSubmit }: Props) => {
  return (
    <CardContent className="flex flex-col gap-10 p-0">
      <ul className="flex flex-col gap-[10px]">
        {items.map((item, index) => (
          <FemListItem key={index} item={item} />
        ))}
      </ul>
      <FormSignUp form={form} handleSubmit={handleSubmit} />
    </CardContent>
  );
};

const FemHeroImage = () => {
  const { width } = useWindowSize();
  if (!width) return null;
  const mobile = width < 768;

  const illustration = mobile ? illustration_mobile : illustration_desktop;

  return <Image className="" src={illustration} alt={"Sign-up Illustration"} />;
};
