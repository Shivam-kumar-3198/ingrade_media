import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { format } from "date-fns";

import { JsonLd, breadcrumbJsonLd, articleJsonLd } from "@/components/seo/json-ld";
import { FinalCta } from "@/components/sections/final-cta";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";
import { siteConfig } from "@/lib/site-config";

export const revalidate = 3600;

interface BlogPostPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${siteConfig.url}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: `/images/og/${post.slug}.svg`, width: 1200, height: 630, alt: post.title }],
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: siteConfig.url },
          { name: "Blog", url: `${siteConfig.url}/blog` },
          { name: post.title, url: `${siteConfig.url}/blog/${post.slug}` },
        ])}
      />
      <JsonLd
        data={articleJsonLd({
          siteUrl: siteConfig.url,
          title: post.title,
          description: post.description,
          url: `${siteConfig.url}/blog/${post.slug}`,
          datePublished: post.date,
          authorName: post.author,
        })}
      />

      <article className="py-20 sm:py-28">
        <div className="container max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">{post.category}</p>
          <h1 className="mt-3 text-balance text-3xl font-semibold leading-tight sm:text-4xl">{post.title}</h1>
          <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
            <span>{post.author}, {post.authorRole}</span>
            <span aria-hidden="true">·</span>
            <time dateTime={post.date}>{format(new Date(post.date), "MMMM d, yyyy")}</time>
            <span aria-hidden="true">·</span>
            <span>{post.readingTime}</span>
          </div>

          <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 bg-secondary/30">
            <Image
              src={`/images/og/${post.slug}.svg`}
              alt={`Cover illustration for "${post.title}"`}
              fill
              sizes="(min-width: 1024px) 720px, 90vw"
              className="object-cover"
              priority
            />
          </div>

          <div className="prose prose-invert mt-10 max-w-none prose-headings:font-display prose-headings:font-semibold prose-a:text-primary prose-strong:text-foreground prose-p:leading-relaxed prose-p:text-foreground/85 prose-li:text-foreground/85">
            <MDXRemote source={post.content} />
          </div>
        </div>
      </article>

      <FinalCta />
    </>
  );
}
