"use client";

export default function MdxCode({ children }) {
  return (
    <code className="bg-indigo-50 dark:bg-indigo-950 text-indigo-500 dark:text-indigo-100 p-0.5 rounded-full">
      {children}
    </code>
  );
}