import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import { WaveSurferPlayer } from "@/components/wavesurfer-player";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Image: (props) => (
      <Image
        className="mt-4 w-full rounded-2xl border object-cover border border-gray-800"
        alt={props.alt}
        {...props}
      />
    ),
    WaveSurferPlayer,
    ...components,
  };
}
