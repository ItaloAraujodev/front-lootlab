import type { FormDataToUpdate } from "@/components/Others/TabsUpdatePost/Schema";
import type { IPost } from "@/interfaces/interfaces";

export function transformPostToSchema(post: IPost): FormDataToUpdate {
  return {
    oldImageUrl: post.Image[0].url,
    postId: post.id,
    title: post.title || "",
    market_link: post.market_link || "",
    score: post.score ?? null,
    investment: String(post.investment || ""),
    network: post.network || "",
    token: post.token || "",
    comment_author: post.comment_author || "",
    file: new DataTransfer().files, // Simula uma FileList vazia
    Image: [{ id: post.Image[0].id }],
    links: post.links.map((link) => ({
      id: link.id,
      url: link.url,
    })),
    projectFeatures: post.ProjectFeatures.map((feature) => ({
      id: feature.id,
      title: feature.title,
      isFeature: !!feature.isFeature,
    })),
    launchInfo: {
      id: post.launchInfo.id,
      launchDate: new Date(post.launchInfo.launchDate),
      marketCap: post.launchInfo.marketCap,
      currentSupply: post.launchInfo.currentSupply,
      totalSupply: +post.launchInfo.totalSupply,
      privateSale: post.launchInfo.privateSale,
      publicSale: post.launchInfo.publicSale,
    },
    genres: post.genres.map((genre) => ({
      id: genre.id,
      name: genre.name,
    })),
    partnerships: post.partnerships.map((partner) => ({
      id: partner.id,
      type: partner.type,
      link_url: partner.link_url,
    })),
  };
}
