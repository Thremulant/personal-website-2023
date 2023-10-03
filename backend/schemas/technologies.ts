import { defineType, defineField } from 'sanity'
export const technology = defineType({
  name: 'technology',
  type: 'document',
  title: 'Technology',
  fields: [
    defineField({
      name: 'technology_name',
      type: 'string',
      title: 'Name'
    }),
    defineField({
      name: 'technology_logo',
      type: 'image',
      title: 'Logo'
    }),
  ]
})