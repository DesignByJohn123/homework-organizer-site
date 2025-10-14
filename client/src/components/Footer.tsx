import { Heart, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 bg-muted/30 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-destructive fill-destructive" />
            <span>by John</span>
          </div>
          
          <a 
            href="mailto:john@example.com" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
            data-testid="link-contact"
          >
            <Mail className="w-4 h-4" />
            john@example.com
          </a>

          <div className="pt-4 text-sm text-muted-foreground">
            © {currentYear} Homework Organizer. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
