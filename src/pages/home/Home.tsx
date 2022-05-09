import React from 'react'
import { useDispatch } from 'react-redux'
import CountryList from '../../components/countryList/CountryList'
import Navbar from '../../components/navbar/Navbar'
import { fetchAllCountries } from '../../redux/actions'

const Home = () => {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(fetchAllCountries())
  }, [dispatch])

  return (
    <>
      <Navbar />
      <CountryList />
    </>
  )
}

export default Home
