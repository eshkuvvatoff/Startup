import { AuthEntryButtons } from "@/components/auth/auth-buttons";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-background text-foreground flex items-center justify-center overflow-hidden p-6 transition-colors duration-300">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-brand-violet/20 dark:bg-brand-violet/30 blur-[100px]" />
        <div className="absolute -bottom-32 -right-32 w-[450px] h-[450px] rounded-full bg-brand-blue/15 dark:bg-brand-blue/25 blur-[100px]" />
        <div className="absolute top-1/3 right-1/4 w-[250px] h-[250px] rounded-full bg-brand-rose/10 dark:bg-brand-rose/15 blur-[80px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-8 text-center max-w-md">
        <div className="flex flex-col items-center gap-2">
          <span className="font-saira-stencil text-4xl tracking-[0.25em] bg-gradient-to-b from-foreground via-foreground to-foreground/40 bg-clip-text text-transparent">
            Persona
          </span>
          <span className="w-12 h-px bg-gradient-to-r from-transparent via-brand-violet to-transparent" />
          <p className="text-sm text-muted-foreground/70 mt-2 tracking-[0.08em] font-light">
            Demo — choose how to continue
          </p>
        </div>

        <AuthEntryButtons />
      </div>
    </main>
  );
}
