"use server";
import { Resend } from "resend";
import React from "react";
import { validateString, getErrorMessage } from "@/lib/utils";
import { EmailTemplate } from "@/components/global/email-template";
const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  console.log("running on asdsadserver");
  console.log(formData.get("email"));
  console.log(formData.get("message"));
  const senderEmail = formData.get("email");
  const message = formData.get("message");

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    console.log("BANG");
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "muhammadsuhaib1776@gmail.com",
      subject: "Message from contact form",
      reply_to: "muhammadsuhaib1776@gmail.com",
      react: React.createElement(EmailTemplate, {
        email: senderEmail,
        message: message,
      }),
    });
    console.log(data);
    if (data.error) {
      return { success: false, error: data.error.message };
    }
    return { ...data, success: true };
  } catch (error: unknown) {
    console.log("ERROR");
    return {
      error: getErrorMessage(error),
      success: false,
    };
  }
};
