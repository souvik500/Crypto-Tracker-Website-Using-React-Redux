import  React,{useState} from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material';
import Grid from '../Grid/index';
import "./styles.css"
import List from '../List';

export default function TabsComponent({coins, setSearch}) {
  const [value, setValue] = useState('grid');

  const handleChange = (event,newValue) => {
    setValue(newValue);
  };

  const style={
color:"var(--white)",
width:"50vw",
fontWeight: 600,
fontFamily:"Inter",
textTransform: "capitalize"
  };

  const theme= createTheme({
    palette:{
        primary: {
            main:"#3a80e9"
        }
    }
  })

  return (
    <Box >
        <ThemeProvider theme={theme}>
        <TabContext value={value}>       
          <TabList onChange={handleChange}  variant="fullWidth" >
            <Tab label="Grid" value="grid"  sx={style}/>
            <Tab label="List" value="list" sx={style}/>
          </TabList>
        
        <TabPanel value="grid">
            <Box className="grid-flex">
                {
                    coins.map((coin,i)=>{
                        return(
                            <Grid coin={coin} key={i}/>
                        )
                    })
                }
            </Box>
        </TabPanel>
        <TabPanel value="list">
           <table className="list-flex">
                {
                    coins.map((coin,i)=>{
                        return(
                            <List coin={coin} key={i}/>
                        ) 
                    })
                }
            </table>
          </TabPanel>
       
      </TabContext>
        </ThemeProvider>
      
    </Box>
  );
}



