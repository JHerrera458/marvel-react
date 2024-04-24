"use client";

import { GetHeroes } from "./api";

export default async function HomePage() {
  const heroes = await GetHeroes();
  return (
    <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {heroes.map(({ id, name, thumbnail }) => (
        <hgroup key={id}>
          <h2 className="font-bold text-2xl">{name}</h2>
          <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={name} />
        </hgroup>
      ))}
    </article>
  );
}
