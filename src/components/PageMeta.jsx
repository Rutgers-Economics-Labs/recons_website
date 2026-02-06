import { useEffect } from 'react';

const PageMeta = ({ title, description, path = '' }) => {
  const siteTitle = 'RECONS - Rutgers Economics Society';
  const defaultDescription = 'The premier economics organization at Rutgers University, providing resources, events, and opportunities for economics students.';
  const baseUrl = 'https://rutgersrecons.com';
  const logoUrl = `${baseUrl}/recons-logo.png`;
  
  const pageTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const pageDescription = description || defaultDescription;
  const pageUrl = `${baseUrl}${path}`;

  useEffect(() => {
    // Update document title
    document.title = pageTitle;
    
    // Helper to set or update meta tag
    const updateMetaTag = (selector, attribute, content) => {
      let tag = document.querySelector(selector);
      if (!tag) {
        tag = document.createElement('meta');
        if (attribute === 'property') {
          tag.setAttribute('property', selector.replace('meta[property="', '').replace('"]', ''));
        } else {
          tag.setAttribute('name', selector.replace('meta[name="', '').replace('"]', ''));
        }
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    // Standard meta tags
    updateMetaTag('meta[name="description"]', 'name', pageDescription);
    
    // Open Graph tags
    updateMetaTag('meta[property="og:title"]', 'property', pageTitle);
    updateMetaTag('meta[property="og:description"]', 'property', pageDescription);
    updateMetaTag('meta[property="og:type"]', 'property', 'website');
    updateMetaTag('meta[property="og:url"]', 'property', pageUrl);
    updateMetaTag('meta[property="og:image"]', 'property', logoUrl);
    updateMetaTag('meta[property="og:image:width"]', 'property', '1200');
    updateMetaTag('meta[property="og:image:height"]', 'property', '630');
    updateMetaTag('meta[property="og:site_name"]', 'property', siteTitle);
    
    // Twitter Card tags
    updateMetaTag('meta[name="twitter:card"]', 'name', 'summary_large_image');
    updateMetaTag('meta[name="twitter:title"]', 'name', pageTitle);
    updateMetaTag('meta[name="twitter:description"]', 'name', pageDescription);
    updateMetaTag('meta[name="twitter:image"]', 'name', logoUrl);
  }, [pageTitle, pageDescription, pageUrl, logoUrl]);

  return null;
};

export default PageMeta;
