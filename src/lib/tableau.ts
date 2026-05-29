/** Normalize Tableau sheet names for image URLs (no spaces or dots) */
function viewSlug(view: string): string {
  return view.replace(/\s+/g, "").replace(/\./g, "");
}

/**
 * Real dashboard preview must include workbook + sheet name.
 * Workbook-only URLs return a generic 192px placeholder icon.
 */
export function tableauThumbUrl(workbook: string, view = "Dashboard"): string {
  return `https://public.tableau.com/thumb/views/${encodeURIComponent(workbook)}/${viewSlug(view)}`;
}

/** Full-size static PNG fallback */
export function tableauStaticImageUrl(workbook: string, view = "Dashboard"): string {
  const sheet = viewSlug(view);
  return `https://public.tableau.com/views/${encodeURIComponent(workbook)}/${sheet}.png?:display_static_image=y&:showVizHome=n`;
}
