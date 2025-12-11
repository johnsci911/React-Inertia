import { Dispatch, SetStateAction, useState } from "react";
import { Heart, LoaderCircle } from "lucide-react";
import { Puppy, SharedData } from "../types";
import { toggleLikedStatus } from "../queries";
import { usePage } from "@inertiajs/react";
import clsx from "clsx";

export function LikeToggle({ puppy, setPuppies }: { puppy: Puppy, setPuppies: Dispatch<SetStateAction<Puppy[]>> }) {
  const [pending, setPending] = useState(false);
  const { auth } = usePage<SharedData>().props;

  return (
    <button
      className={clsx('group', !auth.user && 'cursor-not-allowed')}
      disabled={!auth.user}
      onClick={async () => {
        setPending(true);
        const updatedPuppy = await toggleLikedStatus(puppy.id);
        setPuppies((prevPuppies) =>
          prevPuppies.map((p) => (p.id === updatedPuppy.id
            ? updatedPuppy
            : p))
        );
        setPending(false);
      }}
    >
      {pending ? (
        <LoaderCircle className="animate-spin stroke-slate-300" />
      ) : (
        <Heart
          className={
            puppy.likedBy.includes(1) && auth.user
              ? "fill-pink-500 stroke-none"
              : "stroke-slate-200 group-hover:stroke-slate-300"
          }
        />
      )}
    </button>
  );
}
