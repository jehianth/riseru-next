/* eslint-disable react/no-unescaped-entities */
'use client'
import React from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Support() {
  async function handleSubmit(event: any) {
    event.preventDefault();
    const data = {
      name: String(event.target.name.value),
      email: String(event.target.email.value),
      message: String(event.target.message.value),
    }
    const response = await fetch ("/app/api/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    if (response.ok) {
      console.log("Success")
    }
    if (!response.ok) {
      console.log("Error");
    }
  }
  const accordionData = [
    {
      value: "item-1",
      question: "Are the products on your website authentic?",
      answer:
        "Yes, we guarantee that all products available on our website are authentic and sourced from trusted manufacturers and distributors.",
    },
    {
      value: "item-2",
      question: "Are there any discounts or promotions available?",
      answer:
        "We occasionally run special promotions and discounts. Stay updated by subscribing to our newsletter or following us on social media for the latest deals and offers.",
    },
    {
      value: "item-3",
      question:
        "Can I request a specific product that is not listed on your website?",
      answer:
        "Yes, we welcome product requests. If there is a specific item you are looking for, please contact our customer support team, and we will do our best to assist you.",
    },
    {
      value: "item-4",
      question: "What if I receive a damaged or defective product?",
      answer:
        "If you receive a damaged or defective product, please contact our customer support immediately. We will assist you in resolving the issue and arrange for a replacement or refund if necessary.",
    },
    {
      value: "item-5",
      question:
        "Do you offer product recommendations or guidance for beginners?",
      answer:
        "Yes, we provide personalized product recommendations and guidance to help beginners get started in their hobby journey. For specific recommendations and expert advice, we encourage you to visit our Instagram page @riseru_hobbyshop. We regularly share tips, tutorials, and beginner-friendly products to assist you in your hobby exploration. Follow us on Instagram to stay updated and receive valuable insights for beginners.",
    },
  ];
  return (
    <main className="flex min-h-screen flex-col items-center bg-orange-50 text-black text-center py-10 md:px-60">
      <h1 className="text-2xl font-bold pr-2">Support</h1>
      <div className="md:flex md:flex-row">
        <div>
          <div className="flex flex-row mt-10 justify-center md:justify-start md:pl-5">
            <h3 className="text-lg font-medium">Feedback</h3>
            <Image
              src="/right-arrow.png"
              width={40}
              height={1}
              alt=""
              className="-translate-y-1"
            />
          </div>
          <form onSubmit={handleSubmit}>
            <div className="hidden md:flex md:flex-row">
              <div className="translate-x-5">
                <label htmlFor="name" className="md:pr-[220px]">
                  Name
                </label>
                <input
                  type="text"
                  minLength={3}
                  maxLength={70}
                  id="name"
                  placeholder="Your Name"
                  autoComplete="off"
                  className="border border-zinc-300 rounded-lg h-10 px-3 w-60 -ml-7 shadow-md"
                />
              </div>
              <div>
                <label htmlFor="email" className="md:pr-[206px]">
                  Email
                </label>
                <input
                  type="email"
                  minLength={10}
                  maxLength={90}
                  id="email"
                  placeholder="Your Email"
                  autoComplete="off"
                  className="border border-zinc-300 rounded-lg h-10 px-3 w-60 -ml-2 shadow-md"
                />
              </div>
            </div>
            <div className="mt-5 md:hidden">
              <label htmlFor="name" className="block pr-[330px] md:pr-[220px]">
                Name
              </label>
              <input
                type="text"
                minLength={3}
                maxLength={70}
                id="name"
                placeholder="Your Name"
                autoComplete="off"
                className="border border-zinc-300 rounded-lg h-10 px-3 w-96 shadow-md"
              />
            </div>
            <div className="mt-5 md:hidden">
              <label htmlFor="email" className="block pr-[330px] md:pr-[220px]">
                Email
              </label>
              <input
                type="email"
                minLength={10}
                maxLength={90}
                id="email"
                placeholder="Your Email"
                autoComplete="off"
                className="border border-zinc-300 rounded-lg h-10 px-3 w-96 shadow-md"
              />
            </div>
            <p className="pr-[310px] md:pr-[400px] mt-5 md:mt-3">Message</p>
            <textarea
              rows={4}
              cols={40}
              minLength={5}
              maxLength={200}
              name="message"
              placeholder="How we can help you?"
              className="border border-zinc-300 rounded-xl p-3 shadow-md translate-x-5 hidden md:block"
            />
            <textarea
              rows={4}
              cols={31}
              minLength={5}
              maxLength={200}
              name="message"
              placeholder="How we can help you?"
              className="border border-zinc-300 rounded-xl p-3 shadow-md md:hidden"
            />
            <button
              type="submit"
              className="flex items-center bg-orange-600 text-white border border-orange-400 py-2 pl-8 pr-7 hover:grayscale rounded-full translate-x-4.25 md:translate-x-96 mt-3"
            >
              Send
              <Image
                src="/arrow.png"
                width={10}
                height={10}
                alt=""
                className="ml-2 scale-150 pt-[1px]"
              />
            </button>
          </form>
        </div>
        <div>
          <div className="flex flex-row mt-10 justify-center md:justify-start md:pl-5">
            <h3 className="text-lg font-medium">Help Center (FAQ)</h3>
            <Image
              src="/right-arrow.png"
              width={40}
              height={1}
              alt=""
              className="-translate-y-1"
            />
          </div>
          <p className="px-10 md:px-5 text-justify pt-3 md:pt-0">
            Provide quick and convenient assistance to users by addressing
            commonly asked questions and providing helpful information.
          </p>
          <Accordion type="single" collapsible className="ml-10 md:ml-5 w-[350px] md:w-[500px] pt-3 md:pt-0">
            {accordionData.map((item) => (
              <AccordionItem key={item.value} value={item.value}>
                <AccordionTrigger className="text-start">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-justify">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </main>
  );
}
