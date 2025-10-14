import { ParsedTask, ParserResult } from "@shared/schema";
import { nanoid } from "nanoid";

export function parseHomeworkText(text: string): ParserResult {
  const lines = text.split('\n').filter(line => line.trim());
  const tasks: ParsedTask[] = [];

  lines.forEach(line => {
    const trimmedLine = line.trim();
    
    // Check if it's a "Bring" item
    if (trimmedLine.toLowerCase().startsWith('bring:')) {
      const description = trimmedLine.substring(6).trim();
      const dateMatch = description.match(/on\s+(\w+)/i);
      const subject = dateMatch ? `Bring ${dateMatch[1]}` : 'Bring Items';
      
      tasks.push({
        id: nanoid(),
        subject,
        description: description.replace(/on\s+\w+/i, '').trim(),
        type: 'bring',
        rawText: trimmedLine
      });
      return;
    }

    // Parse regular homework entries (Subject: Task Date)
    const colonIndex = trimmedLine.indexOf(':');
    if (colonIndex > 0) {
      const subject = trimmedLine.substring(0, colonIndex).trim();
      const rest = trimmedLine.substring(colonIndex + 1).trim();
      
      // Extract date if present (formats: DD-MM-YYYY, DD/MM/YYYY, YYYY-MM-DD)
      const datePattern = /(\d{1,2}[-/]\d{1,2}[-/]\d{2,4}|\d{4}[-/]\d{1,2}[-/]\d{1,2})/;
      const dateMatch = rest.match(datePattern);
      
      let description = rest;
      let dueDate: string | undefined;
      
      if (dateMatch) {
        dueDate = formatDate(dateMatch[0]);
        description = rest.replace(datePattern, '').trim();
      }

      tasks.push({
        id: nanoid(),
        subject,
        description,
        type: 'homework',
        dueDate,
        rawText: trimmedLine
      });
    }
  });

  // Group tasks by subject
  const tasksBySubject = tasks.reduce((acc, task) => {
    if (!acc[task.subject]) {
      acc[task.subject] = [];
    }
    acc[task.subject].push(task);
    return acc;
  }, {} as Record<string, ParsedTask[]>);

  // Group tasks by date
  const tasksByDate = tasks.reduce((acc, task) => {
    if (task.dueDate) {
      if (!acc[task.dueDate]) {
        acc[task.dueDate] = [];
      }
      acc[task.dueDate].push(task);
    }
    return acc;
  }, {} as Record<string, ParsedTask[]>);

  return {
    tasks,
    tasksBySubject,
    tasksByDate
  };
}

function formatDate(dateStr: string): string {
  // Convert various date formats to a readable format
  const parts = dateStr.split(/[-/]/);
  
  if (parts.length === 3) {
    // Check if it's DD-MM-YYYY or YYYY-MM-DD
    if (parts[0].length === 4) {
      // YYYY-MM-DD format
      return `${parts[2]}-${parts[1]}-${parts[0]}`;
    } else {
      // DD-MM-YYYY format
      const day = parts[0].padStart(2, '0');
      const month = parts[1].padStart(2, '0');
      const year = parts[2].length === 2 ? `20${parts[2]}` : parts[2];
      
      // Convert to month name format
      const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
                          'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const monthIndex = parseInt(month) - 1;
      
      if (monthIndex >= 0 && monthIndex < 12) {
        return `${monthNames[monthIndex]} ${day}`;
      }
      
      return `${day}-${month}-${year}`;
    }
  }
  
  return dateStr;
}
