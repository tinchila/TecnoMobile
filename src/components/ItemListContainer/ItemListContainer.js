import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import Spinners from '../Spinner/Spinner';

const ItemListContainer = () => {
  const { categoryId } = useParams()
  const [items, setItems] = useState()
  const [load, setLoad] = useState(true) 
  const getData = async (category) => {
    setLoad(true)
    const querydb = getFirestore();
    const queryCollection = category ? query(collection(querydb, 'dataProducts'), where("category", "==", category))
      : collection(querydb, 'dataProducts');
    const resultado = await getDocs(queryCollection)
    const datos = resultado.docs.map(p => ({ id: p.id, ...p.data() }))
    setItems(datos)
    setLoad(false)
  }
  useEffect(() => {
    getData(categoryId)
  }, [categoryId])
  return (
    <>
      {load ? <Spinners/> : <ItemList data={items}/>}
    </>
  );
};

export default ItemListContainer;