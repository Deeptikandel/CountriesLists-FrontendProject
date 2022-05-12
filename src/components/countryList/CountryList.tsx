import React, { useState, useContext } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Button, IconButton, Typography } from '@mui/material'
import './countryList.scss'
import { AppState } from '../../types/Types'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllCountries, addCountryCart } from '../../redux/actions'
import { ThemeContext } from '../../context/context'
import { Country } from '../../types/CountryTypes'
import { ArrowDownward, ArrowUpward } from '@mui/icons-material'

type countryListProps = {
  searchKey: string
}
export default function CountryList({ searchKey }: countryListProps) {
  const [change, setChange] = useState(true)
  //getting all countries form redux
  const countries = useSelector(
    (state: AppState) => state.countryReducer.countries
  )
  const isLoading = useSelector(
    (state: AppState) => state.countryReducer.isLoading
  )

  const [filteredCountries, setFilteredCountries] = React.useState(countries)

  React.useEffect(() => {
    setFilteredCountries(countries)
  }, [countries])

  //filter country by keyword
  React.useEffect(() => {
    const searchedCountries: any = countries.filter((country: Country) =>
      country.name.toLowerCase().includes(searchKey.toLowerCase())
    )
    setFilteredCountries(searchedCountries)
  }, [searchKey, countries])

  const handleChangeOrder = () => {
    filteredCountries.reverse()
    setChange(!change)
  }
  //init dispatch
  const dispatch = useDispatch()
  const { colorTheme } = useContext(ThemeContext)
  //disptach fetch all countries
  React.useEffect(() => {
    dispatch(fetchAllCountries())
  }, [dispatch])
  return (
    <TableContainer className="table-container" component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className="table-head">
          <TableRow>
            <TableCell>Flag</TableCell>
            <TableCell align="right">
              Name
              <IconButton
                onKeyDown={handleChangeOrder}
                onClick={handleChangeOrder}
                tabIndex={0}
              >
                <span>{change ? <ArrowUpward /> : <ArrowDownward />}</span>
              </IconButton>
            </TableCell>
            <TableCell align="right">Languages</TableCell>
            <TableCell align="right">Population</TableCell>
            <TableCell align="right">Region</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {isLoading && <Typography>Loading...</Typography>}
          {!isLoading &&
            filteredCountries &&
            filteredCountries.map((country: any, index) => (
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                key={index}
              >
                <TableCell component="th" scope="row">
                  <img
                    width="100px"
                    src={country.flags.svg}
                    alt={`${country.name} flag`}
                  />
                </TableCell>
                <TableCell align="right">{country.name}</TableCell>
                <TableCell align="right">
                  {country.languages.map((language: { name: string }) => (
                    <li>{language.name}</li>
                  ))}
                </TableCell>
                <TableCell align="right">{country.population}</TableCell>
                <TableCell align="right">{country.region}</TableCell>
                <TableCell align="right">
                  <Button
                    className="button"
                    variant="contained"
                    color="primary"
                    style={{ backgroundColor: colorTheme.code }}
                    onClick={() => dispatch(addCountryCart(country))}
                  >
                    ADD
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
