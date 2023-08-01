
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
  runtimeConfig: {
    // The private keys which are only available within server-side
    gaId: '',
    // Keys within public, will be also exposed to the client-side
    public: {
    }
  }
};
