import LocalConfig from "@/constants/config";
import Script from "next/script";

const GoogleAnalytics = () => {
  return (
  <>
    <Script
      strategy="afterInteractive"
      src={`https://www.googletagmanager.com/gtag/js?id=G-EGP4926TLL`}
    />
    <Script id="google-analytics" strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-EGP4926TLL', {
          page_path: window.location.pathname,
        });
      `}
    </Script>
  </>
);}

export default GoogleAnalytics;
