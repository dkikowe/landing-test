import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

export default function ScrollToTop() {
  const location = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    const storageKey = "monumforma-scroll-map";
    const pathKey = `${location.pathname}${location.search}`;
    const scrollMap = JSON.parse(sessionStorage.getItem(storageKey) || "{}");

    if (navigationType === "POP" && typeof scrollMap[pathKey] === "number") {
      window.scrollTo({ top: scrollMap[pathKey], left: 0, behavior: "auto" });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }

    const savePosition = () => {
      const currentMap = JSON.parse(sessionStorage.getItem(storageKey) || "{}");
      currentMap[pathKey] = window.scrollY;
      sessionStorage.setItem(storageKey, JSON.stringify(currentMap));
    };

    window.addEventListener("scroll", savePosition, { passive: true });
    window.addEventListener("beforeunload", savePosition);

    return () => {
      savePosition();
      window.removeEventListener("scroll", savePosition);
      window.removeEventListener("beforeunload", savePosition);
    };
  }, [location.pathname, location.search, navigationType]);

  return null;
}
