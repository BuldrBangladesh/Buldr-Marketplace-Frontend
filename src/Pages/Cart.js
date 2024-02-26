import React,{useState} from 'react'
import { Typography,Box,Button,Paper, TextField } from '@mui/material'
import {removeCartItem, useCart, useCartEmpty} from '../Hooks/CartContextProvider'
import CartItem from '../Components/CartItem'
import axios from 'axios'
import { ImportExport } from '@material-ui/icons'
export default function Cart() {
    const [name,setName]=useState()
    const [phone,setPhone]=useState()
    const [address,setAddress]=useState()
    const [note,setNote]=useState()
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
                <Paper elevation={5} sx={{backgroundColor:"white",width:{xs:"98vw",md:"80vw",padding:"20px"},minHeight:"10vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                    <Typography variant="h6" sx={{margin:"1rem 0"}} color="primary">Your Cart</Typography>
                    {cartItems.map((item,index)=>{
                    console.log(item.name,index)
                    totalPrice=totalPrice+item.price*item.count
                    return(<CartItem name={item.name} price={item.price} count={item.count} index={index} />)})}
{/* 
                    <Typography variant="h6" sx={{margin:"1rem 0"}}>Total Price : {totalPrice} Taka</Typography> */}
                    <Box>
                        <Typography>Customer Details : </Typography>
                        <TextField placeholder='Name' fullWidth onChange={(e)=>setName(e.target.value)}/>
                        <TextField placeholder='Phone No' fullWidth  onChange={(e)=>setPhone(e.target.value)}/>
                        <TextField placeholder='Address' fullWidth  onChange={(e)=>setAddress(e.target.value)}/>
                        <TextField placeholder='Note' fullWidth  onChange={(e)=>setNote(e.target.value)}/>
                    </Box>      
                    <Button variant="contained" size="large" sx={{marginBottom:"1rem"}} onClick={()=>{
                        
                        let items=[]
                        let totalPrice=0
                        cartItems.forEach(async(item)=>{
                            console.log(item)
                            const res= await axios.post("https://buldr-backend.onrender.com/order",{
                                "userID": item.userID,
                                "postID": item.postID,
                                "customerName": name,
                                "customerContact": phone,
                                "addresss": address,
                                "qty": item.count,
                                "status": "pending",
                                "date": Date.now(),
                                "note": note
                            })
                            console.log(res.data)

                        })
                        cartEmpty()
                        alert("Your order has been successfully placed!")
                        
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