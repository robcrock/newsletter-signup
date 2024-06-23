import { Attribution } from "@/components/fem-attribution";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section>
        {/* <!-- Sign-up form start --> */}
        Stay updated! Join 60,000+ product managers receiving monthly updates
        on: Product discovery and building what matters Measuring to ensure
        updates are a success And much more! Email address email@company.com
        Subscribe to monthly newsletter
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
