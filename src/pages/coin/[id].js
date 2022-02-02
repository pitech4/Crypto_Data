import Layout from "../../components/layout"
import styles from "./coin.module.css" 

const Coin = ({name}) => {
    return <Layout title={name.name}>
        <div>
            <div className={styles.overview_panel}>
                <img src={name.image.large} alt={name.name}></img>
            <h1 className={styles.overview_name}>{name.name}</h1>
            <div className={styles.overview_details}>
                <div className={styles.overview_label}>Symbol</div>
                <div className={styles.overview_value}>'{name.symbol}'</div>
                
                <div className={styles.overview_label}>Price</div>
                <div className={styles.overview_value}>{name.market_data.current_price.usd} USD</div>
                
                <div className={styles.overview_label}>Marketcap</div>
                <div className={styles.overview_value}>{name.market_data.market_cap.usd} USD</div>
        
            </div> 
            </div>
        </div>
    </Layout>
}

export default Coin

export const getServerSideProps = async ({params}) => {
    const res = await fetch(`https://api.coingecko.com/api/v3/coins/${params.id}`)
    const name = await res.json(); 
  
    return {
      props: {
       name,
      }
    }
  }