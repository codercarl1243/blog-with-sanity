import { groq } from "next-sanity";


export const GET_ALL_POSTS = groq`*[ _type == "post" ] | order(publishedAt){
    _id,
    title,
      "image": {
        "asset": mainImage.asset,
        "alt": coalesce(mainImage.alt, "")
      },
      "slug": slug.current,
      author->{
         "slug": slug.current,
        image,
        name,
        bio
      },
      categories[]->{
        description,
        title,
        "slug": slug.current
      },
      body,
      publishedAt
  }`