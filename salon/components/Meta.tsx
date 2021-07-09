import Head from 'next/head';

const Meta = ({
  title = 'AM Dermatrychologia',
  description = '',
  keywords = 'trychologia, wrocław, Nowy Dwór, profesjonalisci',
}) => {
  return (
    <Head>
      <meta charSet='utf-8' />
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />

      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='theme-color' content='#000000' />
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link
        rel='preconnect'
        href='https://fonts.gstatic.com'
        crossOrigin='true'
      />
      <link
        href='https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap'
        rel='stylesheet'
      />

      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='%PUBLIC_URL%/apple-touch-icon.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='%PUBLIC_URL%/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='%PUBLIC_URL%/favicon-16x16.png'
      />
      <link rel='manifest' href='%PUBLIC_URL%/site.webmanifest' />
      <link
        rel='mask-icon'
        href='%PUBLIC_URL%/safari-pinned-tab.svg'
        color='#53BFD2'
      />
      <meta name='msapplication-TileColor' content='#53bfd2' />
      <meta name='theme-color' content='#53bfd2' />

      <script src='https://code.iconify.design/1/1.0.6/iconify.min.js'></script>
    </Head>
  );
};

export default Meta;
