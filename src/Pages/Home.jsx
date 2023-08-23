import { useState } from 'react'
import AppApiContext from '../ContextApi/AppApicontext'
import Banner from '../components/Banner'
import ProductCardGroup from '../components/ProductCardGroup'

function Home() {
  const [apiType, setApiType] = useState('bakery')

  const defaultState = {
    apiType: apiType,
    setApiType: setApiType
  }
  return (
    <AppApiContext.Provider value={defaultState}>
      <Banner />
      <ProductCardGroup />
    </AppApiContext.Provider>
  )
}

export default Home