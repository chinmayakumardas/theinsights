export async function GET() {
  const content = `# Insights

Insights is a technology blog covering:

- Artificial Intelligence
- SEO
- Web Development
- Next.js
- React
- TypeScript
- JavaScript
- Programming

Website:
https://insights.chinmayakumardas.com

Articles:
https://insights.chinmayakumardas.com/articles

About:
https://insights.chinmayakumardas.com/about

Contact:
https://insights.chinmayakumardas.com/contact

License:
Content may be quoted with attribution and a link back to the original article.
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}