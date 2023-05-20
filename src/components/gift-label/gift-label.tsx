import s from './index.module.css';
import { ReactComponent as GiftIcon } from "./img/gift.svg";
interface IGiftLabelProps {
   title: string, text: string
}
export default function GiftLabel({ title, text }: IGiftLabelProps) {
   return (
      <div className={s.giftLabel}>
         <GiftIcon className={s.giftIcon} />
         <div className={s.giftTitle}>{title}</div>
         <div className={s.giftText}>{text}</div>
      </div>
   )
}