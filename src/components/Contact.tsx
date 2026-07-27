'use client';

import { GitBranch, Link, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { FormEvent, useState } from "react";

type FormStatus = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");

    try {
      const response = await fetch("https://formsubmit.co/ajax/petay081@gmail.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });

      if (!response.ok) throw new Error("Unable to send message");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="section contact framed-section" id="contact">
      <span className="section-frame frame-tl" /><span className="section-frame frame-br" />
      <div className="contact-panel">
        <div className="contact-copy reveal">
          <p className="eyebrow">Contact</p>
          <h2>Let’s build something<br />worth showing.</h2>
          <p>Have a frontend project, custom Shopify feature, interface implementation or remote development opportunity in mind? Send me a message and tell me what you are building.</p>
          <div className="contact-details">
            <a href="mailto:petay081@gmail.com"><Mail /><div><span>Email</span><strong>petay081@gmail.com</strong></div></a>
            <div><MapPin /><div><span>Location</span><strong>Nigeria · Available worldwide</strong></div></div>
          </div>
          <div className="socials"><a href="#" aria-label="Twitter"><MessageCircle /></a><a href="#" aria-label="LinkedIn"><Link /></a><a href="#" aria-label="GitHub"><GitBranch /></a></div>
          <div className="availability-card"><span className="pulse" /><div><strong>Available for opportunities</strong><p>Freelance, contract, agency and remote roles.</p></div></div>
        </div>
        <form className="contact-form reveal" onSubmit={submit}>
          <input type="hidden" name="_subject" value="New portfolio contact message" />
          <input type="hidden" name="_template" value="table" />
          <input className="form-honeypot" type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" />
          <label>Your Name<input type="text" name="name" placeholder="Enter your name" autoComplete="name" required /></label>
          <label>Email Address<input type="email" name="email" placeholder="you@example.com" autoComplete="email" required /></label>
          <label>What do you need help with?<select name="service" defaultValue="Frontend development"><option>Frontend development</option><option>Shopify development</option><option>UI engineering or web application</option><option>Figma to code</option><option>Job or contract opportunity</option></select></label>
          <label>Message<textarea name="message" rows={6} placeholder="Tell me about the project or opportunity..." required /></label>
          <button className="btn btn-primary form-button" type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Send Message"} <Send />
          </button>
          <p className={`form-message${status !== "idle" && status !== "sending" ? " visible" : ""}`} aria-live="polite">
            {status === "sent" && "Thanks! Your message has been sent successfully."}
            {status === "error" && "Your message could not be sent. Please email me directly at petay081@gmail.com."}
          </p>
        </form>
      </div>
    </section>
  );
}
