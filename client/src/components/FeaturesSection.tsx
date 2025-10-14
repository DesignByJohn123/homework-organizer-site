import { Card } from "@/components/ui/card";
import { 
  FileText, 
  FolderTree, 
  Scissors, 
  Calendar, 
  CalendarDays, 
  Bell, 
  Edit3, 
  Wifi 
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "PDF & Text Reading",
    description: "Upload your daily plan as text or PDF and let AI extract all tasks automatically",
    color: "from-blue-500/10 to-blue-500/5"
  },
  {
    icon: FolderTree,
    title: "Auto-Sort by Subject",
    description: "Tasks are intelligently organized by subject for better clarity and focus",
    color: "from-purple-500/10 to-purple-500/5"
  },
  {
    icon: Scissors,
    title: "Smart Separation",
    description: "Automatically separates homework tasks from bring items and reminders",
    color: "from-orange-500/10 to-orange-500/5"
  },
  {
    icon: Calendar,
    title: "Due Dates & Reminders",
    description: "Extracts and tracks due dates, setting up reminders automatically",
    color: "from-green-500/10 to-green-500/5"
  },
  {
    icon: CalendarDays,
    title: "Weekly Calendar View",
    description: "Visual calendar showing all your tasks and deadlines for the week ahead",
    color: "from-pink-500/10 to-pink-500/5"
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Get notified before due dates so you never miss a deadline",
    color: "from-indigo-500/10 to-indigo-500/5"
  },
  {
    icon: Edit3,
    title: "Manual Editing",
    description: "Full control to add, edit, or delete tasks manually whenever needed",
    color: "from-cyan-500/10 to-cyan-500/5"
  },
  {
    icon: Wifi,
    title: "Offline Access",
    description: "Access your organized tasks anytime, even without internet connection",
    color: "from-teal-500/10 to-teal-500/5"
  }
];

export function FeaturesSection() {
  return (
    <section className="py-20 md:py-32 px-6 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Powerful Features
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to stay organized and never miss a deadline
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="p-6 hover-elevate"
                data-testid={`card-feature-${index}`}
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}>
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
