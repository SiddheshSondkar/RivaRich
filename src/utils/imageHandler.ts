export const assets = import.meta.glob([
  '../Images/*.{png,jpg,jpeg,svg,mp4}',
  '../images/*.{png,jpg,jpeg,svg,mp4}',
  '../assets/*.{png,jpg,jpeg,svg,mp4}',
  '../assets/images/*.{png,jpg,jpeg,svg,mp4}'
], { eager: true, import: 'default' });

export function getImagePath(assetName: string): string {
  // Try to find the asset in the imported modules
  const key = Object.keys(assets).find(k => k.endsWith(`/${assetName}`));
  
  if (key) {
    return assets[key] as string;
  }
  
  // Fallback to public folder path
  return `/images/${assetName}`;
}
