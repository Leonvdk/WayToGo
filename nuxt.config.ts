export default {
  nitro: {
    preset: 'vercel-edge',
  },
  css: [
    '@/design/reset.scss',
    '@/design/global.scss',
    '@/design/fluid-font-size.scss',
  ],
    loading: {
      color: '#F6C20E',
      height: '5px'
  },
};
