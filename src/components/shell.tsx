import type { FormEvent, ReactNode } from 'react';
import { Link2, LogOut } from 'lucide-react';
import { PageHeader, StatusPill } from './ui';

type LoginScreenProps = {
  error: string;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void | Promise<void>;
};

export function LoginScreen({ error, onSubmit }: LoginScreenProps) {
  return (
    <main className="relative grid min-h-screen place-items-center overflow-hidden px-4 py-10 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(52,211,153,.16),_transparent_38%),radial-gradient(circle_at_bottom_right,_rgba(56,189,248,.12),_transparent_38%)]" />
      <form
        onSubmit={onSubmit}
        className="relative w-full max-w-md rounded-[2rem] border border-white/[.08] bg-slate-900/85 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-8"
      >
        <div className="mb-7 flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-emerald-400 font-black text-slate-950 shadow-lg shadow-emerald-950/30">W</div>
          <div>
            <p className="text-xs font-black uppercase tracking-[.3em] text-emerald-400">Wapp Mesaj</p>
            <p className="mt-1 text-xs text-slate-500">Merkezi gönderim paneli</p>
          </div>
        </div>

        <h1 className="text-3xl font-black tracking-tight">Hesabınıza giriş yapın</h1>
        <p className="mt-2 text-sm leading-6 text-slate-400">Merkez veya şube hesabınızla güvenli şekilde devam edin.</p>

        <label className="mt-7 block text-sm font-bold text-slate-200">
          Kullanıcı adı
          <input name="username" autoComplete="username" className="field mt-2" required />
        </label>

        <label className="mt-4 block text-sm font-bold text-slate-200">
          Şifre
          <input name="password" type="password" autoComplete="current-password" className="field mt-2" required />
        </label>

        {error ? (
          <p role="alert" className="mt-4 rounded-2xl border border-rose-400/15 bg-rose-400/10 p-3 text-sm text-rose-300">
            {error}
          </p>
        ) : null}

        <button className="mt-6 w-full rounded-2xl bg-emerald-400 px-4 py-3 font-black text-slate-950 shadow-lg shadow-emerald-950/30 transition hover:bg-emerald-300 disabled:opacity-40">
          Giriş yap
        </button>
      </form>
    </main>
  );
}

type AppShellHeaderProps = {
  userName: string;
  title: string;
  extensionReady: boolean;
  navigation: ReactNode;
  onLogout: () => void | Promise<void>;
};

export function AppShellHeader({ userName, title, extensionReady, navigation, onLogout }: AppShellHeaderProps) {
  return (
    <PageHeader
      eyebrow={`Wapp Mesaj · ${userName}`}
      title={title}
      status={
        <StatusPill tone={extensionReady ? 'success' : 'warning'} icon={Link2}>
          {extensionReady ? 'Chrome eklentisi bağlı' : 'Chrome eklentisi bekleniyor'}
        </StatusPill>
      }
      actions={
        <button type="button" onClick={() => void onLogout()} className="control">
          <LogOut size={15} aria-hidden />
          Çıkış
        </button>
      }
      navigation={navigation}
    />
  );
}
