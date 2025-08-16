import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import { WaveSurferPlayer } from "@/components/wavesurfer-player";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    WaveSurferPlayer,
    ...components,
  };
}
