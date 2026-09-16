import { ComponentType } from 'react';
import { IconTools, IconBuilding, IconUsers } from '@tabler/icons-react';

export type Topic = {
  slug: string;
  label: string;
  teaser: string;
  icon: ComponentType<{ className?: string; stroke?: number }>;
};

export const topics: Topic[] = [
  {
    slug: 'felanmalan',
    label: 'Felanmälan',
    teaser: 'Här hittar du information om hur du gör olika typer av felanmälningar.',
    icon: IconTools,
  },
  {
    slug: 'forvaltningsfragor',
    label: 'Förvaltningsfrågor',
    teaser: 'Här hittar du information om hur vår bostadsrättsförening förvaltas.',
    icon: IconBuilding,
  },
  {
    slug: 'styrelsen',
    label: 'Styrelsen',
    teaser: 'Här hittar du information om styrelsen.',
    icon: IconUsers,
  },
];
