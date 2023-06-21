import { client } from "$lib/utils/sanity";

export async function load() {
  const siteSettings = /* groq */ `*[_type == "siteSettings"][0]{
    title,
    description,
    tags,
    "image": image.asset->url, 
    "alt": image.alt, 
    wordCloud{
      "shape": shape[0],
      uselessWords
    }
  }`;
  const words = /* groq */ `*[_type == "post"]{title, "title": excerpt[0].children[0].text}`;
  const page = /* groq */ `*[_type == 'page'][0]{
    "content": content[]->{
      title, 
      "description": excerpt[0].children[0].text,
      cta,
      "slug": slug.current,
      order,
      publishedAt,
      "image": featuredMedia.asset->url,
      "alt": featuredMedia.alt,
      "categories": categories[]->
    }
  }`;

  const query = `{
    "settings": ${siteSettings},
    "words": ${words},
    "page": ${page},
  }`;

  const data = await client.fetch(query);
  console.log("data: ", data);

  return {
    data,
  };
}
