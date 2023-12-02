import React from "react";
import { useMDXComponent } from "next-contentlayer/hooks";
import { notFound } from "next/navigation";

import { allDocs } from "contentlayer/generated";
import { Heading, Paragraph, Text } from "@/components/typography";
import { Pre } from "@/components/code/pre";
import { Code } from "@/components/code/code";
import { Column } from "@/components/layout/column";
import { TableOfContents } from "@/templates/table-of-contents";

const mdxComponents = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Heading {...props} as="h2" variant={["display-medium", "article"]} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Heading {...props} as="h2" variant={["display-small", "article"]} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Heading {...props} as="h2" variant={["headline-large", "article"]} />
  ),
  h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Heading {...props} as="h2" variant={["headline-medium", "article"]} />
  ),
  h5: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Heading {...props} as="h2" variant={["headline-small", "article"]} />
  ),
  h6: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Text {...props} as="h2" variant={["title-large", "article"]} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <Paragraph {...props} variant={["body-large", "article"]} />
  ),
  pre: Pre,
  code: Code,
};

export default function MaterialYouIndex(props: any) {
  const doc = allDocs.find((doc) => doc._raw.flattenedPath === "designs/material-you");

  if (!doc) {
    notFound();
  }

  const MDXContent = useMDXComponent(doc.body.code);

  return (
    <>
      <Column count={8} className="pt-[45px]">
        <article className="max-w-[100%]">
          <React.Suspense fallback={<div>loading</div>}>
            <MDXContent components={mdxComponents} />
          </React.Suspense>
        </article>
      </Column>
      <Column count={2} className="hidden lg:flex sticky top-[100px] h-[calc(100%-100px)]">
        <TableOfContents data={doc.toc} />
      </Column>
    </>
  );
}
