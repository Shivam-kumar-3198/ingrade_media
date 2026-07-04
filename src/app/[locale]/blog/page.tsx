import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { ArrowRight } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/shared/section-heading";
import { JsonLd, breadcrumbJsonLd } from "@/components/seo/json-ld";
import { getAllPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/site-config";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Blog — Marketing and Development Notes",
  description:
    "Notes on paid media, web development, and reporting, written by the team that runs the accounts, not a content mill.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: siteConfig.url },
          { name: "Blog", url: `${siteConfig.url}/blog` },
        ])}
      />

      <section className="section-glow border-b border-white/5 py-20 sm:py-28">
        <div className="container">
          <SectionHeading
            eyebrow="Blog"
            title="Notes from people who run the accounts, not a content mill"
            description="Practical breakdowns of paid media, web development, and reporting decisions — written by whoever actually made the call."
          />
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <Card className="flex h-full flex-col overflow-hidden p-0 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-white/5 bg-secondary/30">
                  <Image
                    src={`/images/og/${post.slug}.svg`}
                    alt={`Cover illustration for "${post.title}"`}
                    fill
                    sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 90vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <Badge variant="secondary" className="w-fit">
                    {post.category}
                  </Badge>
                  <h2 className="mt-4 font-display text-lg font-semibold leading-snug">{post.title}</h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{post.description}</p>
                  <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
                    <span>{format(new Date(post.date), "MMM d, yyyy")} · {post.readingTime}</span>
                    <span className="inline-flex items-center gap-1 font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                      Read <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
