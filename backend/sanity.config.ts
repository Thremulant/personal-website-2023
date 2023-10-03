import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { documentInternationalization } from '@sanity/document-internationalization'

export default defineConfig({
  name: 'default',
  title: 'main-website',

  projectId: 'i6ktgjdj',
  dataset: 'main',

  plugins: [deskTool(), visionTool(), documentInternationalization({
    // Required configuration
    supportedLanguages: [
      { id: 'es', title: 'Spanish' },
      { id: 'en', title: 'English' }
    ],
    schemaTypes: ['job'],
  })],

  schema: {
    types: schemaTypes,
  },
})
