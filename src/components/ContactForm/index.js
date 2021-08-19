import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { FormStyle } from "./ContactFormElements";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("meqvprll");
  if (state.succeeded) {
    return <h1>Thanks for contact me!</h1>;
  }
  return (
    <>
      <FormStyle onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">
            Your Name
            <input type="text" id="name" name="name" />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Your email
            <input type="email" id="email" name="email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="message">
            Your message
            <textarea type="text" id="message" name="message" />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </label>
        </div>
        <button type="submit" disabled={state.submitting}>
          Send
        </button>
      </FormStyle>
    </>
  );
}
