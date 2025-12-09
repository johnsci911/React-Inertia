import { Container } from "@/components/Container"
import { Header } from "@/components/Header"
import { PageWrapper } from "@/components/PageWrapper"
import { PuppiesList } from "@/components/PuppiesList"
import { NewPuppyForm } from "@/components/NewPuppyForm"
import { Search } from "@/components/Search"
import { Shortlist } from "@/components/ShortList"

import { useState } from "react"
import { Puppy, SharedData } from "@/types"
import { usePage } from "@inertiajs/react"

export default function App({ puppies }: { puppies: Puppy[] }) {
  return (
    <PageWrapper>
      <Container>
        <Header />
        <div className="shadow"></div>
          <Main pups={puppies} />
      </Container>
    </PageWrapper>
  )
}

function Main({ pups }: { pups: Puppy[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [puppies, setPuppies] = useState<Puppy[]>(pups);
  const { auth } = usePage<SharedData>().props;

  return (
    <main>
      <div className="mt-24 grid gap-8 sm:grid-cols-2">
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        {auth.user && (
          <Shortlist puppies={puppies} setPuppies={setPuppies} />
        )}
      </div>
      <PuppiesList
        puppies={puppies}
        searchQuery={searchQuery}
        setPuppies={setPuppies}
      />
      <NewPuppyForm puppies={puppies} setPuppies={setPuppies} />
    </main>
  );
}


