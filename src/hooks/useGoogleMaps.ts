import { useEffect, useState } from 'react';

type Status = 'idle' | 'loading' | 'ready' | 'error';

export function useGoogleMaps(apiKey?: string) {
  const [status, setStatus] = useState<Status>('idle');

  useEffect(() => {
    if (!apiKey) {
      setStatus('error');
      return;
    }

    if ((window as any).google?.maps) {
      setStatus('ready');
      return;
    }

    const existingScript = document.querySelector<HTMLScriptElement>('script[data-google-maps]');
    if (existingScript) {
      existingScript.addEventListener('load', () => setStatus('ready'));
      existingScript.addEventListener('error', () => setStatus('error'));
      setStatus('loading');
      return;
    }

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
    script.async = true;
    script.defer = true;
    script.setAttribute('data-google-maps', 'true');
    script.onload = () => setStatus('ready');
    script.onerror = () => setStatus('error');
    document.head.appendChild(script);
    setStatus('loading');

    return () => {
      script.onload = null;
      script.onerror = null;
    };
  }, [apiKey]);

  return status;
}
