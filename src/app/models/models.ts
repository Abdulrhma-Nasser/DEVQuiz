export interface Quiz {
  id: number;
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


