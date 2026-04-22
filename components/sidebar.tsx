"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import {
  BarChart3,
  Bot,
  Calculator,
  ChevronDown,
  ChevronRight,
  HelpCircle,
  History,
  Home,
  Settings,
  Shield,
  Terminal,
  User,
  X,
} from "lucide-react";

type SidebarProps = {
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
};

const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: Home },
  { label: "Calculators", href: "/calculators", icon: Calculator },
  {
    label: "AI Assistant",
    href: "/assistant",
    icon: Bot,
    children: [
      { label: "Workspace", href: "/assistant?tab=workspace", icon: Terminal },
      { label: "Intelligence", href: "/assistant?tab=intelligence", icon: Bot },
      { label: "Vault", href: "/assistant?tab=vault", icon: Shield },
      { label: "Settings", href: "/assistant?tab=settings", icon: Settings },
    ],
  },
  { label: "History", href: "/history", icon: History },
  { label: "Analytics", href: "/analytics", icon: BarChart3 },
  { label: "Settings", href: "/settings/user", icon: Settings },
];

const footerItems = [
  { label: "Support", href: "/support", icon: HelpCircle },
  { label: "Account", href: "/account", icon: User },
];

function isActive(pathname: string, href: string) {
  if (href === "/dashboard") return pathname === "/dashboard";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Sidebar({ mobileOpen, setMobileOpen }: SidebarProps) {
  const pathname = usePathname();

  const aiSectionActive = pathname.startsWith("/assistant");

  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({
    "/assistant": true,
  });

  const resolvedOpenGroups: Record<string, boolean> = useMemo(
    () => ({
      ...openGroups,
      "/assistant": aiSectionActive || openGroups["/assistant"],
    }),
    [aiSectionActive, openGroups]
  );

  return (
    <>
      <div
        className={`fixed inset-0 z-30 bg-black/60 lg:hidden ${
          mobileOpen ? "block" : "hidden"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      <aside
        className={`fixed left-0 top-0 z-40 h-screen w-64 border-r border-slate-700/30 bg-[#10141a] text-slate-200 transition-transform duration-200 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between bg-[#080c12] p-4 lg:block">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-widest text-sky-300">
                SOMATRIX_ENGINE
              </h2>
              <p className="mt-1 text-[10px] uppercase tracking-[0.22em] text-slate-500">
                Engineering Workspace
              </p>
            </div>

            <button
              onClick={() => setMobileOpen(false)}
              className="rounded border border-slate-700/40 p-2 text-slate-400 lg:hidden"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <nav className="mt-4 flex-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(pathname, item.href);
              const hasChildren = !!item.children?.length;
              const expanded = resolvedOpenGroups[item.href];

              if (!hasChildren) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex w-full items-center gap-3 px-4 py-3 text-left text-xs font-medium uppercase tracking-tight transition ${
                      active
                        ? "border-l-2 border-sky-300 bg-sky-300/5 text-sky-300"
                        : "text-slate-500 hover:bg-white/5 hover:text-sky-300"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </Link>
                );
              }

              return (
                <div key={item.href}>
                  <button
                    type="button"
                    onClick={() =>
                      setOpenGroups((prev) => ({
                        ...prev,
                        [item.href]: !resolvedOpenGroups[item.href],
                      }))
                    }
                    className={`flex w-full items-center justify-between px-4 py-3 text-left text-xs font-medium uppercase tracking-tight transition ${
                      active
                        ? "border-l-2 border-sky-300 bg-sky-300/5 text-sky-300"
                        : "text-slate-500 hover:bg-white/5 hover:text-sky-300"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <Icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </span>

                    {expanded ? (
                      <ChevronDown className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )}
                  </button>

                  {expanded && (
                    <div className="ml-6 border-l border-slate-700/20 pl-3">
                      {item.children?.map((child) => {
                        const ChildIcon = child.icon;
                        const childActive =
                          pathname === "/assistant" &&
                          ((typeof window !== "undefined" &&
                            window.location.search === child.href.replace("/assistant", "")) ||
                            child.href.includes("intelligence"));

                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className={`flex items-center gap-3 px-3 py-2 text-[11px] font-medium uppercase tracking-tight transition ${
                              childActive
                                ? "text-sky-300"
                                : "text-slate-500 hover:text-sky-300"
                            }`}
                          >
                            <ChildIcon className="h-3.5 w-3.5" />
                            <span>{child.label}</span>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="border-t border-slate-700/20 px-4 py-4">
            <button className="w-full bg-gradient-to-br from-sky-300 to-cyan-400 px-4 py-2.5 text-sm font-bold text-[#002c37] shadow-lg shadow-sky-300/10 transition active:scale-95">
              New Calculation
            </button>

            <div className="mt-6 space-y-1">
              {footerItems.map((item) => {
                const Icon = item.icon;
                const active = isActive(pathname, item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center gap-2 px-2 py-2 text-xs font-medium transition ${
                      active
                        ? "text-sky-300"
                        : "text-slate-400 hover:text-slate-100"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}