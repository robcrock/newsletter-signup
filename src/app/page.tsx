"use client";

import { useState } from "react";
import icon_list from "@/../public/images/icon-list.svg";
import icon_success from "@/../public/images/icon-success.svg";
import illustration_desktop from "@/../public/images/illustration-sign-up-desktop.svg";
import illustration_mobile from "@/../public/images/illustration-sign-up-mobile.svg";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useWindowSize } from "@uidotdev/usehooks";

export default function Home() {
  const [isVisible, setIsVisible] = useState(true);

  const { width } = useWindowSize();
  if (!width) return null;
  const mobile = width < 768;

  const illustration = mobile ? illustration_mobile : illustration_desktop;

  const handleSubmit = () => {
    setIsVisible(false);
  };

  const handleDismiss = () => {
    setIsVisible(true);
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-0 bg-gray-700 md:p-24">
      {/* card */}
      {/* <!-- Sign-up form start --> */}
      {isVisible && (
        <Card className="flex w-full flex-col-reverse items-center gap-0 rounded-none p-0 md:h-[641px] md:w-[928px] md:flex-row md:gap-6 md:rounded-[36px] md:p-6">
          <section className="p-6 md:p-9">
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
              <form
                className="flex flex-col gap-6"
                action="submit"
                onSubmit={handleSubmit}
              >
                <div className="grid w-full max-w-sm items-center gap-2">
                  <Label htmlFor="email">Email address</Label>
                  <Input type="email" placeholder="email@company.com" />
                </div>

                <Button className="w-full" type="submit">
                  Subscribe to monthly newsletter
                </Button>
              </form>
            </CardContent>
          </section>
          <Image className="" src={illustration} alt={"Sign-up Illustration"} />
        </Card>
      )}
      {!isVisible && (
        <Card className="flex w-[504px] flex-col gap-10 rounded-[36px] px-16 py-12">
          <Image src={icon_success} alt={"list item icon"} />
          <CardHeader className="flex flex-col gap-6 p-0">
            <CardTitle className="text-5xl font-bold">
              Thanks for subscribing!
            </CardTitle>
            <CardDescription className="wrap-pretty text-base leading-normal">
              A confirmation email has been sent to{" "}
              <strong>ash@loremcompany.com</strong>. Please open it and click
              the button inside to confirm your subscription.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-10 p-0">
            <Button className="w-full" onClick={handleDismiss}>
              Dismiss message
            </Button>
          </CardContent>
        </Card>
      )}
    </main>
  );
}
