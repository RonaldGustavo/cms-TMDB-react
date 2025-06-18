export const toAbsoluteUrl = (pathname: string) => new URL(pathname, import.meta.url).href
