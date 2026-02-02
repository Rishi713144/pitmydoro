import { Team } from '@/interfaces/Teams.interface';

export interface Pomodoro {
  id: string;
  team: Team;
  duration: number | null;
  createdAt: number;
  startedAt?: number;
  isExternal?: boolean;
  skipped?: boolean;
  completedAt?: number | null;
}
