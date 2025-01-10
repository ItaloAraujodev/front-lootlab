"use client";
import Link from "next/link";
import CardInfo from "../CardInfo";
import FeatureItem from "../FeatureItem";
import usePostStore from "@/stores/post.store";

function ProjectFeaturies() {
  const { post } = usePostStore();
  const midIdx = Math.ceil((post?.ProjectFeatures || [""]).length / 2);
  const firstColumnFeatures = post?.ProjectFeatures.slice(0, midIdx);
  const secondColumnFeatures = post?.ProjectFeatures.slice(midIdx);

  return (
    <div className="space-y-6">
      <CardInfo title="CARACTERÍSTICAS DO PROJETO">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-4">
            {firstColumnFeatures?.map((feature) => (
              <FeatureItem
                check={feature.isFeature}
                key={feature.createdAt + feature.title}
                info={feature.title}
              />
            ))}
          </div>
          <div className="space-y-4">
            {secondColumnFeatures?.map((feature) => (
              <FeatureItem
                check={feature.isFeature}
                key={feature.createdAt + feature.title}
                info={feature.title}
              />
            ))}
          </div>
        </div>
      </CardInfo>

      <CardInfo title="PARCERIAS">
        <div className="flex flex-col gap-2">
          {post?.partnerships.map((partner) => (
            <Link
              key={partner.id}
              href={partner.link_url}
              className="text-[#94a7c6] hover:text-[#ffffff]"
            >
              {partner.link_url}
            </Link>
          ))}
        </div>
      </CardInfo>
    </div>
  );
}

export default ProjectFeaturies;
