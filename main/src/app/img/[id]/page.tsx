import FullImagePage from "~/components/full-page-view";

export default function PhotoModal({
  params: { id: photodId }
}: {
  params: { id: string }
}) {

  const idAsNumber = Number(photodId)

  if (Number.isNaN(idAsNumber)) throw new Error("invalid id");

  return (
    <FullImagePage id={idAsNumber} />
  )
}

