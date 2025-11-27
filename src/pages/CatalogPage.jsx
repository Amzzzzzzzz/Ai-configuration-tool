import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import "./CatalogPage.css";

const supabase = createClient(import.meta.env.VITE_SUPA_URL, import.meta.env.VITE_SUPA_KEY);

export default function CatalogPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function load() {
      const tables = ["LED_Strips", "drivers", "profiles", "connectors", "controllers", "accessories"];
      let all = [];
      for (let t of tables) {
        let { data } = await supabase.from(t).select("*");
        all.push(...data.map(x => ({ ...x, category: t })));
      }
      setProducts(all);
    }
    load();
  }, []);

  return (
    <div className="catalog-wrapper">
      <h1>Product Catalog</h1>

      <div className="catalog-grid">
        {products.map((p, i) => (
          <div className="catalog-card" key={i}>
            <h3>{p.sku}</h3>
            <p>{p.description}</p>
            <span className="cat-tag">{p.category}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
