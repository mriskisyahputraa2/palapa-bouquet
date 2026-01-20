export default {
  name: 'product',
  title: 'Produk Buket',
  type: 'document',
  fields: [
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
    {
      name: 'category',
      title: 'Kategori',
      type: 'string',
      options: {
        list: [
          {title: 'Wisuda', value: 'wisuda'},
          {title: 'Wedding', value: 'wedding'},
          {title: 'Anniversary', value: 'anniversary'},
          {title: 'Custom', value: 'custom'},
        ],
      },
    },
  ],
}
