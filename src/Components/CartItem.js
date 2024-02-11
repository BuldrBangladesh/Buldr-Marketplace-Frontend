import React,{useState,useContext} from 'react'

import {Paper,Typography,Box ,Button,ButtonGroup, TextField} from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import { RemoveCartItem, useCart } from '../Hooks/CartContextProvider';


export default function CartItem({name,price,count,index,Remove}) {
    const cartItems=useCart()
    const removeItem=RemoveCartItem()
    return (

        <Paper elevation={5} sx={{width:{xs:"95vw",md:"80vw"},minHeight:{xs:"10vh",md:"10vh"},display:"flex",alignItems:"center",flexDirection:{xs:"column",md:"row"},justifyContent:"space-around",marginBottom:".5rem"}}>
            <Box sx={{width:{xs:"70vw",md:"20vw"},display:"flex",alignItems:"center",justifyContent:"space-around"}}>
                <Typography variant="h6">{name}</Typography>
            </Box>
            <Box sx={{width:{xs:"70vw",md:"20vw"},display:"flex",alignItems:"center",justifyContent:"space-around"}}>
        { /*   <ButtonGroup>
                <Button size="small" onClick={()=>{
                    if(count>0){

                    }
                }}><RemoveIcon/></Button>

                <Button size="small" onClick={()=>{

                }}><AddIcon/></Button>
            </ButtonGroup>
            <Button size="small" variant="outlined" onClick={()=>{}}><DeleteIcon/></Button>*/}

                    <Typography color="primary">Count : {count}</Typography>
                    <Typography color="primary">Price : {count*price} Taka</Typography>
                    <Button size="small" variant="outlined" onClick={()=>{
                        removeItem(index)
                        console.log(cartItems)
                    }}><DeleteIcon/></Button>

            </Box>
        </Paper>

    )
}
