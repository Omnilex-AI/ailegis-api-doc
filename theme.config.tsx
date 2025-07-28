import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Ailegis API documentation</span>,
  logoLink: "https://omnilex.ai",
  docsRepositoryBase: 'https://github.com/omnilex-ai/ailegis-api-doc/blob/main',
  footer: {
    text: 'Omnilex API documentation<',
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Omnilex API documentation" />
      <meta property="og:description" content="Legal research API" />
    </>
  )
}

export default config
