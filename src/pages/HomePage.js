import React, { useEffect, useState } from 'react';
import { data } from '../Data/data'
import {categoryData } from '../Data/filter'
import { Box, Container2,Button,ButtonBox, Box3,Input,Label, Box2 } from '../style/CompStyle'

import Card from '../components/Card';

const HomePage = () => {
    const[pageNo,setPageNo]=useState(1);
    const[totalPages,setTotalPages]=useState(7);

    const [posts, setPosts] = useState(data);
    const results=posts.slice(0,8);
    const [filteredPosts, setFilteredPosts] = useState(results);
    const [itemsOrder,setItemsOrder]=useState('None');
    const [category, setCategory] = useState("All");

        

    useEffect(() => {
        fetchData();
    },[category,pageNo,]
    )

    useEffect(() => {
        OrderItems();
    },[itemsOrder]
    )

    const increment=()=>{
        if(pageNo<totalPages){
            setPageNo(pageNo+1);
        }
    }

    const decrement=()=>{
        if(pageNo>1){
            setPageNo(pageNo-1);
        }
    }

    function handleChange(event) {
        const value = event.target.value;
        setCategory(value);
       
    }

    function handler(event){
        const Value=event.target.value;
        setItemsOrder(Value);
    }

    const OrderItems=()=>{
        let sortedPosts = [...filteredPosts];

        if (itemsOrder === "Decreasing") {
            sortedPosts.sort((a, b) => b.price - a.price);
        } else if (itemsOrder === "Increasing") {
            sortedPosts.sort((a, b) => a.price - b.price);
        }
    
        setFilteredPosts(sortedPosts);
    
    }

    const fetchData = () => {

        
        console.log(category);

        if (category === "All") {
            const results = posts.filter((post) => (post.pageNo===pageNo));
            setFilteredPosts(results);
        }
        else {
            const results = posts.filter((post) => (post.category===category));
            setFilteredPosts(results);
        }
       setItemsOrder("None");
    }


    return (
        <Container2>

            {/* buttons for sorting and filtering */}
            <Box3>

                <Input>
                    <Label htmlFor="category">Category</Label>
                    <select id="category" name="category" value={category}  onChange={(e) => handleChange(e)}>
                        {
                            categoryData.map((c, index) => {
                                return (
                                    <option key={index} value={c.category} >{c.category}</option>
                                )
                            })
                        }
                    </select>
                </Input>

                <Input>
                    <Label htmlFor='price'>Price</Label>
                    <select id="price" name="price" value={itemsOrder} onChange={(e)=>handler(e)}>
                        <option value="None" >None</option>
                        <option value="Increasing" >Increasing</option>
                        <option value="Decreasing" >Decreasing</option>
                    </select>
                </Input>

            </Box3>

            

            <Box>
                { 
                    filteredPosts.map((post) => (
                        <Card post={post} key={post.id} />
                    ))
                }
            </Box>

            {/* pagination */}
            {
                category==="All"
                &&
                <ButtonBox>
                {
                    pageNo>1 &&
                    <Button  onClick={decrement} >Previous</Button>
                }
                <Button >{pageNo}/7</Button>

                {  pageNo<totalPages &&
                    <Button onClick={increment} >Next</Button>
                }
            </ButtonBox>
            }


        </Container2>

    )
}

export default HomePage
