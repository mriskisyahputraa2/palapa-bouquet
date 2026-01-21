export default {
  name: 'category',
  title: 'Kategori Produk',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Nama Kategori',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
}
