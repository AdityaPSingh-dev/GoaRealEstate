"use client";

import localFont from "next/font/local";
import Image from "next/image";
import React from "react";
import { IoMail } from "react-icons/io5";
import { MdPhone } from "react-icons/md";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactSchema,
  ContactFormData,
} from "../components/validation/contactSchema";

const myFont = localFont({
  src: "../../public/fonts/Recoleta-RegularDEMO.otf",
});

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("Form submitted:", data);
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/background.jpg"
          alt="About Background"
          fill
          className="object-cover brightness-75"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative  flex flex-col px-6 py-16 md:px-12 lg:px-24 text-white min-h-screen">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Image
            src="/star.svg"
            alt="Star"
            width={24}
            height={6}
            className="mx-2 pt-[6px]"
          />
          <h1 className="text-sm font-semibold px-2">CONTACT</h1>
        </div>

        {/* Main Section */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info */}
          <div className="w-full lg:w-1/2">
            <h1
              className={`${myFont.className} text-3xl sm:text-4xl lg:text-5xl mb-4`}
            >
              Get in touch
            </h1>
            <p className="text-base sm:text-lg mb-6">
              Our friendly team is ready to help you navigate{" "}
              <br className="hidden sm:block" />
              Goa real estate.
            </p>

            <a
              href="mailto:sales@goa-real-estates.com"
              className="flex items-center mb-4 text-sm sm:text-base hover:underline"
            >
              <IoMail className="fill-blue-300 mr-2 w-6 h-6" />
              sales@goa-real-estates.com
            </a>

            <div className="flex flex-col gap-1 text-sm sm:text-base">
              <a
                href="tel:432XXX25XX"
                className="flex items-center hover:underline"
              >
                <MdPhone className="fill-blue-300 mr-2 w-6 h-6" />
                Phone: (432) - XXX - 25XX
              </a>
              <a
                href="tel:817XXX16XX"
                className="flex items-center pl-8 hover:underline"
              >
                Cell: (817) - XXX - 16XX
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="w-full lg:w-1/2">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4 w-full max-w-xl"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold mb-1"
                >
                  Name
                </label>
                <input
                  {...register("name")}
                  type="text"
                  id="name"
                  placeholder="Your name"
                  className="w-full border border-white bg-transparent text-white px-4 py-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                {errors.name && (
                  <p className="text-red-400 text-sm">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold mb-1"
                >
                  Email
                </label>
                <input
                  {...register("email")}
                  type="email"
                  id="email"
                  placeholder="Your email"
                  className="w-full border border-white bg-transparent text-white px-4 py-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm">{errors.email.message}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold mb-1"
                >
                  Phone
                </label>
                <input
                  {...register("phone")}
                  type="tel"
                  id="phone"
                  placeholder="Your phone number"
                  className="w-full border border-white bg-transparent text-white px-4 py-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                {errors.phone && (
                  <p className="text-red-400 text-sm">{errors.phone.message}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold mb-1"
                >
                  Type your Message
                </label>
                <textarea
                  {...register("message")}
                  id="message"
                  rows={4}
                  placeholder="Write your message here..."
                  className="w-full border border-white bg-transparent text-white px-4 py-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                {errors.message && (
                  <p className="text-red-400 text-sm">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <div>
                <button
                  type="submit"
                  className="w-full sm:w-auto text-blue-300 bg-transparent border border-blue-300 px-6 py-3 font-bold rounded hover:bg-blue-300 hover:text-black transition-all"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
