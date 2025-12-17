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

export default function App({ puppies, filters }: { puppies: PaginationResponse<Puppy>, filters: Filters }) {
  return (
    <PageWrapper>
      <Container>
        <Header />
        <div className="shadow"></div>
          <Main paginatedPuppies={puppies} filters={filters} />
      </Container>
    </PageWrapper>
  )
}

function Main({ paginatedPuppies, filters }: { paginatedPuppies: PaginationResponse<Puppy>, filters: Filters }) {
  const { auth } = usePage<SharedData>().props;
  const mainRef = useRef<HTMLDivElement>(null);

  return (
    <main ref={mainRef} className="scroll-mt-6">
      <div className="mt-24 grid gap-8 sm:grid-cols-2">
        <Search filters={filters} />
        {auth.user && (
          <Shortlist puppies={paginatedPuppies.data} />
        )}
      </div>
      <PuppiesList puppies={paginatedPuppies} />
      {auth.user && (
        <NewPuppyForm mainRef={mainRef} />
      )}
    </main>
  );
}



