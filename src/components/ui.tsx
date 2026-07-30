import type { ComponentType, ReactNode } from 'react';

type IconComponent = ComponentType<{ size?: number; className?: string; 'aria-hidden'?: boolean }>;

type PanelProps = {
  children: ReactNode;
  className?: string;
};

export function Panel({ children, className = '' }: PanelProps) {
  return <article className={`panel ${className}`.trim()}>{children}</article>;
}

type SectionTitleProps = {
  icon: IconComponent;
  children: ReactNode;
  description?: string;
};

export function SectionTitle({ icon: Icon, children, description }: SectionTitleProps) {
  return (
    <div className="mb-4">
      <div className="section-title mb-0">
        <Icon size={18} aria-hidden />
        <span>{children}</span>
      </div>
      {description ? <p className="mt-2 text-xs leading-5 text-slate-400">{description}</p> : null}
    </div>
  );
}

type StatusTone = 'success' | 'warning' | 'danger' | 'neutral' | 'info';

type StatusPillProps = {
  children: ReactNode;
  tone?: StatusTone;
  icon?: IconComponent;
};

const statusToneClasses: Record<StatusTone, string> = {
  success: 'border-emerald-400/15 bg-emerald-400/10 text-emerald-300',
  warning: 'border-amber-400/15 bg-amber-400/10 text-amber-300',
  danger: 'border-rose-400/15 bg-rose-400/10 text-rose-300',
  neutral: 'border-white/[.07] bg-white/[.055] text-slate-300',
  info: 'border-sky-400/15 bg-sky-400/10 text-sky-300',
};

export function StatusPill({ children, tone = 'neutral', icon: Icon }: StatusPillProps) {
  return (
    <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-bold ${statusToneClasses[tone]}`}>
      {Icon ? <Icon size={14} aria-hidden /> : null}
      {children}
    </span>
  );
}

type StatCardProps = {
  icon: IconComponent;
  label: string;
  value: ReactNode;
  hint?: string;
};

export function StatCard({ icon: Icon, label, value, hint }: StatCardProps) {
  return (
    <div className="stat">
      <Icon aria-hidden />
      <div className="min-w-0">
        <span>{label}</span>
        <strong>{value}</strong>
        {hint ? <p className="mt-1 truncate text-xs text-slate-500">{hint}</p> : null}
      </div>
    </div>
  );
}

type EmptyStateProps = {
  icon: IconComponent;
  title: string;
  description: string;
  action?: ReactNode;
};

export function EmptyState({ icon: Icon, title, description, action }: EmptyStateProps) {
  return (
    <div className="empty-state">
      <Icon size={28} className="text-slate-500" aria-hidden />
      <h3 className="mt-3 text-sm font-black text-slate-200">{title}</h3>
      <p className="mt-1 max-w-md text-xs leading-5 text-slate-500">{description}</p>
      {action ? <div className="mt-4">{action}</div> : null}
    </div>
  );
}

type ProgressBarProps = {
  value: number;
  label?: string;
};

export function ProgressBar({ value, label }: ProgressBarProps) {
  const normalized = Math.min(100, Math.max(0, Math.round(value)));

  return (
    <div>
      {label ? (
        <div className="mb-2 flex items-center justify-between text-xs font-bold text-slate-400">
          <span>{label}</span>
          <span>{normalized}%</span>
        </div>
      ) : null}
      <div
        className="progress-track"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={normalized}
        aria-label={label || 'İlerleme'}
      >
        <div className="progress-value" style={{ width: `${normalized}%` }} />
      </div>
    </div>
  );
}

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  status: ReactNode;
  actions?: ReactNode;
  navigation: ReactNode;
};

export function PageHeader({ eyebrow, title, status, actions, navigation }: PageHeaderProps) {
  return (
    <header className="app-header">
      <div>
        <p className="text-xs font-bold uppercase tracking-[.28em] text-emerald-400">{eyebrow}</p>
        <h1 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">{title}</h1>
      </div>
      <div className="flex flex-col gap-3 sm:items-end">
        <div className="flex flex-wrap items-center gap-2">
          {status}
          {actions}
        </div>
        {navigation}
      </div>
    </header>
  );
}
