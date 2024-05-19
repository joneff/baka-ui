import BadgeCatalog from "./catalog";

export default function BadgeDemo() {
  return (
    <div className="flex flex-col gap-[32px]">
      <BadgeCatalog variant="color-brand" />
      <BadgeCatalog variant="color-danger" />
      <BadgeCatalog variant="color-warning" />
      <BadgeCatalog variant="color-success" />
      <BadgeCatalog variant="color-important" />
      <BadgeCatalog variant="color-informative" />
      <div className="bg-neutral-background-static p-4 m-[-16px]">
        <BadgeCatalog variant="color-subtle" />
      </div>
    </div>
  );
}
