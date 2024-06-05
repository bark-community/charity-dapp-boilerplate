'use client';

import { AppHero } from '../ui/ui-layout';

const links: { label: string; href: string }[] = [
  { label: 'Donate to Rebuilding Ukrain', href: 'https://' },
  { label: 'Global Food Programs', href: 'https://' },
  { label: 'Children Program', href: 'https://' },
  { label: 'Global Disaster Relief', href: 'https://' },
  {
    label: 'About BARK Foundation',
    href: 'https://github.com/bark-community/',
  },
];

export default function DashboardFeature() {
  return (
    <div>
      <AppHero title="Charity Aid Platform" subtitle="Say hi to your new Solana dApp." />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <p>Charity Aid, donate and Disaster Relief</p>
          {links.map((link, index) => (
            <div key={index}>
              <a
                href={link.href}
                className="link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
