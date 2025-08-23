// // lib/github.ts
// export async function getPinnedRepos() {
//   const query = `
//     {
//       user(login: "yawpie") {
//         pinnedItems(first: 6, types: REPOSITORY) {
//           nodes {
//             ... on Repository {
//               name
//               description
//               url
//               stargazerCount
//               forkCount
//               primaryLanguage {
//                 name
//                 color
//               }
//             }
//           }
//         }
//       }
//     }
//   `;

//   const res = await fetch("https://api.github.com/graphql", {
//     method: "POST",
//     headers: {
//       Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ query }),
//     next: { revalidate: 3600 }, // ISR 1 jam
//   });

//   const data = await res.json();
//   console.log(data);
  
//   return data.data.user.pinnedItems.nodes;
// }


// lib/github.ts

export interface Repo {
  name: string;
  description: string;
  url: string;
  stargazerCount: number;
  forkCount: number;
  primaryLanguage?: {
    name: string;
    color: string;
  };
}

export async function getPinnedRepos(): Promise<Repo[]> {
  const query = `
    {
      user(login: "yawpie") {
        pinnedItems(first: 6, types: REPOSITORY) {
          nodes {
            ... on Repository {
              name
              description
              url
              stargazerCount
              forkCount
              primaryLanguage {
                name
                color
              }
            }
          }
        }
      }
    }
  `;

  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
    // ✅ Revalidate setiap 1 jam (ISR)
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error(`GitHub API error: ${res.status} ${res.statusText}`);
  }

  const data = await res.json();

  // Error handling GraphQL
  if (data.errors) {
    console.error("GitHub GraphQL Errors:", data.errors);
    throw new Error("Failed to fetch pinned repositories");
  }

  return data?.data?.user?.pinnedItems?.nodes ?? [];
}