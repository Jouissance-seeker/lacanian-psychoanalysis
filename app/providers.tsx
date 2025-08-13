"use client";

import { MDXProvider } from "@mdx-js/react";

const components = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 style={{ color: "tomato" }} {...props} />
  ),
};

export function Providers({ children }: { children: React.ReactNode }) {
  return <MDXProvider components={components}>{children}</MDXProvider>;
}
