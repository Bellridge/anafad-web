"use client";

import { Button } from "@/components/shared/Button";
import { Input } from "@/components/shared/Input";
import { inputChangeHandler } from "@/lib/helpers/inputChangeHandler";
import { useRequest } from "@/lib/hooks/useRequests";
import Image from "next/image";
import { FormEvent, useState } from "react";
import { subscribe } from "@/lib/services/emailService";

const ContactUsForm = () => {
  // States
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Requests
  const { loading, makeRequest } = useRequest();

  // Handlers
  const handleRequest = async (e: FormEvent) => {
    e.preventDefault();
    if (isFormValid()?.isValid) {
      await makeRequest(
        subscribe,
        {
          ...userData,
          groups: [],
          trigger_automation: false,
          email: undefined,
        },
        {
          successMessage: "You will now get email updates when we post! ",
          errorMessage: "There was an error adding you to our mailing list",
        }
      ).then(() => {
        setUserData({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
        });
      });
    }
  };

  // Validators
  const validateFirstName = (value: string) => {
    if (!value.trim()) return "First name is required.";
    if (!/^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/.test(value))
      return "First name can only contain letters and basic punctuation.";
    return "";
  };

  const validateLastName = (value: string) => {
    if (!value.trim()) return "Last name is required.";
    if (!/^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/.test(value))
      return "Last name can only contain letters and basic punctuation.";
    return "";
  };

  const validateEmail = (value: string) => {
    if (!value.trim()) return "Email is required.";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) return "Please enter a valid email address.";
    return "";
  };

  const validatePhone = (value: string) => {
    if (!value.trim()) return "Phone number is required.";
    const phoneRegex = /^\+[1-9]\d{6,14}$/;
    if (!phoneRegex.test(value))
      return "Phone number must include country code (e.g., +2348012345678).";
    return "";
  };

  const isFormValid = () => {
    const filteredErrors = Object.fromEntries(
      Object.entries(errors).filter(([_, v]) => v)
    );

    const isValid = Object.keys(filteredErrors).length === 0;

    return { isValid, errors: filteredErrors };
  };

  return (
    <section
      className="flex flex-col md:flex-row items-center gap-10 md:gap-8 py-10 sm:py-15 px-6 sm:px-10 md:px-20"
      id="contact-us-form"
    >
      <form
        onSubmit={handleRequest}
        className="flex-1 w-full max-w-lg mx-auto md:mx-0 flex flex-col"
      >
        <h4 className="font-sans font-semibold text-xl sm:text-2xl capitalize leading-tight text-center text-anafad-primary-blue mb-2">
          Contact Us
        </h4>
        <p className="font-sans font-medium text-sm sm:text-base text-anafad-primary text-center mb-8">
          Please complete this form and we will reach out to you.
        </p>

        <div className="flex flex-col gap-4">
          <Input
            label="First Name"
            id="firstname"
            name="firstname"
            value={userData?.firstname}
            onChange={(e) => inputChangeHandler(e, setUserData)}
            validator={validateFirstName}
            setError={setErrors}
            error={errors?.firstname}
            placeholder="Eg: John"
          />
          <Input
            label="Last Name"
            id="lastname"
            name="lastname"
            value={userData?.lastname}
            onChange={(e) => inputChangeHandler(e, setUserData)}
            validator={validateLastName}
            setError={setErrors}
            error={errors?.lastname}
            placeholder="Eg: Doe"
          />
          <Input
            label="Email Address"
            id="email"
            type="email"
            name="email"
            value={userData?.email}
            onChange={(e) => inputChangeHandler(e, setUserData)}
            validator={validateEmail}
            setError={setErrors}
            error={errors?.email}
            placeholder="Eg: johndoe@xyz.com"
          />
          <Input
            label="Phone Number"
            id="phone"
            type="tel"
            name="phone"
            value={userData?.phone}
            onChange={(e) => inputChangeHandler(e, setUserData)}
            placeholder="Eg: +234, phone numbers must start with country code"
            validator={validatePhone}
            setError={setErrors}
            error={errors?.phone}
          />
        </div>

        <Button
          type="submit"
          className="mt-8 self-center md:self-start rounded-full px-6 sm:px-8 py-2 sm:py-3"
          loading={loading}
          disabled={!isFormValid()?.isValid}
        >
          Submit
        </Button>
      </form>

      <div className="flex-1 flex items-center justify-center w-full">
        <Image
          src="/contactusForm.jpg"
          alt="Contact us"
          height={700}
          width={500}
          priority
          className="w-full sm:w-[400px] md:w-[500px] h-[300px] sm:h-[450px] md:h-[600px] object-cover rounded-lg shadow-md"
        />
      </div>
    </section>
  );
};

export default ContactUsForm;
