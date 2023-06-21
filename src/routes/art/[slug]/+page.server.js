import { client } from "$lib/utils/sanity";

export async function load({ params: { slug } }) {
  const query = /* groq */ `*[_type == "post" && slug.current == $slug][0]{
    title,
    cta,
    "image": featuredMedia.asset->url,
    "alt": featuredMedia.alt,
    "palette": featuredMedia.asset->metadata.palette.darkMuted.background,
    "description": excerpt[0].children[0].text,
    body,
    publishedAt,
    "author": authors[0]->name,
    "tags": tags[]->slug.current
  }`;

  const post = await client.fetch(query, { slug });

  return {
    post,
  };
}
