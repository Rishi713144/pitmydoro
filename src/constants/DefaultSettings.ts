import { TireTypeEnum } from '@/enums/TireType.enum';
import { SessionStatusEnum } from '@/enums/SessionStatus.enum';
import { ISettings } from '@/interfaces/Settings.interface';
import { defaultLocale } from '@/i18n/config';

export const DefaultSettings: ISettings = {
  locale: defaultLocale,
  breaksInterval: 4,
  isLongBreakPerTask: false,
  breaksDuration: {
    [SessionStatusEnum.SHORT_BREAK]: 5,
    [SessionStatusEnum.LONG_BREAK]: 15,
  },
  autoStartSession: true,
  autoStartBreak: true,
  tiresSettings: {
    [TireTypeEnum.SOFT]: {
      compound: 'Soft',
      duration: 15,
    },
    [TireTypeEnum.MEDIUM]: {
      compound: 'Medium',
      duration: 20,
    },
    [TireTypeEnum.HARD]: {
      compound: 'Hard',
      duration: 25,
    },
    [TireTypeEnum.INTERMEDIATE]: {
      compound: 'Intermediate',
      duration: 30,
    },
    [TireTypeEnum.WET]: {
      compound: 'Wet',
      duration: 35,
    },
  },
  autoCompleteTask: true,
  autoOrderTasks: true,
  autoStartNextTask: true,
  enableSounds: true,
  enableNotifications: true,
};
