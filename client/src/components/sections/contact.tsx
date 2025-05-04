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
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/config";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  agreePrivacy: z.boolean().refine(val => val === true, {
    message: "You must agree to the privacy policy"
  })
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
    agreePrivacy: false
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
    } else {
      // map Zod errors into your error state
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof ContactFormData;
        if (!fieldErrors[key]) {
          fieldErrors[key] = issue.message;
        }
      }
      setErrors(fieldErrors);
      return false;
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    const formEl = e.currentTarget;
    const payload = new FormData(formEl);

    fetch(formEl.action, {
      method: formEl.method,
      headers: {
        "Accept": "application/json",
      },
      body: payload,
    })
      .then(async (res) => {
        const data = await res.json();
        if (data.success) {
          toast({
            title: "Message sent!",
            description: "Thank you for your message. I'll get back to you soon.",
          });
          // clear only on success
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
            agreePrivacy: false
          });
        } else {
          toast({
            title: "Failed to send message",
            description: "Please try again later",
            variant: "destructive",
          });
        }
      })
      .catch((error) => {
        toast({
          title: "Failed to send message",
          description:
            error instanceof Error ? error.message : "Please try again later",
          variant: "destructive",
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      href: SOCIAL_LINKS.linkedin,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-muted/50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Have a project in mind? Fill out the form, and I'll get back to you within 24 hours.
            </p>

            {/* Contact info + social links omitted for brevity */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form
              id="contact-form"
              className="bg-card rounded-xl p-8 shadow-sm border border-border"
              method="POST"
              action={`https://formsubmit.co/ajax/${process.env.NEXT_PUBLIC_FORM_SUBMIT}`}
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="_redirect" value="/" />
              <input type="hidden" name="_captcha" value="false" />

              {/* Name */}
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
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
                <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
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
                <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
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
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
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

              {/* Privacy */}
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
                className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 px-4 rounded-md"
                disabled={isSubmitting}
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
