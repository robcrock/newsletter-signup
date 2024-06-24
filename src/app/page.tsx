import icon_list from "@/../public/images/icon-list.svg";
import illustration_desktop from "@/../public/images/illustration-sign-up-desktop.svg";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Attribution } from "@/components/fem-attribution";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* card */}
      <Card className="flex h-[641px] w-[928px] items-center gap-6 rounded-[36px] p-6">
        {/* <!-- Sign-up form start --> */}
        <section className="p-9">
          <CardHeader className="mb-6 flex flex-col gap-6 p-0">
            <CardTitle className="text-5xl font-bold">Stay updated!</CardTitle>
            <CardDescription className="text-base">
              Join 60,000+ product managers receiving monthly updates on:
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-10 p-0">
            <ul className="flex flex-col gap-[10px]">
              <li className="flex items-center gap-4">
                <Image src={icon_list} alt={"list item icon"} />
                Product discovery and building what matters
              </li>
              <li className="flex items-center gap-4">
                <Image src={icon_list} alt={"list item icon"} />
                Measuring to ensure updates are a success
              </li>
              <li className="flex items-center gap-4">
                <Image src={icon_list} alt={"list item icon"} />
                And much more!
              </li>
            </ul>
            <form className="flex flex-col gap-6" action="submit">
              <div className="flex flex-col gap-2">
                <label htmlFor="email">Email address</label>
                <input type="text" placeholder="email@company.com" />
              </div>
              <button type="submit">Subscribe to monthly newsletter</button>
            </form>
          </CardContent>
        </section>
        <Image src={illustration_desktop} alt={"Sign-up Illustration"} />
      </Card>

      <section>
        {/* <!-- Sign-up form end --> */}
        {/* <!-- Success message start --> */}
        Thanks for subscribing! A confirmation email has been sent to
        ash@loremcompany.com. Please open it and click the button inside to
        confirm your subscription. Dismiss message
      </section>
      <Attribution
        name={"Robert Crocker"}
        link={"https://www.frontendmentor.io/profile/robcrock"}
      />
    </main>
  );
}
