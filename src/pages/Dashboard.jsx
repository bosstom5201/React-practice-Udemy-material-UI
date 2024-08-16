import { Box, Container } from '@mui/material'
import React, { useState } from 'react'

import ProductForm from '../components/ProductForm'
import ProductTable from '../components/ProductTable'

export default function Dashboard() {

  const [products, setProducts] = React.useState([])

  const addProduct = (product) => {
    setProducts([...products, product])
  }
  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  }
  // const updateProduct = (product) => {
  //   setProducts(products.map((p) => (p.id === product.id ? product : p)))
  // }
  return (
    <div>
      <Container>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
          <ProductForm addProduct={addProduct} />
          <ProductTable products={products} deleteProduct={deleteProduct} />
        </Box>
      </Container>
    </div>
  )
}
