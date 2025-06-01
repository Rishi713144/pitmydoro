import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserHintsStore {
  hasSeenSettingsTooltip: boolean;
  setHasSeenSettingsTooltip: (value: boolean) => void;

  hasSeenTasksTooltip: boolean;
  setHasSeenTasksTooltip: (value: boolean) => void;
}

const useUserHintsStore = create<UserHintsStore>()(
  persist(
    (set) => ({
      hasSeenSettingsTooltip: false,
      setHasSeenSettingsTooltip: (value) => set({ hasSeenSettingsTooltip: value }),
      hasSeenTasksTooltip: false,
      setHasSeenTasksTooltip: (value) => set({ hasSeenTasksTooltip: value }),
    }),
    {
      name: 'user-hints',
    }
  )
);

export default useUserHintsStore;
