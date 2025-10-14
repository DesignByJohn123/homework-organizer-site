import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Upload, Sparkles, FolderTree, Bell, ChevronRight } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload Plan",
    description: "Paste text or upload PDF"
  },
  {
    icon: Sparkles,
    title: "AI Parser",
    description: "Smart text analysis"
  },
  {
    icon: FolderTree,
    title: "Organize",
    description: "Sorted by subject"
  },
  {
    icon: Bell,
    title: "Reminders",
    description: "Auto notifications"
  }
];

const faqs = [
  {
    question: "Is it free?",
    answer: "Yes! The app is completely free to use with all features included. We believe everyone should have access to great organizational tools."
  },
  {
    question: "Can I use it on mobile?",
    answer: "Absolutely! The app is PWA-ready, which means you can install it on your phone and use it like a native app. It works on iOS, Android, and desktop."
  },
  {
    question: "Does it work offline?",
    answer: "Yes! Once installed, you can access all your organized tasks even without an internet connection. Your data is stored locally on your device."
  },
  {
    question: "Can I customize subjects?",
    answer: "Yes! While the AI automatically detects subjects, you have full control to edit, add, or remove subjects and tasks manually to match your needs."
  }
];

export function HowItWorksSection() {
  return (
    <section className="py-20 md:py-32 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            How It Works
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            From chaotic notes to organized tasks in seconds
          </p>
        </div>

        <div className="mb-20">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex items-center gap-4 md:gap-6">
                  <Card className="p-6 bg-gradient-to-br from-primary/10 to-chart-4/10 border-card-border hover-elevate">
                    <div className="flex flex-col items-center text-center min-w-[140px]">
                      <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-3">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </Card>
                  {index < steps.length - 1 && (
                    <ChevronRight className="hidden md:block w-6 h-6 text-muted-foreground flex-shrink-0" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            Frequently Asked Questions
          </h3>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="border border-border rounded-lg px-6 bg-card"
                data-testid={`accordion-faq-${index}`}
              >
                <AccordionTrigger 
                  className="text-left font-semibold text-foreground hover:no-underline py-5"
                  data-testid={`button-faq-toggle-${index}`}
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
