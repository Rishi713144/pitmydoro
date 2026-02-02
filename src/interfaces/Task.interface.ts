import { Pomodoro } from '@/interfaces/Pomodoro.interface';

export interface Task {
  id: string;
  title: string;
  description: string;
  order: number;
  completed: boolean;
  pomodoros: Pomodoro[];
  createdAt?: number;
}

export interface EditTask {
  description: string;
  title: string;
  taskCompletedPomodoros: number;
  numberOfPomodoros: number;
}
