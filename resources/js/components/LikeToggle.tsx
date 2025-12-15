import { Heart, LoaderCircle } from "lucide-react";
import { Puppy, SharedData } from "../types";
import { usePage, useForm } from "@inertiajs/react";
import clsx from "clsx";
import { like } from "@/routes/puppies";

export function LikeToggle({ puppy }: { puppy: Puppy }) {
  const { auth } = usePage<SharedData>().props;
  const { processing, patch } = useForm({});

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        patch(like(puppy.id).url, { preserveScroll: true });
      }}
    >
      <button
        type="submit"
        className={clsx('group', !auth.user && 'cursor-not-allowed')}
        disabled={!auth.user || processing}
      >
        {processing ? (
          <LoaderCircle className="animate-spin stroke-slate-300" />
        ) : (
          <Heart
            className={clsx(
              puppy.likedBy.includes(auth.user?.id) && auth.user
                ? "fill-pink-500 stroke-none"
                : "stroke-slate-200 group-hover:stroke-slate-300"
            )}
          />
        )}
      </button>
    </form>
  );
}
