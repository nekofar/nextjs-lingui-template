import localFont from 'next/font/local'

const vazirmatn = localFont({
  display: 'swap',
  variable: '--font-vazirmatn',
  src: [
    {
      path: './Vazirmatn/Vazirmatn-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: './Vazirmatn/Vazirmatn-ExtraLight.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: './Vazirmatn/Vazirmatn-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './Vazirmatn/Vazirmatn-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Vazirmatn/Vazirmatn-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './Vazirmatn/Vazirmatn-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './Vazirmatn/Vazirmatn-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './Vazirmatn/Vazirmatn-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: './Vazirmatn/Vazirmatn-Black.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
})

export { vazirmatn }
