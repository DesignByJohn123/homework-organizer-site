import { z } from "zod";

// Schema for parsed homework tasks
export const parsedTaskSchema = z.object({
  id: z.string(),
  subject: z.string(),
  description: z.string(),
  type: z.enum(['homework', 'bring']),
  dueDate: z.string().optional(),
  rawText: z.string(),
});

export type ParsedTask = z.infer<typeof parsedTaskSchema>;

// Grouped tasks by subject
export interface TasksBySubject {
  [subject: string]: ParsedTask[];
}

// Parser result interface
export interface ParserResult {
  tasks: ParsedTask[];
  tasksBySubject: TasksBySubject;
  tasksByDate: {
    [date: string]: ParsedTask[];
  };
}
