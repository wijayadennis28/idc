export const getCurrentLanguage = () => {
    const hostname = window.location.hostname;
    if (hostname.startsWith('id.')) {
      return 'id'; // Bahasa Indonesia
    }
    return 'en'; // Default to English
  };
  
  export const switchLanguage = (language) => {
    const currentHost = window.location.hostname;
    const newHost =
      language === 'id'
        ? `id.${currentHost.replace('id.', '')}`
        : currentHost.replace('id.', '');
    window.location.href = `${window.location.protocol}//${newHost}${window.location.pathname}`;
  };
  