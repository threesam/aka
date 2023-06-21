import { client } from "$lib/utils/sanity";

export async function load() {
  const siteSettings = /* groq */ `*[_type == "siteSettings"][0]{"image": featuredMedia.asset->url, "alt": featuredMedia.alt}`;
  const press = /* groq */ `*[_type == 'press']|order(publishedAt desc){
    ...
  }`;

  const query = `{
    "settings": ${siteSettings},
    "press": ${press}
  }`;

  const data = await client.fetch(query);

  return {
    data,
  };
}
