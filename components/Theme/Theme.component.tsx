import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { GlobalStyles } from './globalStyles';



export const Theme = (props: any) => {

  return (
    <ThemeProvider theme={theme}>

      {props.children}
    </ThemeProvider>
  )
}