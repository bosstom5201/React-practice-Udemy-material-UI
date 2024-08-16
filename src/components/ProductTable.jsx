import { Box, TableContainer, Table, TableHead, TableBody, TableRow, TableCell,Button } from '@mui/material'
import React, { useState } from 'react'

export default function ProductTable({ products, deleteProduct }) {
  return (
    <div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {
              products.map((product) => {
                return (
                  <TableRow>
                    <TableCell>{product.id}</TableCell>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>{product.price}</TableCell>
                    <TableCell>{product.description}</TableCell>
                    <TableCell>
                      <Button onClick={()=>deleteProduct(product.id)}>Delete</Button>
                    </TableCell>
                  </TableRow>
                )
              })
            }
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
