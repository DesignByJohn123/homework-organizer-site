import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Sparkles, Loader2, BookOpen, ShoppingBag } from "lucide-react";
import { parseHomeworkText } from "@/utils/parser";
import type { ParsedTask } from "@shared/schema";

export function DemoSection() {
  const [inputText, setInputText] = useState("");
  const [parsedTasks, setParsedTasks] = useState<ParsedTask[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const exampleText = `English: Answer grammar sheet Ex.a all and Ex.b (1,2,3) 22-9-2025
Bring: Think SB on Monday
Math: Solve page 1 (1,2)
Science: Read chapter 5 and answer questions 1-5 25-9-2025`;

  const handleParse = () => {
    setIsLoading(true);
    
    setTimeout(() => {
      const result = parseHomeworkText(inputText || exampleText);
      setParsedTasks(result.tasks);
      setIsLoading(false);
    }, 600);
  };

  const tasksBySubject = parsedTasks.reduce((acc, task) => {
    if (!acc[task.subject]) {
      acc[task.subject] = [];
    }
    acc[task.subject].push(task);
    return acc;
  }, {} as Record<string, ParsedTask[]>);

  return (
    <section id="demo" className="py-20 md:py-32 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Try It Yourself
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Paste your daily plan or homework list and watch it get organized automatically
          </p>
        </div>

        <Card className="p-8 md:p-10 shadow-xl">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-foreground mb-3">
                Your Daily Plan
              </label>
              <Textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder={exampleText}
                className="min-h-[200px] font-mono text-sm resize-none"
                data-testid="input-homework-text"
              />
            </div>

            <Button 
              onClick={handleParse} 
              size="lg" 
              className="w-full md:w-auto px-8 min-h-12"
              disabled={isLoading}
              data-testid="button-parse"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Parsing...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5 mr-2" />
                  Parse Tasks
                </>
              )}
            </Button>

            {parsedTasks.length > 0 && (
              <div className="mt-8 pt-8 border-t border-border">
                <h3 className="text-xl font-semibold text-foreground mb-6">Organized Tasks</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {Object.entries(tasksBySubject).map(([subject, tasks]) => (
                    <Card 
                      key={subject} 
                      className="p-6 bg-gradient-to-br from-primary/5 to-transparent border-card-border hover-elevate"
                      data-testid={`card-subject-${subject.toLowerCase()}`}
                    >
                      <div className="flex items-start gap-3 mb-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          {tasks[0].type === 'bring' ? (
                            <ShoppingBag className="w-6 h-6 text-chart-4" />
                          ) : (
                            <BookOpen className="w-6 h-6 text-primary" />
                          )}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg text-foreground">{subject}</h4>
                          {tasks[0].dueDate && (
                            <span className="inline-block mt-1 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                              Due: {tasks[0].dueDate}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="space-y-2">
                        {tasks.map((task) => (
                          <div 
                            key={task.id} 
                            className="text-sm text-foreground/90 pl-2 border-l-2 border-primary/30"
                            data-testid={`text-task-${task.id}`}
                          >
                            {task.description}
                          </div>
                        ))}
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Card>
      </div>
    </section>
  );
}
