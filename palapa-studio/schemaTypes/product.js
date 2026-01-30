export default {
  name: 'product',
  title: 'Produk Buket',
  type: 'document',
  fields: [
    {
      name: 'category',
      title: 'Kategori',
      type: 'reference', // UBAH dari 'string' menjadi 'reference'
      to: [{type: 'category'}], // Hubungkan ke skema 'category' yang sudah kamu buat
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'name',
      title: 'Nama Produk',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug (ID Unik)',
      type: 'slug',
      options: {source: 'name', maxLength: 96},
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'price',
      title: 'Harga',
      type: 'string', // Menggunakan string agar kamu bisa tulis "Rp 50.000"
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'mainImage',
      title: 'Foto Utama',
      type: 'image',
      options: {hotspot: true}, // Agar bisa atur titik fokus foto
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'gallery',
      title: 'Galeri Foto Tambahan',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
    },
    {
      name: 'description',
      title: 'Deskripsi Produk',
      type: 'text',
    },
  ],
}
