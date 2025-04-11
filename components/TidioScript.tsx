"use client";

import { useEffect } from "react";

export const TidioScript = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://code.tidio.co/8umbkdosgut1pwzuvmdvx2wskzak1h0g.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return null; // No UI, just loads script
};
