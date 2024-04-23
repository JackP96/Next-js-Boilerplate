import Link from 'next/link';

import { resolveHref } from '@/sanity/lib/utils';
import type { MenuItem, SettingsPayload } from '@/types';

interface NavbarProps {
  data: SettingsPayload;
}
export default function Navbar(props: NavbarProps) {
  const { data } = props;
  const menuItems = data?.menuItems || ([] as MenuItem[]);
  return (
    <div className="sticky top-0 z-10 flex flex-wrap items-center gap-x-5 bg-white/80 p-4 backdrop-blur md:px-16 md:py-5 lg:px-32">
      {menuItems &&
        menuItems.map((menuItem) => {
          const href = resolveHref(menuItem?._type, menuItem?.slug);
          if (!href) {
            return null;
          }
          return (
            <Link
              key={menuItem.slug}
              className={`text-lg hover:text-black md:text-xl ${
                menuItem?._type === 'home'
                  ? 'font-extrabold text-black'
                  : 'text-gray-600'
              }`}
              href={href}
            >
              {menuItem.title}
            </Link>
          );
        })}
    </div>
  );
}
