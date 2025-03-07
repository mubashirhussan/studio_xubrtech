import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'studio_xubrtech_backend',
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'default_project_id',
  dataset: process.env.SANITY_STUDIO_DATASET || 'development',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
