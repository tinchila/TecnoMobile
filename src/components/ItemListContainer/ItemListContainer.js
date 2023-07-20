import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useParams } from "react-router-dom";
import dataProducts from '../../data/dataProducts.json'

const ItemListContainer = () => {
    const [item, setItem] = useState ([]);
    const {id} = useParams();

    useEffect(()=>{
      const fetchData = async()=>{
         try{
         const data = await new Promise((resolve)=>{
         setTimeout(()=>{
         resolve(id ? dataProducts.filter(item=> item.category === id) : dataProducts)
        }, 1000);
         });
         setItem(data);
       }catch(error){
         console.log('Error:', error);
       }
     };
     fetchData();
    }, [id])
  return (
   <Container fluid>
    <Row>
    <ItemList item={item}/>
    </Row>
   </Container>
  )
}

export default ItemListContainer


