// fetching user publications data from mediumapi

export interface ArticleContent {
  id: string;
  content: string;
}

export interface ArticleInfo {
  id: string;
  title: string;
  subtitle: string;
  author: string;
  publication_id: string;
  published_at: string; // format datetime string
  last_modified_at: string; // format datetime string
  boosted_at: string | null; // bisa kosong atau null
  tags: string[];
  topics: string[];
  claps: number;
  voters: number;
  reads: number;
  views: number;
  word_count: number;
  responses_count: number;
  reading_time: number; // durasi (menit)
  url: string;
  unique_slug: string;
  image_url: string;
  lang: string;
  is_series: boolean;
  is_locked: boolean;
  is_shortform: boolean;
  top_highlight: string;
}

interface UserArticlesResponse {
  id: string;
  associated_articles: string[];
  count: number;
  total_pinned_articles: number;
  next: string;
}

export async function fetchUserArticles(userId: string) {
  const response = await fetch(
    ``,// https://medium2.p.rapidapi.com/user/${userId}/articles
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": process.env.RAPID_API_KEY || "",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch user articles");
  }

  const data: UserArticlesResponse = await response.json();
//   console.log(data);
  return data;
}

async function fetchArticlesContent(articleId: string) {
  const response = await fetch(
    `https://medium2.p.rapidapi.com/article/${articleId}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": process.env.RAPID_API_KEY || "",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch article");
  }

  const data: ArticleContent = await response.json();
//   console.log(data);
  return data;
}

async function fetchArticleInfo(articleId: string) {
  const response = await fetch(
    `https://medium2.p.rapidapi.com/article/${articleId}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": process.env.RAPID_API_KEY || "",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch article info");
  }

  const data: ArticleInfo = await response.json();
//   console.log(data);
  return data;
}

export async function assembleMediumContentList() {
  const user = await fetchUserArticles("5198a4edcf08");
  const articles = await Promise.all(
    user.associated_articles.map((articleId: string) =>
      fetchArticleInfo(articleId)
    )
  );
  return articles;
}

// a function for cutting off text after a certain number of characters
export function truncateText(text: string, maxLength: number) {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  }
  return text;
}
