import useSwr from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const ViewCount = ({ slug }: { slug: string }) => {
  const { data } = useSwr(`/${slug}/stats`, fetcher);
  if (!data) return null;
  return data.count;
}
