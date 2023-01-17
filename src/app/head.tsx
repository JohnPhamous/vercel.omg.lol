const TITLE = "luhsub";
const DESCRIPTION = "kdevvysyqb luhsub byppo";
const DOMAIN = "https://vercel.omg.lol";
const OG_STATIC_IMAGE = `${DOMAIN}/og.png`;
const OG_ANIMATED_IMAGE = `${DOMAIN}/og-animated.gif`;
const OG_ALT = "A dancing lizard";
const CREATOR = "@johnphamous";

export default function Head() {
  return (
    <>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
      <link rel="icon" href="/favicon.ico" />

      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta itemProp="image" content={OG_STATIC_IMAGE} />
      {/* <meta property="og:logo" content={`${DOMAIN}/logo.png`}></meta> */}
      <meta property="og:title" content={TITLE} />
      <meta property="og:description" content={DESCRIPTION} />
      <meta property="og:image" content={OG_STATIC_IMAGE} />

      <meta property="og:image" content={OG_ANIMATED_IMAGE}></meta>

      <meta property="og:image:alt" content={OG_ALT}></meta>
      <meta property="og:image:width" content="600"></meta>
      <meta property="og:image:height" content="600"></meta>

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={CREATOR} />
      <meta name="twitter:title" content={TITLE} />
      <meta name="twitter:description" content={DESCRIPTION} />
      <meta name="twitter:image" content={OG_STATIC_IMAGE} />
    </>
  );
}
