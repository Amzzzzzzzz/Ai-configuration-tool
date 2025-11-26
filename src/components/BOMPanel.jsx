import "../styles/BOMPanel.css";

export default function BOMPanel({ bom }) {
  if (!bom) return <p>No Bill of Materials available.</p>;

  return (
    <div className="bom-panel-wrapper">
      <h2>Bill of Materials</h2>

      <div style={{ marginTop: "15px" }}>
        {bom.items?.map((item, i) => (
          <div key={i} className="bom-item">
            <div className="bom-item-title">{item.type}</div>
            <div className="bom-line">SKU: {item.sku || "N/A"}</div>
            <div className="bom-line">Description: {item.description}</div>
            <div className="bom-line">Quantity: {item.quantity}</div>
          </div>
        ))}
      </div>

      {bom.notes && (
        <div className="bom-notes">Notes: {bom.notes}</div>
      )}
    </div>
  );
}


