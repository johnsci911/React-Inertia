import { Heart, LoaderCircle } from "lucide-react";
import { Puppy, SharedData } from "../types";
import { Link, usePage } from "@inertiajs/react";
import clsx from "clsx";
import { like } from "@/routes/puppies";
import { useState } from "react";

export function LikeToggle({ puppy }: { puppy: Puppy }) {
  const [pending] = useState(false);
  const { auth } = usePage<SharedData>().props;

  return (
    <Link
      preserveScroll
      method="patch"
      href={like(puppy.id)}
      className={clsx('group', !auth.user && 'cursor-not-allowed')}
      disabled={!auth.user}
    >
      {pending ? (
        <LoaderCircle className="animate-spin stroke-slate-300" />
      ) : (
        <Heart
          className={
            puppy.likedBy.includes(auth.user?.id) && auth.user
              ? "fill-pink-500 stroke-none"
              : "stroke-slate-200 group-hover:stroke-slate-300"
          }
        />
      )}
    </Link>
  );
}
