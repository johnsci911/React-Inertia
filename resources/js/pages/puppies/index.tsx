import { Container } from "@/components/Container"
import { Header } from "@/components/Header"
import { PageWrapper } from "@/components/PageWrapper"
import { PuppiesList } from "@/components/PuppiesList"
import { NewPuppyForm } from "@/components/NewPuppyForm"
import { Search } from "@/components/Search"
import { Shortlist } from "@/components/ShortList"

import { Filters, PaginationResponse, Puppy, SharedData } from "@/types"
import { usePage } from "@inertiajs/react"
import { useRef } from "react"

export default function App({ puppies, likedPuppies, filters }: { puppies: PaginationResponse<Puppy>, likedPuppies: Puppy[], filters: Filters }) {
  const { auth } = usePage<SharedData>().props;
  const mainRef = useRef<HTMLDivElement>(null);

  return (
    <PageWrapper>
      <Container>
        <Header />
        <div className="shadow"></div>
        <main ref={mainRef} className="scroll-mt-6">
          <div className="mt-24 grid gap-8 sm:grid-cols-2">
            <Search filters={filters} />
            {auth.user && (
              <Shortlist puppies={likedPuppies} />
            )}
          </div>
          <PuppiesList puppies={puppies} />
          {auth.user && (
            <NewPuppyForm mainRef={mainRef} />
          )}
        </main>
      </Container>
    </PageWrapper>
  )
}
