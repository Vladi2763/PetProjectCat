import { useState } from 'react';
import classes from './Card.module.css'


const Card: React.FC<{ taste: string; weight: string; text: string; link: string; isAvailable: boolean; quantity: string; present: string; leaveCard: (boolean) => void }> = (props) => {

    const [isSelected, setIsSelected] = useState(false);
    const [isLeave, setIsLeave] = useState(false);
    const [isSelectedLeave, setIsSelectedLeave] = useState(false);

    const clickContainer = () => {
        setIsSelected((prev) => !prev);
    }

    const leaveCardHandler = () => {
        if (!isSelected) {
            setIsLeave(true);
            props.leaveCard(true);
        }
        if (isSelected) {
            setIsSelectedLeave(true);
        }
    }

    const enterCardHandler = () => {
        if (!isSelected) {
            setIsLeave(false);
        }
        if (isSelected) {
            setIsSelectedLeave(false);
        }
    }

    return (
        <div className={classes.container}>
            <div className={classes.card + ' ' + (isSelected ? classes.cardSelected : '') + ' ' + (props.isAvailable ? '' : classes.notAvailible) + ' ' + (isLeave ? classes.cardLeave : '') + ' ' + (isSelectedLeave ? classes.cardSelectedLeave : '')}
                onClick={props.isAvailable ? clickContainer : null}
                onMouseLeave={leaveCardHandler}
                onMouseEnter={enterCardHandler}>
                <div className={classes.spanContainer}>
                    <span className={!isSelectedLeave ? classes.title :classes.textSelectedLeave}>{isSelectedLeave ? 'Котэ не одобряет?' :'Сказочное заморское яство' }</span>
                    <span className={classes.tit}>Нямушка</span>
                    <span className={classes.taste}>{props.taste}</span>
                    <span className={classes.description}>{props.quantity} порций<br></br>{props.present}</span>
                </div>
                <img className={classes.img} src='./assets/cat.svg' alt='cat'></img>
                <div className={classes.oval + ' ' + (isSelected ? classes.ovalSelected : '') + ' ' + (isSelectedLeave ? classes.ovalSelectedLeave : '')}>
                    <span>{props.weight}</span>
                    <span className={classes.weight}>кг</span>
                </div>
            </div>
            <div className={classes.textContainer}>
                <span className={classes.text}>{props.isAvailable ? props.text : `Печалька, ${props.taste} закончился`}</span>
                {props.isAvailable && <span className={classes.text} onClick={clickContainer}>{props.link}</span>}
            </div>
        </div>
    )
}

export default Card