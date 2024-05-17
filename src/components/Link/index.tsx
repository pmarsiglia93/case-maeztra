export interface LinkProps {
  icon?: Image;
  border?: React.CSSProperties["border"];
  href: string;
  label: string;
  highlight?: boolean;
}

const Link = ({ icon, border, href, label, highlight }: LinkProps) => {
  return (
    <div
      style={{ border }}
      className={`menu-item__wrapper ${highlight ? "menu-item__wrapper--highlight" : ""
        }`}
    >
      <img {...icon} alt={icon?.alt} />
      <a href={href}>{label}</a>
    </div>
  );
};

export default Link;
