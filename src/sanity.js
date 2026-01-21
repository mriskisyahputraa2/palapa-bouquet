import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "q5rll88m", // Cek di palapa-studio/sanity.config.js
  dataset: "production",
  useCdn: true, // Sangat penting agar loading cepat dan gratis
  apiVersion: "2024-01-20",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
