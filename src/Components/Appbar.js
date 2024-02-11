import React,{useState} from 'react'
import {useHistory} from "react-router-dom"
import {Box,Typography,AppBar,Toolbar,Button} from "@mui/material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';

import Checkroom from '@mui/icons-material/Checkroom';
import PersonIcon from '@mui/icons-material/Person';

export default function Appbar() {
    const [active,setActive]=useState(0)
    const history=useHistory()

    const HomeClick=()=>{
        setActive(0)
        history.push("/")
    }
    const ShopClick=()=>{
        setActive(1)
        history.push("/shop")
    }
    const CartClick=()=>{
        setActive(2)
        history.push("/cart")
    }
    const AccountClick=()=>{
        setActive(3)
        history.push("/account")
    }
    return (
        <AppBar color="default" position="fixed" sx={{ top: {xs:'auto',md:0}, bottom: {xs:0,md:"auto" }}}>
            <Toolbar sx={{display:"flex",alignItems:"center",justifyContent:"space-around"}}>
                <Box sx={{display:{xs:"none",md:"flex"},flex:".8"}}>
                    <Typography color="primary" variant="h4">Buldr Marketplace</Typography>
                </Box>
                <Button onClick={HomeClick} color="inherit" sx={{display:"flex",flexDirection:{xs:"column",md:"row"}}}>
                    {active==0 ? <HomeIcon color="primary" sx={{display:{xs:"flex",md:"none"}}}/> : <HomeIcon sx={{display:{xs:"flex",md:"none"}}}/>}
                    {active==0 ? <Typography color="primary">Home</Typography> : <Typography>Home</Typography>}

                </Button>

                <Button onClick={ShopClick} color="inherit" sx={{display:"flex",flexDirection:{xs:"column",md:"row"}}}>
                    {active==1 ? <Checkroom color="primary" sx={{display:{xs:"flex",md:"none"}}}/> : <Checkroom sx={{display:{xs:"flex",md:"none"}}}/>}
                    {active==1 ? <Typography color="primary">Shop</Typography> : <Typography>Shop</Typography>}
                </Button>
                <Button onClick={CartClick} color="inherit" sx={{display:"flex",flexDirection:{xs:"column",md:"row"}}}>
                    {active===2 ? <ShoppingCartIcon color="primary" sx={{display:{xs:"flex",md:"none"}}}/> : <ShoppingCartIcon sx={{display:{xs:"flex",md:"none"}}}/>}
                    {active===2 ? <Typography color="primary">Cart</Typography> :<Typography>Cart</Typography>}

                </Button>
                <Button onClick={AccountClick} color="inherit" sx={{display:"flex",flexDirection:{xs:"column",md:"row"}}}>
                    {active==3 ? <PersonIcon color="primary" sx={{display:{xs:"flex",md:"none"}}}/> : <PersonIcon sx={{display:{xs:"flex",md:"none"}}}/>}
                    {active==3 ? <Typography color="primary">Account</Typography> : <Typography>Account</Typography>}
                </Button>

            </Toolbar>
        </AppBar>
    )
}
