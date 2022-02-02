import { KeyboardArrowDownRounded, KeyboardArrowUpRounded } from "@material-ui/icons";
import styles from "./CoinTable.module.css"
import { useState } from "react";
import Link from "next/Link";

const orderBy = (name, value, direction) => {
    if (direction === 'asc') {
        return [...name].sort((a,b)=>(a[value]>b[value] ? 1:-1))
    }
    if (direction === 'desc') {
        return [...name].sort((a,b)=>(a[value]>b[value] ? -1:1))
    }
    return [...name].sort(() => (Math.random() > .5) ? 1 : -1);
}

const SortArrow = ({direction}) => {
    if (!direction) {
        return <></>
    }
    if (direction === "desc") {
        return (
            <div className={styles.heading_arrow}>
                    <KeyboardArrowDownRounded color="inherit" />
                </div> 
        )
    }
    else {
        return (
            <div className={styles.heading_arrow}>
                    <KeyboardArrowUpRounded color="inherit" />
                </div> 
        )
    }
}

const CoinTable = ({name}) => {
    
    const [direction, setDirection] = useState();
    const [value, setValue] = useState();

    const orderedCoins = orderBy(name, value, direction)

    const switchDirection = () => {
        if (!direction) {
            setDirection('desc');
        }
        else if (direction === 'desc') {
            setDirection('asc');
        }
        else {
            setDirection(null);
        }
    }

    const setValueAndDirection = (value) => {
        switchDirection();
        setValue(value);
    }
    
    return (
    <div>
        <div className={styles.heading}>
            <button className={styles.heading_name} onClick={()=>setValueAndDirection("name")}>
                <div>Name</div>
                <SortArrow />              
            </button>
            <button className={styles.heading_marketcap} onClick={()=>setValueAndDirection("marketcap")}>
                <div>Marketcap</div>
                <SortArrow direction={direction}/>  
            </button>
        </div>

        {orderedCoins.map((n) => (
        <Link href={`./coin/${n.id}`}>
            <div className={styles.row}>
            <div className={styles.name}>{n.name}</div>
            <div className={styles.marketcap}>${n.market_cap}</div>
        </div>
        </Link>
        ))}
    </div>
    )
}

export default CoinTable