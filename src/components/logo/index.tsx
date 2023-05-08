import "./styles.css";
import logoSrc from './assets/logo.svg';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
interface ILogoProps extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  className?: string;
  href?: string;
}
export function Logo({ className, href, ...props }: ILogoProps) {
  const hrefValue = href ? href : null;
  return (
    hrefValue
      ? <Link replace to={{ pathname: hrefValue }} className={cn("logo", { className: !!className })}>
        <img src={logoSrc} alt="Логотип компании" className="logo__pic" />
      </Link>
      : <span className={`${className} logo`} {...props}>
        <img src={logoSrc} alt="Логотип компании" className="logo__pic" />
      </span>
  );
}