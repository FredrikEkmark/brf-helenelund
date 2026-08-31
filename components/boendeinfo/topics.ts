import { ComponentType } from 'react';
import {
  IconWifi,
  IconArmchair,
  IconBox,
  IconDeviceTv,
  IconCar,
  IconPhone,
  IconRecycle,
  IconKey,
  IconWashMachine,
  IconCalendarPlus,
} from '@tabler/icons-react';

export type Topic = {
  slug: string;
  label: string;
  teaser: string;
  icon: ComponentType<{ className?: string; stroke?: number }>;
};

export const topics: Topic[] = [
  {
    slug: 'bredband',
    label: 'Bredband',
    teaser: 'Fiber från Bahnhof ingår i avgiften.',
    icon: IconWifi,
  },
  {
    slug: 'foreningslokal',
    label: 'Föreningslokal',
    teaser: 'Boka, priser och betalning för föreningens lokal.',
    icon: IconArmchair,
  },
  {
    slug: 'forrad',
    label: 'Förråd',
    teaser: 'Förråd på vind eller i källare ingår per lägenhet.',
    icon: IconBox,
  },
  {
    slug: 'kabel-tv',
    label: 'Kabel-TV',
    teaser: 'Digital-TV via Sollentuna Energi och kanalutbud.',
    icon: IconDeviceTv,
  },
  {
    slug: 'parkering',
    label: 'Parkering',
    teaser: 'Garage-, parkerings- och laddplatser.',
    icon: IconCar,
  },
  {
    slug: 'porttelefon',
    label: 'Porttelefon',
    teaser: 'Information om porttelefonen.',
    icon: IconPhone,
  },
  {
    slug: 'soprum-grovsoprum',
    label: 'Soprum – Grovsoprum',
    teaser: 'Sopsortering och hantering av grovsopor.',
    icon: IconRecycle,
  },
  {
    slug: 'andrahandsuthyrning',
    label: 'Andrahandsuthyrning',
    teaser: 'Vad som gäller vid andrahandsuthyrning.',
    icon: IconKey,
  },
  {
    slug: 'tvattstuga',
    label: 'Tvättstuga',
    teaser: 'Gemensam tvättstuga på gården.',
    icon: IconWashMachine,
  },
  {
    slug: 'boka-tvattstuga',
    label: 'Boka tvättstuga',
    teaser: 'Boka tvättid i tvättstugan.',
    icon: IconCalendarPlus,
  },
];
