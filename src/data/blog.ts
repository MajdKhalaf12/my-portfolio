import fs from "fs";
import path from "path";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import prisma from "./prisma"; // Import Prisma Accelerate client

type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
};

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

export async function markdownToHTML(markdown: string) {
  const p = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      // https://rehype-pretty.pages.dev/#usage
      theme: {
        light: "min-light",
        dark: "min-dark",
      },
      keepBackground: false,
    })
    .use(rehypeStringify)
    .process(markdown);

  return p.toString();
}

export async function getPost(slug: string) {
  // Retrieve a post from the database by slug
  const post = await prisma.post.findUnique({
    where: { slug },
    cacheStrategy: { ttl: 0 },
  });

  if (!post) {
    throw new Error(`Post with slug ${slug} not found`);
  }

  let rawContent = post.content;
  rawContent = rawContent.replace(/\\n/g, "\n");

  const content = await markdownToHTML(rawContent);

  return {
    source: content,
    metadata: {
      title: post.title,
      publishedAt: post.publishedAt.toString(),
      summary: post.summary,
      image: post.image,
    },
    slug,
  };
}

export async function getAllPosts() {
  const posts = await prisma.post.findMany({
    orderBy: {
      publishedAt: "desc",
    },
    cacheStrategy: { ttl: 0 },
  });

  return posts.map((post) => ({
    metadata: {
      title: post.title,
      publishedAt: post.publishedAt.toString(),
      summary: post.summary,
      image: post.image,
    },
    slug: post.slug,
    source: post.content,
  }));
}
