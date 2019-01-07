import React from "react"

const faviconsContext = require.context(
  '!!file-loader?name=content/favicons/[name].[ext]!.',
  true,
  /\.(svg|png|ico|xml|json)$/
);
faviconsContext.keys().forEach(faviconsContext);
