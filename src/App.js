import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './index.css'
import {ThemeProvider} from '@mui/material'
import {createTheme} from "@mui/material/styles"
import Home from './Pages/Home'


const customTheme=createTheme({
  palette:{
 
  },
  typography: {
    fontFamily: [
      "Oswald",
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },

})

function App() {
  

  

  return(
    <BrowserRouter>
    
        <ThemeProvider theme={customTheme}>
          <Switch>
            <Route path="/" exact component={Home}/>
          </Switch>
          
        </ThemeProvider>
      
    </BrowserRouter>
  )
}

export default App;
