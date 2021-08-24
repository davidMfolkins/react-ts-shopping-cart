import { useState } from 'react'
import { useQuery } from 'react-query'
import { Drawer, LinearProgress, Grid, Badge } from '@material-ui/core';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
import { Wrapper } from './App.styles';
export type CartItemType = {
  id: number;
  category: string;
  descriptions: string;
  image: string,
  price: number;
  title: string;
  amount: number;
}

const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch('https://fakestoreapi.com/products')).json();

function App() {

  const { data, isLoading, error } = useQuery<CartItemType[]>(
    'products',
    getProducts
  )
  
  console.log(data)

  const getTotalItems = () => null;

  const handleAddToCart = () => null;

  const handleRemoveFromCart = () => null;

  if (isLoading) return <LinearProgress />

  if (error) return <div>Something Went Wrong...</div>
  
  return (
    <div className="App">
      Shopping Cart
    </div>
  );
}

export default App;
