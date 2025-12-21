import { PaginationResponse, type Puppy } from "../types";
import { LikeToggle } from "./LikeToggle";
import { Pagination } from "./pagination";
import { PuppyDelete } from "./puppy-delete";
import { PuppyUpdate } from "./puppy-update";

export function PuppiesList({
  puppies,
}: {
  puppies: PaginationResponse<Puppy>;
}) {
  return (
    <>
      <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {puppies.data.map((puppy) => (
          <PuppyCard key={puppy.id} puppy={puppy} />
        ))}
      </ul>
      <Pagination className="mt-6 border border-gray-200 rounded-lg p-2" meta={puppies.meta} links={puppies.links} />
    </>
  );
}

type PuppyCardProps = {
  puppy: Puppy;
}

function PuppyCard({ puppy }: PuppyCardProps) {
  return (
    <li key={puppy.id} className="overflow-clip rounded-lg bg-white shadow-md ring ring-black/5 hover:-translate-y-0.5 relative">
      {/* Only for puppy owners */}
      {puppy.can.update && (
        <div className="absolute top-2 right-2 items-center">
          <div className="flex gap-2">
            {<PuppyUpdate puppy={puppy} />}
            {<PuppyDelete puppy={puppy} />}
          </div>
        </div>
      )}
      <img
        className="aspect-square object-cover"
        alt={puppy.name}
        src={puppy.imageUrl}
      />
      <div className="gap flex items-center justify-between p-4 text-sm">
        <div className="flex items-center gap-2">
          <p className="font-semibold">{puppy.name}</p>
          <span className="text-slate-300">·</span>
          <p className="text-slate-500">{puppy.trait}</p>
        </div>
        <LikeToggle puppy={puppy} />
      </div>
    </li>
  )
}
