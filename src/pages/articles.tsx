// import SEO from "@/components/SEO";
// import { motion } from "framer-motion";
// import {
//   assembleMediumContentList,
//   ArticleInfo,
// } from "@/lib/medium";
// import { FaArrowRight } from "react-icons/fa";

// export default function Blog({ userArticles }: { userArticles: ArticleInfo[] }) {
//   return (
//     <>
//       <SEO
//         title="Articles | Muhammad Rafi"
//         description="Learn more about Muhammad Rafi — Android developer, backend enthusiast, and archery lover."
//         url="https://muhammadrafi.dev/articles"
//       />
//       <motion.section
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7 }}
//         className="max-w-5xl mx-auto px-4 py-12"
//       >
//         <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-[var(--primary)] text-center">
//           My Articles & Writings
//         </h2>

//         <div className="grid gap-6 md:grid-cols-2">
//           {userArticles.map((article) => (
//             <motion.div
//               key={article.id}
//               whileHover={{ scale: 1.02 }}
//               transition={{ type: "spring", stiffness: 200 }}
//               className="bg-[var(--secondary)] text-[var(--secondary-foreground)] rounded-xl shadow-lg overflow-hidden flex flex-col"
//             >
//               <img
//                 src={article.image_url}
//                 alt="Medium Article Image"
//                 className="h-48 w-full object-cover"
//               />
//               <div className="flex-1 p-5 flex flex-col justify-between">
//                 <div>
//                   <h3 className="text-xl font-semibold">{article.title}</h3>
//                   <p className="mt-2 text-sm text-gray-400 italic">
//                     {article.subtitle}
//                   </p>
//                 </div>
//                 <div className="mt-4 flex items-center justify-between">
//                   <p className="text-sm text-gray-300">
//                     {Math.round(article.reading_time)} min read on{" "}
//                     <a className="font-bold underline" href="https://medium.com" target="_blank">
//                       Medium
//                     </a>
//                   </p>
//                   <a
//                     href={article.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-2 bg-[var(--primary)] px-3 py-2 rounded-lg text-white hover:bg-[var(--primary-hover)] transition"
//                   >
//                     Read <FaArrowRight size={16} />
//                   </a>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </motion.section>
//     </>
//   );
// }

// export async function getServerSideProps() {
//   const userArticles = await assembleMediumContentList();
//   return { props: { userArticles } };
// }