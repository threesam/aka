import { client } from "$lib/utils/sanity";

export async function load() {
  const query = /* groq */ `*[_type == "siteSettings"][0]{
    title,
    description,
    tags,
    "image": image.asset->url, 
    "alt": image.alt,
    "author": author->{
      name,
      "image": image.asset->url,
      bio,
      "slug": slug.current
    },
    "aka": {
      title,
      description,
      excerpt,
      "image": image.asset->url,
      "alt": image.alt
    }
  }`;

  const data = await client.fetch(query);

  return {
    data,
  };
}
