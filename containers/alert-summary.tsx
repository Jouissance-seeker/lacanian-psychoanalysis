"use client";

import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Lightbulb } from "lucide-react";
import Link from "next/link";

type AlertSummeryProps = {
  keys: string[];
};

export const AlertSummery = ({ keys }: AlertSummeryProps) => {
  const concepts: Record<string, { title: string; href: string }> = {
    "jouissance": { title: "ژوئیسانس", href: "/concept-jouissance" },
    "the symbolic order": { title: "امر نمادین", href: "/concept-the-symbolic-order" },
    "the imaginary order": { title: "امر خیالی", href: "/concept-the-imaginary-order" },
    "the real order": { title: "امر واقع", href: "/concept-the-real-order" },
    "mirror stage": { title: "مرحله آینه ای", href: "/concept-mirror-stage" },
  };
  const items = keys
    .map((key) => concepts[key])
    .filter(Boolean);

  if (items.length === 0) return null;

  return (
    <Alert>
      <Lightbulb className="h-4 w-4" />
      <AlertTitle>یک نکته!</AlertTitle>
      <AlertDescription>
        برخی از مفاهیم مطرح‌شده در این مقاله پیش‌تر در قالب مقالات جداگانه توضیح داده شده‌اند،
        با این حال مطالعه آن‌ها پیش‌نیاز این مطلب نیست.
        <br />
        با کلیک بر روی هر عنوان می‌توانید به مقاله مربوطه دسترسی پیدا کنید.
        <ul className="list-disc ml-6 mt-2 space-y-1">
          {items.map((item) => (
            <li key={item.title}>
              <Link href={item.href}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </AlertDescription>
    </Alert>
  );
}