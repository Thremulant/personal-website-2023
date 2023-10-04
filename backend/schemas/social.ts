import { defineType, defineField } from 'sanity'
export const social = defineType({
  name: 'social',
  type: 'document',
  title: 'Social',
  fields: [
    defineField({
      name: 'social_name',
      type: 'string',
      title: 'Name'
    }),
    defineField({
      name: 'social_url',
      type: 'url',
      title: 'URL'
    }),
    defineField({
      name: 'social_logo',
      type: 'image',
      title: 'Logo'
    }),
    defineField({
      name: 'social_visible',
      type: 'boolean',
      title: 'Visible'
    }),
  ]
})