export default defineAppConfig({
  ui: {
    primary: 'cDark',
    gray: 'cLight',
    card: {
      base: '',
      background: 'bg-cDark dark:bg-cDark',
      divide: 'divide-y divide-gray-200 dark:divide-gray-800',
      ring: 'ring-2 ring-cDark-700 dark:ring-cDark-700',
      rounded: 'rounded-lg',
      shadow: 'shadow',
      body: {
        base: '',
        background: '',
        padding: 'px-4 py-2 sm:p-6',
      },
      header: {
        base: '',
        background: '',
        padding: 'px-4 py-2 sm:px-6',
      },
      footer: {
        base: '',
        background: '',
        padding: 'px-4 py-4 sm:px-6',
      },
    },

  },
})
