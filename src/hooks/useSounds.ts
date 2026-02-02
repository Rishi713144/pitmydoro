import { Howl } from 'howler';
import useSettingsStore from '@/stores/Settings.store';

export const useSounds = () => {
  const enableSounds = useSettingsStore((state) => state.enableSounds);

  const playSound = (): void => {
    if (!enableSounds) return;

    const sound = new Howl({
      src: ['sounds/play.wav'],
    });

    sound.play();
  };

  const resumeSound = (): void => {
    if (!enableSounds) return;

    const sound = new Howl({
      src: ['sounds/resume.wav'],
    });

    sound.play();
  };

  const radioSound = (): void => {
    if (!enableSounds) return;

    const sound = new Howl({
      src: ['sounds/radio.mp3'],
    });

    sound.play();
  };

  return {
    playSound,
    resumeSound,
    radioSound,
  };
};
