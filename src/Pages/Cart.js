import React,{useState} from 'react'
import { Typography,Box,Button,Paper } from '@mui/material'
import {removeCartItem, useCart, useCartEmpty} from '../Hooks/CartContextProvider'
import CartItem from '../Components/CartItem'
import axios from 'axios'
import { ImportExport } from '@material-ui/icons'
export default function Cart() {
    const cartItems=useCart()
    const cartEmpty=useCartEmpty()
    console.log(cartItems.length)
    let totalPrice=0
    return (
        <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100vw",minHeight:"100vh",backgroundColor:"#2196f3",marginTop:{md:"7vh"}}}>
            <Typography variant="h3" color="white" sx={{marginTop:"1rem"}}>Cart Page</Typography>
            <Typography variant="p" color="#f4f4f4"  sx={{marginBottom:"1rem"}}>Confirm your order request </Typography>
            <Box sx={{minHeight:"80vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",marginBottom:{xs:"7vh",md:"0"}}}>
            {cartItems.length!=0 &&
                <Paper elevation={5} sx={{backgroundColor:"white",width:{xs:"98vw",md:"80vw"},minHeight:"10vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                    <Typography variant="h6" sx={{margin:"1rem 0"}} color="primary">Your Cart</Typography>
                    {cartItems.map((item,index)=>{
                    console.log(item.name,index)
                    totalPrice=totalPrice+item.price*item.count
                    return(<CartItem name={item.name} price={item.price} count={item.count} index={index} />)})}

                    <Typography variant="h6" sx={{margin:"1rem 0"}}>Total Price : {totalPrice} Taka</Typography>
                    <Button variant="contained" size="large" sx={{marginBottom:"1rem"}} onClick={()=>{
                        alert("Are you sure you want to order? ")
                        let items=[]
                        let totalPrice=0
                        cartItems.forEach(async(item)=>{
                            console.log(item)
                            const res= await axios.post("http://54.252.165.71:8081/order",{
                                "userID": item.userID,
                                "postID": item.postID,
                                "customerName": "Salman Sayeed",
                                "customerContact": "0152156190",
                                "addresss": "Dhanmondi,dhaka",
                                "qty": item.count,
                                "status": "pending",
                                "date": Date.now(),
                                "note": ""
                            })
                            console.log(res.data)

                        })
                     
                        
                    }} >Order</Button>
                </Paper>
            }
            {cartItems.length==0 && 
                <Paper elevation={5} sx={{width:"80vw",height:"50vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                    <Box component="img" src="https://i.postimg.cc/W3Qn5nrr/3369473.jpg" sx={{width:{xs:"50vw",md:"15vw"}}}/>
                    <Typography>Your Cart is empty</Typography>
                </Paper>}
            </Box>
        </Box>
    )
}
