/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
    i18n: {
       // providing the locales supported by your application
      locales: ["EN", "ES"],
      //  default locale used when the non-locale paths are visited
      defaultLocale: "EN",
    },
}