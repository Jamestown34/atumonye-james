import { useEffect } from 'react';

const GA_MEASUREMENT_ID = 'G-08KL91ZNKT'; // replace with your GA4 ID

export default function GA4Tracker() {
  useEffect(() => {
    // Load GA4 script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    // Initialize GA4
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    (window as any).gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID);

    // Track button clicks globally
    function handleClick(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON') {
        const buttonText = target.innerText || target.id || 'unknown';
        gtag('event', 'button_click', { button_text: buttonText });
      }
    }

    document.addEventListener('click', handleClick);

    // Cleanup listener on unmount
    return () => {
      document.removeEventListener('click', handleClick);
      document.head.removeChild(script);
    };
  }, []);

  return null; // This component doesn’t render anything visible
}
