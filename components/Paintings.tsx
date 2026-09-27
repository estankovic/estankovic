import Section from "@/components/ui/Section";
import styles from "./Paintings.module.scss";

const PROFILE_URL = "https://www.instagram.com/eduard.stankovic/";
const LIMIT = 9;

interface InstagramPost {
  id: string;
  caption?: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
}

async function getPosts(): Promise<InstagramPost[]> {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  if (!token) return [];

  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&limit=${LIMIT}&access_token=${token}`;

  try {
    // Refresh the feed at most once per hour
    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) return [];
    const { data } = await res.json();
    return data ?? [];
  } catch {
    return [];
  }
}

export default async function Paintings() {
  const posts = await getPosts();

  return (
    <Section title="Paintings">
      {posts.length > 0 && (
        <ul className={styles.grid}>
          {posts.map((post) => (
            <li key={post.id}>
              <a href={post.permalink} target="_blank" rel="noopener noreferrer" className={styles.tile}>
                <img
                  src={post.media_type === "VIDEO" ? post.thumbnail_url : post.media_url}
                  alt={post.caption ?? "Painting by Eduard Stankovič"}
                  loading="lazy"
                />
              </a>
            </li>
          ))}
        </ul>
      )}
      <a href={PROFILE_URL} target="_blank" rel="noopener noreferrer" className={styles.more}>
        More on Instagram — @eduard.stankovic
      </a>
    </Section>
  );
}
