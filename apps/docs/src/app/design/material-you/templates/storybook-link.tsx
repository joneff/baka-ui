"use client";
import Link from "next/link";

export const StorybookLink = (props: any) => {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.stopPropagation();
  };

  return <Link {...props} onClick={handleClick} target="_blank" />;
};
