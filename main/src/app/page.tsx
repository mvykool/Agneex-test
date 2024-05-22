import { SignedOut, SignedIn } from "@clerk/nextjs"
import { getImages } from "~/server/queries"
import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-dynamic"

async function Images() {
  const images = await getImages();

  return (
    <div className="flex flex-wrap gap-4">
      {images.map((image) => (
        <div key={image.id} className="w-48">
          <Link href={`/img/${image.id}`}>
            <Image
              src={image.url}
              alt={image.name}
              width={300}
              height={100}
              className="min-h-28 max-h-48 w-48"
            />
          </Link>

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
