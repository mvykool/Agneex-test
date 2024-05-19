import { SignedOut, SignedIn } from "@clerk/nextjs"
import { getImages } from "~/server/queries"

export const dynamic = "force-dynamic"

async function Images() {

  const images = await getImages();

  return (
    <div className="flex flex-wrap gap-4">
      {images.map((image) => (
        <div key={image.id} className="w-48">
          <img src={image.url} alt="image" className="h-36" />
        </div>
      ))}
    </div>
  )
};

export default async function HomePage() {

  return (
    <main>
      <SignedOut>
        <div className="h-full w-full text-2xl">Please sign in</div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
