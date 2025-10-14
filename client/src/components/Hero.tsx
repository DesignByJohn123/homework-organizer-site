import { Button } from "@/components/ui/button";
import { BookOpen, Download, Backpack } from "lucide-react";

interface HeroProps {
  onTryDemo: () => void;
}

export function Hero({ onTryDemo }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-blue-50 px-6 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
          <BookOpen className="w-4 h-4" />
          <span>AI-Powered Organization</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
          Homework Organizer
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
          An AI-powered daily planner that organizes homework, reminders, and what to bring.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 min-h-14"
            onClick={onTryDemo}
            data-testid="button-try-demo"
          >
            Try Demo
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-8 py-6 min-h-14"
            data-testid="button-download-apk"
          >
            <Download className="w-5 h-5 mr-2" />
            Download APK
          </Button>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-card border border-card-border rounded-2xl shadow-2xl overflow-hidden hover-elevate">
            <div className="bg-gradient-to-r from-primary/10 to-chart-4/10 px-6 py-4 border-b border-card-border flex items-center gap-3">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-destructive/60"></div>
                <div className="w-3 h-3 rounded-full bg-chart-3/60"></div>
                <div className="w-3 h-3 rounded-full bg-chart-2/60"></div>
              </div>
              <div className="text-sm text-muted-foreground font-medium">Your organized homework</div>
            </div>
            <div className="p-8 bg-background/50">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card rounded-xl p-6 border border-card-border">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">English</h3>
                      <p className="text-sm text-muted-foreground">Due: Sept 22</p>
                    </div>
                  </div>
                  <p className="text-sm text-foreground/90">Answer grammar sheet Ex.a all and Ex.b (1,2,3)</p>
                </div>
                <div className="bg-card rounded-xl p-6 border border-card-border">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-chart-4/10 flex items-center justify-center">
                      <Backpack className="w-6 h-6 text-chart-4" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Bring Monday</h3>
                      <p className="text-sm text-muted-foreground">Reminder</p>
                    </div>
                  </div>
                  <p className="text-sm text-foreground/90">Think SB</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
