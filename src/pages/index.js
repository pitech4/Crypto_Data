import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'
import SearchInput from '../SearchInput/SearchInput'
import CoinTable from '../components/CoinTable/CoinTable'
import { useState } from 'react'

export default function Home({name}) {

  const [keyword, setKeyword] = useState('');

  const filteredCoins = name.filter(n=>n.name.toLowerCase().includes(keyword))

  const onInputChange = (e) => {
    e.preventDefault()
    setKeyword(e.target.value.toLowerCase())
  }

  return (
    <Layout>
      <div className={styles.counts}>
        Found {name.length} coins
      </div>
      < SearchInput placeholder="Filter by name" onChange={onInputChange} />
      <CoinTable name={filteredCoins} />
    </Layout>
  )
}
export const getStaticProps = async () => {
  const res = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
  const name = await res.json(); 

  return {
    props: {
     name,
    }
  }
}

