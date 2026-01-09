'use client';
import { useEffect } from 'react';
import useTeamsStore from '@/stores/Teams.store';
import usePomodoroStore from '@/stores/Pomodoro.store';

export const useTeams = () => {
  const teams = useTeamsStore((state) => state.teams);
  const currentScuderia = usePomodoroStore((state) => state.currentScuderia);
  const setCurrentScuderia = usePomodoroStore((state) => state.setCurrentScuderia);

  useEffect(() => {
    if (!currentScuderia && teams.length) {
      setCurrentScuderia(teams[0]);
    }
  }, [teams, currentScuderia, setCurrentScuderia]);

  return {
    teams,
  };
};
