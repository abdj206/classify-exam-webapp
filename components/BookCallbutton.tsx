import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export default function Cal() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"15min"});
      cal("ui", {"cssVarsPerTheme":{"light":{"cal-brand":"#211746"},"dark":{"cal-brand":"#bedb9a"}},"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])
  return <button data-cal-namespace="15min"
    data-cal-link="classify-8tjlce/15min"
    className="w-full px-6 py-3 bg-classify-gold text-classify-blue-dark rounded-lg hover:bg-classify-gold-light transition-colors font-bold"

    
    data-cal-config='{"layout":"month_view"}'
  >Book a Call</button>;
};