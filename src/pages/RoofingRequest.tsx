import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(100),
  lastName: z.string().trim().min(1, "Last name is required").max(100),
  phone: z.string().trim().min(7, "Valid phone number is required").max(20),
  email: z.string().trim().email("Valid email is required").max(255),
  nonMarketingConsent: z.boolean().refine((val) => val === true, {
    message: "You must consent to receive non-marketing messages",
  }),
  
});

type FormValues = z.infer<typeof formSchema>;

const RoofingRequest = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      nonMarketingConsent: false,
      
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      // Placeholder for form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Request submitted successfully! We'll be in touch soon.");
      form.reset();
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[hsl(0,0%,95%)] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-lg p-8 md:p-10">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            GraceAI Innovations LLC
          </h1>
          <p className="text-gray-600 text-lg mb-1">
            <a href="tel:4103020033" className="hover:underline">410-302-0033</a>
          </p>
          <p className="text-gray-500">Request roofing inspection or service</p>
        </div>

        {/* Form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-900 font-semibold">First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="First Name" className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-900 font-semibold">Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Last Name" className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-900 font-semibold">Phone *</FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="Phone" className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-900 font-semibold">Email *</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Email" className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Non-marketing consent checkbox */}
            <FormField
              control={form.control}
              name="nonMarketingConsent"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 py-2">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="mt-1 border-gray-400 data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500"
                    />
                  </FormControl>
                  <div className="leading-relaxed text-sm text-gray-700">
                    By checking this box, I consent to receive non-marketing text messages from{" "}
                    <strong className="text-gray-900">GRACEAI INNOVATIONS LLC</strong> about your
                    appointment. Message frequency varies based on your interaction with us, message
                    &amp; data rates may apply. Text HELP for assistance, reply STOP to opt out.
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Company info */}
            <div className="pt-4">
              <h2 className="text-3xl font-bold text-gray-900 mb-1">GraceAI Innovations LLC</h2>
              <p className="text-gray-600">Ellicott City, MD</p>
              <a href="mailto:darsh@graceai.music" className="text-blue-600 hover:underline text-sm">
                darsh@graceai.music
              </a>
            </div>

            {/* Submit */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-green-500 hover:bg-green-600 text-white text-lg py-6 rounded-lg font-semibold"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>

            {/* Links */}
            <div className="text-center pt-2">
              <Link to="/privacy-policy-llc" className="text-blue-600 hover:underline text-sm">
                Privacy Policy
              </Link>
              <span className="text-gray-400 mx-2">|</span>
              <Link to="/terms-of-service-llc" className="text-blue-600 hover:underline text-sm">
                Terms of Service
              </Link>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default RoofingRequest;
