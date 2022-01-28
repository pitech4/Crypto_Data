import styles from "./CoinTable.module.css"
import { StylesContext } from "@material-ui/styles"

const CoinTable = ({name}) => {
    return (
    <div>
        <div className={StylesContext.heading}>
            <button className={styles.heading.name}>
                <div>Name</div>
            </button>
            <button className={styles.heading_marketcap}>
                <div>Marketcap</div>
            </button>
        </div>

        {name.map((n) => (
        <div className={styles.row}>
            <div className={styles.name}>{n.name}</div>
            <div className={styles.marketcap}>{n.market_cap}</div>
        </div>
        ))}
    </div>
    )
}

export default CoinTable