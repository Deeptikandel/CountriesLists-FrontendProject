import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Button } from '@mui/material'
import './countryList.scss'
import { AppState } from '../../types/Types'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllCountries } from '../../redux/actions'

export default function CountryList() {
  const countries = useSelector(
    (state: AppState) => state.countryReducer.countries
  )
  const isLoading = useSelector(
    (state: AppState) => state.countryReducer.isLoading
  )
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(fetchAllCountries())
  }, [dispatch])
  return (
    <TableContainer className="table-container" component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className="table-head">
          <TableRow>
            <TableCell>Flag</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Languages</TableCell>
            <TableCell align="right">Population</TableCell>
            <TableCell align="right">Region</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {isLoading && <h2>Loading...</h2>}
          {!isLoading &&
            countries &&
            countries.map((country: any) => (
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
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
