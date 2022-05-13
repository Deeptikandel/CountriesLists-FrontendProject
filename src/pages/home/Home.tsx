import React from 'react'
import { useDispatch } from 'react-redux'

import { fetchAllCountries } from '../../redux/actions'

import CountryList from '../../components/countryList/CountryList'
import Navbar from '../../components/navbar/Navbar'

const Home = () => {
  const [searchKey, setSearchKey] = React.useState('')
  const disabled = false
  //handlechange event

  const handleSearch = (value: string) => {
    setSearchKey(value)
  }
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(fetchAllCountries())
  }, [dispatch])

  return (
    <>
      <Navbar handleSearch={handleSearch} />
      <CountryList searchKey={searchKey} disabled={disabled} />
    </>
  )
}

export default Home
