import { Toaster } from "@/components/ui/sonner";
import { usePage } from "@inertiajs/react";
import { useEffect } from "react";
import { toast } from "sonner";

export function PageWrapper({ children }: { children: React.ReactNode }) {
  const { props } = usePage<{
    flash?: { success?: string; info?: string; warning?: string };
    errors?: Record<string, string | string[]>;
  }>();

  useEffect(() => {
    const flash = props.flash;
    const errors = props.errors;

    if (flash) {
      if (flash.success) toast.success(flash.success);
      if (flash.info) toast(flash.info);
      if (flash.warning) toast(`warning: ${flash.warning}`);
    }

    if (errors) {
      if (errors.error) {
        const messages = Array.isArray(errors.error) ? errors.error : [errors.error];
        messages.forEach(msg => toast.error(msg));
      }
    }
  }, [props.flash, props.errors]);

  return (
    <>
      <div className="min-h-dvh bg-gradient-to-b from-cyan-200 to-white to-[60vh]">
        {children}
      </div>
      <Toaster position="top-center" richColors />
    </>
  )
}

