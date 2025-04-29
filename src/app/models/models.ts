export interface Quiz {
  id: number;
  category: string;
  title: string;
  icon: string;
  difficulty: string;
  score: number;
  completed: boolean;
  questions: Question[];
}

export interface Question {
  id: number;
  title: string;
  options: Option[];
  answer: string;
}

export interface Option {
  id: number;
  title: string;
  isCorrect: boolean;
}

export interface Section {
  id: number;
  title: string;
  description?: string;
  icon: string;
}
