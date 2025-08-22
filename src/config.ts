export const SITE = {
  website: "https://blog.nicomoehn.codes/",
  author: "Nico Möhn",
  profile: "https://nicomoehn.codes/",
  desc: "Personal blog of a software engineer.",
  title: "nico's devlog",
  lightAndDarkMode: false,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "Edit page",
    url: "https://github.com/nitodeco/blog/edit/main/",
  },
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Europe/Zagreb", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
