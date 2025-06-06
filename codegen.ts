import type { CodegenConfig } from '@graphql-codegen/cli'
 
const config: CodegenConfig = {
  schema: 'https://rickandmortyapi.com/graphql',
  ignoreNoDocuments: true, // for better experience with the watcher
  documents: 'src/**/!(*.generated).{ts,tsx}',
  generates: {
    'src/generated/types.ts': {
      plugins: ['add','typescript'],
      config:{
        content:'/* eslint-disable @typescript-eslint/no-explicit-any */'
      }
    },
    'src/testing/generated/staticMockDataCreator.ts': {
      plugins: ['add','typescript-mock-data'],
      config:{
        typesFile:'@/generated/types.ts',
        listElementCount: 3,
        prefix: 'createStaticMock',
        content:'/* eslint-disable @typescript-eslint/no-unused-vars */'
      }
    },
    'src/testing/generated/dynnamicMockDataCreator.ts': {
      plugins: ['add','typescript-mock-data'],
      config:{
        typesFile:'@/generated/types.ts',
        listElementCount: 3,
        dynamicValues:true,
        prefix: 'createDynamicMock',
        content:'/* eslint-disable @typescript-eslint/no-unused-vars */'
      }
    },
    './src/testing/generated/mswHandlers.ts': {
      plugins: ['add','typescript','typescript-operations','typescript-msw'],
      config:{
        noExport:true,
        content:'/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any */'
      }
    },
    'src/generated/validationSchema.ts': {
      plugins: ['add','typescript-validation-schema'],
      config:{
        schema: 'zod',
        importFrom: '@/generated/types',
        content:'/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-empty-object-type */'

      }
    },
    'src/': {
      preset: 'near-operation-file',
      presetConfig: { folder:'generated',fileName:'graph', extension: '.types.ts', baseTypesPath: 'generated/types.ts' },
      plugins: ['typescript-operations', ],
      config: { 
        documentMode: 'documentNode',
     },
    },
    './src/': {
      preset: 'near-operation-file',
      presetConfig: { folder:'generated', fileName:'graph', extension: '.mswHandler.ts', baseTypesPath: 'generated/types.ts' },
      plugins: ['typescript-operations', 'typescript-msw'],
      config: { 
        noExport: true,
        documentMode: 'documentNode',
     },
    },
    './src/gql/': {
      preset: 'client',
      presetConfig: {
        fragmentMasking: { unmaskFunctionName: 'getFragmentData' }
      },
      config: {
        noExport: true,
      }
    }
  },
}
export default config