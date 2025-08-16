"use client";

import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Lightbulb } from "lucide-react";
import Link from "next/link";
import { data } from "@/data/concepts";

type AlertConceptProps = {
  keys: string[];
};

export const AlertConcept = ({ keys }: AlertConceptProps) => {
  const items = data.filter((item) => keys.includes(item.key));

  return (
    <Alert>
      <Lightbulb className="h-4 w-4" />
      <AlertTitle>یک نکته!</AlertTitle>
      <AlertDescription>
        برخی از مفاهیم مطرح‌شده در این مقاله پیش‌تر در قالب مقالات جداگانه توضیح
        داده شده‌اند، با این حال مطالعه آن‌ها پیش‌نیاز این مطلب نیست.
        <br />
        با کلیک بر روی هر عنوان می‌توانید به مقاله مربوطه دسترسی پیدا کنید.
        <ul className="list-disc ml-6 mt-2 space-y-1">
          {items.map((item) => (
            <li key={item.key}>
              <Link href={item.href}>{item.key}</Link>
              <p className="text-[15px] text-gray-500">
                {item.summary}
              </p>
            </li>
          ))}
        </ul>
      </AlertDescription>
    </Alert>
  );
};
