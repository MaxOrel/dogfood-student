import cn from 'classnames';
import s from './styles.module.css'
import { Button, ButtonVariant } from '../button';
import { ReactComponent as ArrowIcon } from './img/arrow.svg';
import { useNavigate } from 'react-router-dom';


function Hero() {
    const navigate = useNavigate()
    const handleClickButton = () => {
        navigate('/catalog')
    }
    return (
        <div className={s.banner}>
            <div className={cn('container', s.container)}>
                <h1 className={s.title}>Крафтовые лакомства для собак</h1>
                <p className={s.subtitle}>Всегда свежие лакомства ручной работы с доставкой по России и Миру</p>
                <Button
                    variant={ButtonVariant.ligth}
                    href="/catalog"
                    extraClass="button_type_box"
                    action={handleClickButton}>
                    <span>Каталог</span><ArrowIcon className={s.link} />
                </Button>
            </div>
        </div>
    );
}

export default Hero;