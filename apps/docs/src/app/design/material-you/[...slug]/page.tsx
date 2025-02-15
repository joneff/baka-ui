import React from "react";
import { useMDXComponent } from "next-contentlayer/hooks";
import { notFound } from "next/navigation";

import { allDocs } from "contentlayer/generated";
import { Text } from "@/components/text";
import { Pre } from "@/components/code/pre";
import { Code } from "@/components/code/code";
import { Column } from "@/components/layout/column";
import { TableOfContents } from "@material-you/templates/table-of-contents";
import { Table } from "@/components/table/table";
import { TableRow } from "@/components/table/table-row";
import { TableCell } from "@/components/table/table-cell";
import { TableHeaderCell } from "@/components/table/table-header-cell";
import { UL } from "@/components/misc/ul";
import { LI } from "@/components/misc/li";

import { Demo } from "../templates/demo";
import { OL } from "@/components/misc/ol";

const mdxComponents = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Text {...props} as="h2" variant={["display-medium", "article"]} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Text {...props} as="h2" variant={["display-small", "article"]} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Text {...props} as="h3" variant={["headline-large", "article"]} />
  ),
  h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Text {...props} as="h4" variant={["headline-medium", "article"]} />
  ),
  h5: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Text {...props} as="h5" variant={["headline-small", "article"]} />
  ),
  h6: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Text {...props} as="h6" variant={["title-large", "article"]} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <Text as="p" {...props} variant={["body-large", "article"]} />
  ),
  table: Table,
  tr: TableRow,
  td: TableCell,
  th: TableHeaderCell,
  pre: Pre,
  code: Code,
  ul: UL,
  ol: OL,
  li: LI,
  Demo: Demo,
};

export const dynamic = "force-static";

export default function MaterialYouPage(props: { params?: { slug?: string[] } }) {
  const slug = props.params?.slug?.join("/") ?? "";

  const doc = allDocs.find(
    (doc) => doc._raw.flattenedPath === "design/material-you" + (slug ? `/${slug}` : "")
  );

  if (!doc) {
    notFound();
  }

  const MDXContent = useMDXComponent(doc.body.code);

  return (
    <>
      <Column size={[8, 8, 8, 8]} className="pt-[45px]  pb-[100px]">
        <article className="w-[100%]">
          <React.Suspense fallback={<div>loading</div>}>
            <MDXContent components={mdxComponents} />
          </React.Suspense>
        </article>
      </Column>
      <Column size={[4, 3, 2, 4]} className="hidden md:flex sticky top-[100px] h-[calc(100vh-100px)]">
        <TableOfContents data={doc.toc} />
      </Column>
    </>
  );
}

export const generateStaticParams = async () => {
  return allDocs
    .filter((doc) => doc._raw.flattenedPath.startsWith("design/material-you"))
    .map((doc) => {
      return { slug: doc._raw.flattenedPath.replace("design/material-you/", "").split("/") };
    });
};
