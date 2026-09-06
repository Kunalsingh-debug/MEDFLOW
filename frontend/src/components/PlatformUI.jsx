export function Card({ className = "", children, ...props }) {
  return <section className={`platform-card ${className}`} {...props}>{children}</section>;
}

export function StatusBadge({ status = "neutral", children }) {
  return <span className={`status-badge status-${status}`}>{children}</span>;
}

export function LoadingState({ label }) {
  return <p className="platform-loading" role="status"><span aria-hidden="true" />{label}</p>;
}

export function EmptyState({ title, detail }) {
  return <div className="platform-empty"><strong>{title}</strong>{detail && <p>{detail}</p>}</div>;
}

export function SectionHeader({ eyebrow, title, actions }) {
  return <div className="section-heading">
    <div>{eyebrow && <p className="eyebrow">{eyebrow}</p>}<h2>{title}</h2></div>
    {actions && <div className="section-heading-actions">{actions}</div>}
  </div>;
}

export function Toast({ message, tone = "success" }) {
  return message ? <div className={`platform-toast ${tone}`} role="status">{message}</div> : null;
}
