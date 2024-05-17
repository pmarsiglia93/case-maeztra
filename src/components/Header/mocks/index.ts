import IconUser from "../../../assets/icon-user.svg";
import IconHeart from "../../../assets/icon-heart.svg";
import IconBag from "../../../assets/icon-shoppingbag.svg";
import IconDress from "../../../assets/icon-dress.svg";

export interface IHeaderMainLinks {
  icon?: Image;
  border?: React.CSSProperties["border"];
  href: string;
  label: string;
  highlight?: boolean;
}

export const headerMainLinks: IHeaderMainLinks[] = [
  {
    icon: {
      src: IconUser,
    },
    href: "/",
    label: "Minha Conta",
  },
  {
    icon: {
      src: IconHeart,
    },
    href: "/",
    label: "Wishlist",
  },
  {
    icon: {
      src: IconBag,
    },
    border: "1px solid var(--primary-color)",
    href: "/",
    label: "Meu Carrinho",
    highlight: true,
  },
];

export const headerMenus: IHeaderMainLinks[] = [
  {
    icon: {
      src: IconDress,
    },
    href: "/",
    label: "Novidades",
    highlight: true,
  },
  {
    href: "/",
    label: "Vestidos",
  },
  {
    href: "/",
    label: "Roupas",
  },
  {
    href: "/",
    label: "Sapatos",
  },
  {
    href: "/",
    label: "Lingerie",
  },
  {
    href: "/",
    label: "Acessórios",
  },
  {
    href: "/",
    label: "OUTLET",
  },
];
