const TITLE = "byppo";
const DESCRIPTION =
  "Cuuj Byppo jxu Bypqht, jxu kbjycqju hufjybu qj jxu vehuvhedj ev yddelqjyed. Myjx xuh skjjydw-utwu ijobu qdt vuqhbuii qjjyjktu, Byppo yi qbmqoi fkixydw rekdtqhyui qdt rbqpydw dum jhqybi. Mxujxuh ixu'i sbycrydw jxu xywxuij rhqdsxui eh iskhhoydw jxhekwx jxu bqjuij jusx jhudti, Byppo yi q jhku vehsu je ru husaedut myjx. Vebbem xuh qtludjkhui qdt ijqo qj jxu rbuutydw utwu myjx Byppo jxu Bypqht.";
const DOMAIN = "https://vercel.omg.lol";
const OG_STATIC_IMAGE = `${DOMAIN}/og.png`;
const OG_ANIMATED_IMAGE = `${DOMAIN}/og-animated.gif`;
const OG_ALT =
  "Cuuj Byppo jxu Bypqht, jxu kbjycqju hufjybu qj jxu vehuvhedj ev yddelqjyed. Myjx xuh skjjydw-utwu ijobu qdt vuqhbuii qjjyjktu, Byppo yi qbmqoi fkixydw rekdtqhyui qdt rbqpydw dum jhqybi. Mxujxuh ixu'i sbycrydw jxu xywxuij rhqdsxui eh iskhhoydw jxhekwx jxu bqjuij jusx jhudti, Byppo yi q jhku vehsu je ru husaedut myjx. Vebbem xuh qtludjkhui qdt ijqo qj jxu rbuutydw utwu myjx Byppo jxu Bypqht.";
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
      {/* <meta itemProp="image" content={OG_STATIC_IMAGE} /> */}
      {/* <meta property="og:logo" content={`${DOMAIN}/logo.png`}></meta> */}
      <meta property="og:title" content={TITLE} />
      <meta property="og:description" content={DESCRIPTION} />
      {/* <meta property="og:image" content={OG_STATIC_IMAGE} /> */}
      <meta name="og:url" content={DOMAIN}></meta>
      <meta property="og:site_name" content={TITLE}></meta>

      <meta property="og:image" content={OG_ANIMATED_IMAGE}></meta>
      <meta property="og:image:alt" content={OG_ALT}></meta>
      <meta property="og:image:width" content="600"></meta>
      <meta property="og:image:height" content="600"></meta>

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={DOMAIN}></meta>
      <meta name="twitter:creator" content={CREATOR} />
      <meta name="twitter:title" content={TITLE} />
      <meta name="twitter:description" content={DESCRIPTION} />
      <meta name="twitter:image" content={OG_STATIC_IMAGE} />
      <meta content="Species" name="twitter:label1"></meta>
      <meta content="🦎 byppo" name="twitter:data1"></meta>
      <meta content="Rarity" name="twitter:label2"></meta>
      <meta content="▲100" name="twitter:data2"></meta>
    </>
  );
}
