function openExternal(url) {
  const link = document.createElement("a");
  link.href = url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  document.body.appendChild(link);
  link.click();
  link.remove();
}

function resolveUrl(raw) {
  if (!raw) return null;
  try {
    return new URL(raw, window.location.href).href;
  } catch {
    return null;
  }
}

function isPublicUrl(url) {
  try {
    const { hostname, protocol } = new URL(url);
    if (protocol !== "http:" && protocol !== "https:") return false;
    return (
      hostname !== "localhost" &&
      hostname !== "127.0.0.1" &&
      !hostname.endsWith(".local")
    );
  } catch {
    return false;
  }
}

function getPageImageUrl() {
  const metaUrls = [
    document.querySelector('meta[property="og:image"]')?.content,
    document.querySelector('meta[name="twitter:image"]')?.content,
    document.querySelector('link[rel="apple-touch-icon"]')?.href,
    document.querySelector('link[rel="icon"]')?.href,
  ];

  for (const raw of metaUrls) {
    const url = resolveUrl(raw);
    if (url) return url;
  }

  const img = document.querySelector("main img, article img, img[src]");
  const fromImg = resolveUrl(img?.currentSrc || img?.src);
  if (fromImg) return fromImg;

  return resolveUrl(`${window.location.origin}/Logo.png`);
}

export function searchWithGoogleLens() {
  const imageUrl = getPageImageUrl();
  const query = document.title?.trim() || window.location.hostname;

  if (imageUrl && isPublicUrl(imageUrl)) {
    openExternal(
      `https://www.google.com/searchbyimage?image_url=${encodeURIComponent(imageUrl)}&sbisrc=cr_1_5_2`
    );
    return;
  }

  openExternal(
    `https://www.google.com/search?udm=50&q=${encodeURIComponent(query)}`
  );
}

export async function castThisTab() {
  if (typeof window === "undefined") return;

  if ("PresentationRequest" in window) {
    try {
      const request = new PresentationRequest([window.location.href]);
      await request.start();
      return;
    } catch {
      /* user dismissed or no receiver */
    }
  }

  if (navigator.share) {
    try {
      await navigator.share({
        title: document.title,
        url: window.location.href,
      });
      return;
    } catch {
      /* cancelled */
    }
  }

  openExternal("https://www.google.com/chrome/cast/");
}
