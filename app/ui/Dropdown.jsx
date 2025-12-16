"use client";

import Link from "next/link";

export default function Dropdown({ items, onClick, basePath }) {
  return (
    <ul className="absolute top-full left-0 bg-white shadow-lg w-56">
      {items.map((item) => {
        const href = item.route ?? (basePath ? `${basePath}/${item.slug}` : `/${item.slug}`);
        return (
          <li
            key={item.slug ?? item.title}
            className="px-4 py-2 hover:bg-red-400 hover:text-black cursor-pointer"
            onClick={onClick}
          >
            <Link href={href}>{item.title}</Link>
          </li>
        );
      })}
    </ul>
  );
}
