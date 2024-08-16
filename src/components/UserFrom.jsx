import { Box, Typography, TextField, Button } from '@mui/material'
import React, { useState } from 'react'

export default function UserFrom() {

  const [product, setProduct] = useState({
    id: '',
    name: '',
    price: '',
    description: ''
  })

  const handleChange = (event) => {
    console.log("first")
    setProduct({
      ...product,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product)
    addProduct(product)
    setProduct({
      id: '',
      name: '',
      price: '',
      description: ''
    })
  }

  return (
    <div>
      <Box component='form' onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400 }}>
        <Typography variant='h6'> add New Products</Typography>
        <TextField label="ID" name='id' value={product.id} onChange={handleChange} required />
        <TextField label="Name" name='name' value={product.name} onChange={handleChange} required />
        <TextField label="Price" name='price' value={product.price} onChange={handleChange} required />
        <TextField label="Description" name='description' value={product.description} onChange={handleChange} required />
        <Button type='submit' variant='contained' > Add Product</Button>
      </Box>
    </div>
  )
}
