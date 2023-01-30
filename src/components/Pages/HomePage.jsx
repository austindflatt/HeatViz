import { Container } from '@mui/material'
import React from 'react'
import CoinList from '../CoinList/CoinList'
import HeatMap from '../HeatMap/HeatMap'

const HomePage = () => {
  return (
    <>
      <HeatMap />
      <Container maxWidth="xl">
        <CoinList />
      </Container>
    </>
  )
}

export default HomePage;