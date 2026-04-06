import { useState } from 'react';
import { Link } from 'react-router-dom';
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
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="relative">
      <ul className="relative flex items-center space-x-0">
        {navItems.map((navItem) => {
          const isActive = hoveredId === navItem.id || openMenu === navItem.label;

          return (
            <li
              key={navItem.label}
              className="relative"
              onMouseEnter={() => {
                setHoveredId(navItem.id);
                setOpenMenu(navItem.subMenus ? navItem.label : null);
              }}
              onMouseLeave={() => {
                setHoveredId(null);
                setOpenMenu(null);
              }}
            >
              {navItem.subMenus ? (
                <button
                  className="text-sm py-1.5 px-4 flex cursor-pointer group transition-colors duration-300 items-center justify-center gap-1 text-neutral-700 hover:text-neutral-900 relative z-10"
                  onClick={() => setOpenMenu(openMenu === navItem.label ? null : navItem.label)}
                  type="button"
                >
                  <span>{navItem.label}</span>
                  <ChevronDown
                    className={`h-4 w-4 duration-300 transition-transform ${
                      openMenu === navItem.label ? 'rotate-180' : ''
                    }`}
                  />
                  {isActive && (
                    <motion.div
                      layoutId="hover-bg"
                      className="absolute inset-0 size-full bg-primary-100"
                      style={{ borderRadius: 999 }}
                    />
                  )}
                </button>
              ) : (
                <Link
                  to={navItem.link ?? '#'}
                  className="text-sm py-1.5 px-4 flex cursor-pointer transition-colors duration-300 items-center justify-center gap-1 text-neutral-700 hover:text-neutral-900 relative z-10"
                >
                  <span>{navItem.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="hover-bg"
                      className="absolute inset-0 size-full bg-primary-100"
                      style={{ borderRadius: 999 }}
                    />
                  )}
                </Link>
              )}

              <AnimatePresence>
                {openMenu === navItem.label && navItem.subMenus && (
                  <div className="w-auto absolute left-1/2 -translate-x-1/2 top-full pt-2 z-50">
                    <motion.div
                      className="bg-white border border-primary-100 p-4 w-max shadow-xl"
                      style={{ borderRadius: 16 }}
                      layoutId="menu"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                    >
                      <div className="w-fit shrink-0 flex space-x-8 overflow-hidden">
                        {navItem.subMenus.map((sub) => (
                          <motion.div layout className="w-full" key={sub.title}>
                            <h3 className="mb-4 text-sm font-semibold capitalize text-neutral-500">{sub.title}</h3>
                            <ul className="space-y-4">
                              {sub.items.map((item) => {
                                const Icon = item.icon;
                                return (
                                  <li key={item.label}>
                                    <Link
                                      to={item.link}
                                      className="flex items-start space-x-3 group"
                                      onClick={() => setOpenMenu(null)}
                                    >
                                      <div className="border border-primary-100 text-neutral-800 rounded-md flex items-center justify-center size-9 shrink-0 group-hover:bg-primary-50 group-hover:text-primary-700 transition-colors duration-300">
                                        <Icon className="h-5 w-5 flex-none" />
                                      </div>
                                      <div className="leading-5 w-max">
                                        <p className="text-sm font-medium text-neutral-900 shrink-0">{item.label}</p>
                                        <p className="text-xs text-neutral-500 shrink-0 group-hover:text-neutral-700 transition-colors duration-300 max-w-[220px]">
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
