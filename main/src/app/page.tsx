import Link from "next/link";

const mockUrl = [
  "https://utfs.io/f/a2cf4bb0-d191-436d-baaf-94be7d96f536-m1u9pv.jpg",
  "https://utfs.io/f/c89f71a4-9849-45c3-9b79-23bc14ee46e2-26a8m.jpg",
  "https://utfs.io/f/6544cd21-50b7-448c-948d-9e92977197bb-6uwqs.jpg",
  "https://utfs.io/f/6f34b978-f770-4814-83b2-1890ea75adcd-rgz8g5.jpeg",
];

const mockImages = mockUrl.map((url, i) => ({
  id: i + 1,
  url,
}));

export default function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" className="h-36" />
          </div>
        ))}
      </div>
    </main>
  );
}
