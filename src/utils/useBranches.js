import { useEffect, useState } from "react";

// ponytail: module cache, refetch on reload if per-page ordering matters
let cache = null;

const BRANCH_ORDER = {
  "senayan-branch": 0,
  "pluit-branch": 1,
  "siloam-specialist-center-senayan-branch": 2,
};

const decodeEntities = (s = "") =>
  s
    .replace(/&amp;/g, "&")
    .replace(/&#0?38;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"');

export function mapBranch(raw = {}) {
  const meta = raw.meta || {};
  const whatsapp = meta["whatsapp-link"] || "";
  const digits = whatsapp.match(/\d+/)?.[0] || "";
  const phone = digits ? `+${digits}` : "";
  const name = meta["branch-name"] || raw.title?.rendered || "";
  return {
    id: `wa-${raw.slug || raw.id}`,
    slug: raw.slug || "",
    rawId: raw.id,
    name,
    address: decodeEntities(meta["branch-address"] || ""),
    schedule: (meta["opening-hours"] || "")
      .split(/\r?\n/)
      .map((s) => s.trim())
      .filter(Boolean),
    phone,
    phoneLabel: name.replace(/\s*Branch\s*$/i, ""),
    whatsapp,
    mapSrc: meta["google-link"] || "",
    doctorIds: (meta.doctors || []).map(String),
  };
}

export default function useBranches() {
  const [branches, setBranches] = useState(cache ?? []);
  const [isLoading, setLoading] = useState(cache ? false : true);

  useEffect(() => {
    if (cache) return;
    fetch(`${wpApiSettings.restUrl}wp/v2/branches?per_page=100`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch branches");
        return res.json();
      })
      .then((raws) => {
        cache = raws
          .map(mapBranch)
          .sort(
            (a, b) =>
              (BRANCH_ORDER[a.slug] ?? 99) - (BRANCH_ORDER[b.slug] ?? 99) ||
              a.rawId - b.rawId,
          );
        setBranches(cache);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return { branches, isLoading };
}
