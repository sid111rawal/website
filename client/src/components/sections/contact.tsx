// src/components/Contact.tsx

import { useState, type ChangeEvent, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { z } from "zod";
import { validateEmail } from "@/lib/utils";
import { PERSONAL_INFO, SOCIAL_LINKS, FORM_CONFIG } from "@/config";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  agreePrivacy: z.boolean().refine(val => val === true, {
    message: "You must agree to the privacy policy",
  }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
    agreePrivacy: false,
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[name as keyof ContactFormData];
        return next;
      });
    }
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, agreePrivacy: checked }));
    if (errors.agreePrivacy) {
      setErrors(prev => {
        const next = { ...prev };
        delete next.agreePrivacy;
        return next;
      });
    }
  };

  const validateForm = (): boolean => {
    const result = contactFormSchema.safeParse(formData);
    if (result.success) {
      setErrors({});
      return true;
    }
    const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
    for (const issue of result.error.issues) {
      const key = issue.path[0] as keyof ContactFormData;
      if (!fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    setErrors(fieldErrors);
    return false;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    const formEl = e.currentTarget;
    const payload = new FormData(formEl);

    fetch(formEl.action, {
      method: formEl.method,
      headers: { Accept: "application/json" },
      body: payload,
    })
      .then(async res => {
        const data = await res.json();
        if (data.success) {
          toast({
            title: "Message sent!",
            description: "Thank you for your message. I'll get back to you soon.",
          });
          setFormData({ name: "", email: "", subject: "", message: "", agreePrivacy: false });
        } else {
          toast({
            title: "Failed to send message",
            description: "Please try again later.",
            variant: "destructive",
          });
        }
      })
      .catch(err => {
        toast({
          title: "Failed to send message",
          description: err instanceof Error ? err.message : "Please try again later.",
          variant: "destructive",
        });
      })
      .finally(() => setIsSubmitting(false));
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      href: SOCIAL_LINKS.linkedin,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
        </svg>
      ),
    },
    // add other social links here…
  ];

  return (
    <section id="contact" className="py-20 bg-muted/50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact info panel */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Have a project in mind? Fill out the form and I’ll reply within 24 hours.
            </p>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Email</h3>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-primary hover:underline">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Phone</h3>
                  <div className="flex flex-col gap-1">
                    {PERSONAL_INFO.phone.map((p, i) => (
                      <a key={i} href={`tel:${p.replace(/\s+/g, "")}`} className="text-primary hover:underline">
                        {p}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Location</h3>
                  <p className="text-muted-foreground">{PERSONAL_INFO.location}</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-medium mb-4">Connect with me</h3>
              <div className="flex gap-4">
                {socialLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-primary hover:text-white transition-colors"
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form panel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form
              method="POST"
              action={`https://formsubmit.co/ajax/${encodeURIComponent(FORM_CONFIG.formSubmitEmail)}`}
              onSubmit={handleSubmit}
              className="bg-card rounded-xl p-8 shadow-sm border border-border"
            >
              <input type="hidden" name="_redirect" value={FORM_CONFIG.redirectUrl} />
              <input type="hidden" name="_captcha" value={FORM_CONFIG.enableCaptcha ? "true" : "false"} />
              {FORM_CONFIG.useTableTemplate && <input type="hidden" name="_template" value="table" />}
              {FORM_CONFIG.subject && <input type="hidden" name="_subject" value={FORM_CONFIG.subject} />}

              {/* Name */}
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Smith"
                  className={errors.name ? "border-destructive" : ""}
                  required
                />
                {errors.name && <p className="mt-1 text-sm text-destructive">{errors.name}</p>}
              </div>

              {/* Email */}
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className={errors.email ? "border-destructive" : ""}
                  required
                />
                {errors.email && <p className="mt-1 text-sm text-destructive">{errors.email}</p>}
              </div>

              {/* Subject */}
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                />
              </div>

              {/* Message */}
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell me about your project..."
                  className={errors.message ? "border-destructive" : ""}
                  required
                />
                {errors.message && <p className="mt-1 text-sm text-destructive">{errors.message}</p>}
              </div>

              {/* Privacy Checkbox */}
              <div className="mb-6 flex items-center space-x-2">
                <Checkbox
                  id="privacy"
                  checked={formData.agreePrivacy}
                  onCheckedChange={handleCheckboxChange}
                  className={errors.agreePrivacy ? "border-destructive" : ""}
                />
                <label htmlFor="privacy" className="text-sm text-muted-foreground">
                  I agree to the privacy policy
                </label>
              </div>
              {errors.agreePrivacy && <p className="mt-1 text-sm text-destructive">{errors.agreePrivacy}</p>}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-md"
              >
                {isSubmitting ? "Sending…" : "Send Message"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
