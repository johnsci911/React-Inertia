import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export function ImageUploadPreview({
  source,
  className,
  ...restProps
}: {
  source: File | null | string,
  className?: string,
} & React.ImgHTMLAttributes<HTMLImageElement>) {
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    if (source instanceof File) {
      const objectUrl = URL.createObjectURL(source);
      setTimeout(() => setSrc(objectUrl), 0);
      return () => {
        URL.revokeObjectURL(objectUrl);
      };
    } else {
      setTimeout(() => setSrc(source), 0);
    }
  }, [source])

  if (!src) {
    return null;
  }

  return <img src={src} alt="" className={cn("mt-4 h-24 rounded-md", className)} {...restProps} />;
}
