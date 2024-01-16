import { useSeoMeta } from '#imports'

export interface SEO {
  title: string
  description: string
  ogTitle?: string
  ogDescription?: string
}

export const generateSEO = ({title, description, ogTitle, ogDescription}: SEO) => {
  return(
    useSeoMeta({
      title: title,
      ogTitle: ogTitle ? ogTitle : title,
      description: description,
      ogDescription: ogDescription ? ogDescription : description,
    })
  )
}
