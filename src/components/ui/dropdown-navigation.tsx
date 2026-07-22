import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

type DropdownSubMenuItem = {
  label: string;
  description: string;
  icon: React.ElementType;
  link: string;
};

type DropdownSubMenu = {
  title: string;
  items: DropdownSubMenuItem[];
};

export type DropdownNavItem = {
  id: number;
  label: string;
  subMenus?: DropdownSubMenu[];
  link?: string;
};

type Props = {
  navItems: DropdownNavItem[];
};

export function DropdownNavigation({ navItems }: Props) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const { pathname } = useLocation();

  const isLinkActive = (link?: string) => {
    if (!link) return false;
    if (link === '/') return pathname === '/';
    return pathname === link || pathname.startsWith(`${link}/`);
  };

  const navItemClass = (active: boolean) =>
    [
      'relative z-10 flex items-center justify-center gap-1 rounded-lg px-3 py-2 text-sm font-semibold transition-colors duration-200',
      active
        ? 'text-primary-700 bg-primary-50'
        : 'text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900',
    ].join(' ');

  return (
    <div className="relative">
      <ul className="relative flex flex-wrap items-center justify-center gap-0.5">
        {navItems.map((navItem) => {
          const linkActive = navItem.link ? isLinkActive(navItem.link) : pathname.startsWith('/services');

          return (
            <li
              key={navItem.label}
              className="relative"
              onMouseEnter={() => {
                setOpenMenu(navItem.subMenus ? navItem.label : null);
              }}
              onMouseLeave={() => {
                setOpenMenu(null);
              }}
            >
              {navItem.subMenus ? (
                <button
                  className={navItemClass(linkActive)}
                  onClick={() => setOpenMenu(openMenu === navItem.label ? null : navItem.label)}
                  type="button"
                  aria-expanded={openMenu === navItem.label}
                >
                  <span>{navItem.label}</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      openMenu === navItem.label ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              ) : (
                <NavLink
                  to={navItem.link ?? '#'}
                  className={navItemClass(linkActive)}
                  onClick={() => setOpenMenu(null)}
                >
                  <span>{navItem.label}</span>
                </NavLink>
              )}

              <AnimatePresence>
                {openMenu === navItem.label && navItem.subMenus && (
                  <div className="absolute left-1/2 top-full z-50 w-auto max-w-[calc(100vw-1rem)] -translate-x-1/2 pt-3">
                    <motion.div
                      className="w-max max-w-[calc(100vw-1rem)] overflow-x-auto rounded-2xl border border-primary-100 bg-white p-5 shadow-xl"
                      layoutId="menu"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                    >
                      <div className="flex w-fit shrink-0 gap-10 overflow-hidden">
                        {navItem.subMenus.map((sub) => (
                          <motion.div layout className="min-w-[200px]" key={sub.title}>
                            <h3 className="mb-3 border-b border-neutral-100 pb-2 text-xs font-bold uppercase tracking-wider text-neutral-500">
                              {sub.title}
                            </h3>
                            <ul className="space-y-3">
                              {sub.items.map((item) => {
                                const Icon = item.icon;
                                return (
                                  <li key={item.label}>
                                    <Link
                                      to={item.link}
                                      className={`flex items-start gap-3 rounded-lg p-1.5 transition-colors hover:bg-primary-50/60 ${
                                        pathname === item.link ? 'bg-primary-50/80' : ''
                                      }`}
                                      onClick={() => setOpenMenu(null)}
                                    >
                                      <div className="flex size-9 shrink-0 items-center justify-center rounded-md border border-primary-100 bg-white text-neutral-800 transition-colors group-hover:border-primary-200 group-hover:text-primary-700">
                                        <Icon className="h-4 w-4 flex-none" />
                                      </div>
                                      <div className="min-w-0 leading-snug">
                                        <p className="text-sm font-semibold text-neutral-900">{item.label}</p>
                                        <p className="max-w-[220px] text-xs leading-relaxed text-neutral-500">
                                          {item.description}
                                        </p>
                                      </div>
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
