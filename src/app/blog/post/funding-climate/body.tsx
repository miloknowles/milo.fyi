// import Markdown from 'react-markdown';

// import remarkMath from 'remark-math';
// import remarkGfm from 'remark-gfm';
// import 'katex/dist/katex.min.css'; // `rehype-katex` does not import the CSS for you

// // @ts-ignore
// import markdown from './body.md';

// export default async function Content() {
//   return (
//     <div className="flex flex-col gap-2">
//     <Markdown
//       remarkPlugins={[remarkGfm, remarkMath]}
//       // rehypePlugins={[rehypeKatex]}
//       components={{
//         h1: ({ children }) => <h1 className="mt-2 rt-Heading rt-r-size-7 rt-r-weight-bold">{children}</h1>,
//         h2: ({ children }) => <h2 className="mt-2 rt-Heading rt-r-size-6 rt-r-weight-bold">{children}</h2>,
//         h3: ({ children }) => <h3 className="mt-2 rt-Heading rt-r-size-5 rt-r-weight-bold">{children}</h3>,
//         h4: ({ children }) => <h4 className="mt-2 rt-Heading rt-r-size-4 rt-r-weight-bold">{children}</h4>,
//         h5: ({ children }) => <h5 className="rt-Heading rt-r-size-3 rt-r-weight-bold">{children}</h5>,
//         p: ({ children }) => <p className="rt-Body rt-r-size-4">{children}</p>,
//         a: ({ children, href }) => <a className="rt-Link" href={href}>{children}</a>,
//         hr: () => <hr className="border-t border-gray-200 my-8" />,
//         ol: ({ children }) => <ol className="list-decimal pl-4 flex flex-col gap-3">{children}</ol>,
//         ul: ({ children }) => <ul className="list-disc pl-4 flex flex-col gap-3">{children}</ul>,
//         li: ({ children }) => <li className="ml-2">{children}</li>,
//         code: ({ children }) => <code className="rt-Code">{children}</code>,
//         blockquote: ({ children }) => <blockquote className="rt-Blockquote">{children}</blockquote>,
//         strong: ({ children }) => <strong className="rt-Strong">{children}</strong>,
//         em: ({ children }) => <em className="rt-Emphasis">{children}</em>,
//         table: ({ children }) => <table className="rt-Table">{children}</table>,
//         thead: ({ children }) => <thead className="rt-TableHead">{children}</thead>,
//         tbody: ({ children }) => <tbody className="rt-TableBody">{children}</tbody>,
//         tr: ({ children }) => <tr className="rt-TableRow">{children}</tr>,
//         th: ({ children }) => <th className="rt-TableHeader">{children}</th>,
//         td: ({ children }) => <td className="rt-TableCell">{children}</td>,
//         img: ({ src, alt }) => <img className="rt-Image" src={src} alt={alt} />,
//       }}
//     >
//       {markdown}
//     </Markdown>
//     </div>
//   )
// }