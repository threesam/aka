import { client } from "$lib/utils/sanity";

export async function load() {
  const siteSettings = /* groq */ `*[_type == "siteSettings"][0]{"image": image.asset->url, "alt": image.alt}`;
  const postsQuery = /* groq */ `*[_type == 'post']|order(publishedAt desc){
    "id": _id,
    "slug": slug.current,
    title,
    publishedAt,
    "categories": categories[]->slug.current,
    "excerpt": excerpt[0].children[0].text,
    "image": featuredMedia.asset->url,
    "alt": featuredMedia.alt,
    "tags": tags[]->slug.current
  }`;
  const categories = /* groq */ `*[_type == "category"]|order(order asc){"slug": slug.current, title, description, order}`;

  const query = `{
    "settings": ${siteSettings},
    "posts": ${postsQuery},
    "categories": ${categories}
  }`;

  const data = await client.fetch(query);

  return {
    data,
  };
}
