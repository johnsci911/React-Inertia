import { Toaster } from "@/components/ui/sonner";
import { usePage } from "@inertiajs/react";
import { useEffect } from "react";
import { toast } from "sonner";

export function PageWrapper({ children }: { children: React.ReactNode }) {
  const { props } = usePage<{ flash?: { success?: string; info?: string; warning?: string } }>();

  useEffect(() => {
    const flash = props.flash;
    if (!flash) return;
    if (flash.success) toast.success(flash.success);
    if (flash.info) toast(flash.info); // or toast('info', ...)
    if (flash.warning) toast('warning: ' + flash.warning);
  }, [props.flash]);

  return (
    <>
      <div className="min-h-dvh bg-gradient-to-b from-cyan-200 to-white to-[60vh]">
        {children}
      </div>
      <Toaster position="top-center" richColors />
    </>
  )
}

