import icon_success from "@/../public/images/icon-success.svg";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FemCardTitle } from "./fem-card-title";

type Props = {
  handleDismiss: () => void;
};

export const CardSuccess = ({ handleDismiss }: Props) => {
  return (
    <Card className="flex min-h-screen w-full flex-col-reverse justify-end gap-10 rounded-none p-6 md:min-h-[520px] md:w-[504px] md:rounded-[36px] md:px-16 md:py-12">
      <section className="mr-6 flex h-full flex-col justify-between md:mr-0">
        <FemCardHeader />
        <FemCardContent handleDismiss={handleDismiss} />
      </section>
      <FemHeroImage />
    </Card>
  );
};

const FemCardHeader = () => {
  return (
    <CardHeader className="flex flex-col gap-6 p-0">
      <FemCardTitle title={"Thanks for subscribing!"} />
      <CardDescription className="text-base">
        A confirmation email has been sent to{" "}
        <strong>ash@loremcompany.com</strong>. Please open it and click the
        button inside to confirm your subscription.
      </CardDescription>
    </CardHeader>
  );
};

const FemCardContent = ({ handleDismiss }: Props) => {
  return (
    <CardContent className="gap-10 p-0 md:mt-0">
      <Button className="w-full bg-dark-slate-grey" onClick={handleDismiss}>
        Dismiss message
      </Button>
    </CardContent>
  );
};

const FemHeroImage = () => {
  return (
    <Image
      className="mt-[124px] md:mt-0"
      src={icon_success}
      alt={"list item icon"}
    />
  );
};
