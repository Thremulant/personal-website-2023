import { defineType, defineField } from 'sanity'
export const link = defineType({
  name: 'link',
  type: 'object',
  title: 'Link',
  fields: [
    defineField({
      name: 'link_name',
      type: 'string',
      title: 'Name'
    }),
    defineField({
      name: 'slink_url',
      type: 'url',
      title: 'Link'
    }),
  ]
})