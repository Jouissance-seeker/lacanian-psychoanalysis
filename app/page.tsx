import { ArrowRight } from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Link from "next/link";

export default function Page() {
  const data = [
    {
      id: 1,
      title: "سری مفاهیم تخصصی روانکاوی لکانی : ژوئیسانس (jouissance)",
      summary:
        "ژوئیسانس پدیده ای است که در جریان زندگی همواره حضور داشته و به صورت الگوهایی تکرارشونده بروز میکند.",
      url: "/concept-jouissance",
      image: "/images/thumbnail-concept-jouissance.png",
    },
    {
      id: 2,
      title: "سری مفاهیم تخصصی روانکاوی لکانی : امر نمادین (the symbolic order)",
      summary:
        "امر نمادین قلمرو زبان، قانون و ساختارهای اجتماعی است که جایگاه سوژه را در دنیای بیرون تعیین میکند و روابط او را سامان میبخشد.",
      url: "/concept-the-symbolic-order",
      image: "/images/thumbnail-concept-the-symbolic-order.png",
    },
    {
      id: 3,
      title: "سری مفاهیم تخصصی روانکاوی لکانی : امر واقع (the real)",
      summary:
        "امر واقع بخشی از تجربه است که نمی‌توان آن را به سطح کلمه یا تصویر فروکاست.",
      url: "/concept-the-real-order",
      image: "/images/thumbnail-concept-the-real-order.png",
    },
    {
      id: 4,
      title: "سری مفاهیم تخصصی روانکاوی لکانی : امر خیالی (the imaginary)",
      summary:
        "ایگو در این ساحت شکل میگیرد و بر پایه یک کژبازشناسی بنیادی استوار است.",
      url: "/concept-the-imaginary-order",
      image: "/images/thumbnail-concept-the-imaginary-order.png",
    },
    {
      id: 5,
      title: "سری مفاهیم تخصصی روانکاوی لکانی : مرحله آینه ای (mirror stage)",
      summary:
        "مرحله آینه ای نقطه آغازین شکل گیری هویت سوژه است.",
      url: "/concept-mirror-stage",
      image: "/images/thumbnail-concept-mirror-stage.png",
    },
  ];

  return (
    <section className="py-10 container mx-auto">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-8">
        {data.map((post) => (
          <Card
            key={post.id}
            className="grid grid-rows-[auto_auto_1fr_auto]  gap-1 pt-0 rounded-2xl overflow-hidden"
          >
            <div className="aspect-16/9 w-full">
              <Link
                href={post.url}
                target="_blank"
                className="transition-opacity duration-200 fade-in hover:opacity-70"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover object-center"
                />
              </Link>
            </div>
            <CardHeader>
              <h3 className="text-lg font-semibold hover:underline">
                <Link href={post.url} target="_blank">
                  {post.title}
                </Link>
              </h3>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-[15px]">{post.summary}</p>
            </CardContent>
            <CardFooter>
              <Link
                href={post.url}
                target="_blank"
                className="flex items-center text-foreground hover:underline"
              >
                <ArrowRight className="ml-2 size-4" />
                مشاهده بیشتر
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
