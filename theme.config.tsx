import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Ailegis API documentation</span>,
  logoLink: "https://ailegis.ch",
  docsRepositoryBase: 'https://github.com/ailegis/ailegis-api-doc/blob/main',
  footer: {
    text: 'Ailegis API documentation<',
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Ailegis API documentation" />
      <meta property="og:description" content="Legal research API" />
    </>
  )
}

export default config
