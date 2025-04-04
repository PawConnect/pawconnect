import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { AdoptionPage } from "@/components/adoption-page"
import { Suspense } from "react"
import { AdoptionSkeleton } from "@/components/loading-skeleton"

export default function Adoption() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 container py-6">
        <Suspense fallback={<AdoptionSkeleton />}>
          <AdoptionPage />
        </Suspense>
      </main>
      <SiteFooter />
    </div>
  )
}

