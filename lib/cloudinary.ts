const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

export function getCloudinaryUrl(publicId: string, transformations?: Record<string, any>) {
  const baseUrl = `https://res.cloudinary.com/${cloudName}/image/upload`;
  
  if (!transformations || Object.keys(transformations).length === 0) {
    return `${baseUrl}/${publicId}`;
  }
  
  const transformString = Object.entries(transformations)
    .map(([key, value]) => `${key}_${value}`)
    .join(',');
  
  return `${baseUrl}/${transformString}/${publicId}`;
}

export function getCloudinaryVideoUrl(publicId: string, transformations?: Record<string, any>) {
  const baseUrl = `https://res.cloudinary.com/${cloudName}/video/upload`;
  
  // Check if publicId already has an extension
  const hasExtension = publicId.includes('.');
  const finalPublicId = hasExtension ? publicId : `${publicId}.mp4`;
  
  if (!transformations || Object.keys(transformations).length === 0) {
    return `${baseUrl}/${finalPublicId}`;
  }
  
  const transformString = Object.entries(transformations)
    .map(([key, value]) => `${key}_${value}`)
    .join(',');
  
  return `${baseUrl}/${transformString}/${finalPublicId}`;
}
