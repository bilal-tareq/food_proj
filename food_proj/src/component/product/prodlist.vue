<template>
    <div class="container">
        <div class="products">
        <h1>Desserts</h1>
        <div class="product-grid">
            <div class="product-card" v-for="product in products" :key="product.name">
            <img :src="product.image" :alt="product.name" />
            <div class="product-title">{{ product.name }}</div>
            <div class="product-desc">{{ product.category }}</div>
            <div class="product-price">${{ product.price.toFixed(2) }}</div>
            <button class="add-cart-btn">Add to Cart</button>
            </div>
        </div>
        </div>
        
        <div class="cart">
            <div class="cart-title">Your Cart (7)</div>
            <div class="cart-list">
                <div class="cart-item">
                    <span>Classic Tiramisu</span>
                    <span>1x $5.50</span>
                    <span>$5.50</span>
                    <span style="cursor:pointer;">&#10005;</span>
                </div>
                <div class="cart-item">
                    <span>Vanilla Bean Crème Brûlée</span>
                    <span>4x $7.00</span>
                    <span>$28.00</span>
                    <span style="cursor:pointer;">&#10005;</span>
                </div>
                <div class="cart-item">
                    <span>Vanilla Panna Cotta</span>
                    <span>2x $6.50</span>
                    <span>$13.00</span>
                    <span style="cursor:pointer;">&#10005;</span>
                </div>
            </div>
            <div class="cart-total">Order Total <span style="float:right;">$46.50</span></div>
            <div class="carbon-neutral">
                <span>&#127793; This is a <strong>carbon-neutral</strong> delivery</span>
            </div>
            <button class="confirm-btn">Confirm Order</button>
        </div>
    </div>
</template>

<script setup>
const products = [
  {
    image: "/assets/images/image-waffle-desktop.jpg",
    name: "Waffle with Berries",
    category: "Waffle",
    price: 6.50
  },
  {
    image: "/assets/images/image-creme-brulee-desktop.jpg",
    name: "Vanilla Bean Crème Brûlée",
    category: "Crème Brûlée",
    price: 7.00
  },
  {
    image: "/assets/images/image-macaron-desktop.jpg",
    name: "Macaron Mix of Five",
    category: "Macaron",
    price: 8.00
  },
  {
    image: "/assets/images/image-tiramisu-desktop.jpg",
    name: "Classic Tiramisu",
    category: "Tiramisu",
    price: 5.50
  },

    {
    image: "/assets/images/image-baklava-desktop.jpg",
    name: "Pistachio Baklava",
    category: "Baklava",
    price: 4.00
  },
  {
    image: "/assets/images/image-meringue-desktop.jpg",
    name: "Lemon Meringue Pie",
    category: "Pie",
    price: 5.00
  },
  {
    image: "/assets/images/image-cake-desktop.jpg",
    name: "Red Velvet Cake",
    category: "Cake",
    price: 4.50
  },
  {
    image: "/assets/images/image-brownie-desktop.jpg",
    name: "Salted Caramel Brownie",
    category: "Brownie",
    price: 5.50
  },
    {
    image: "/assets/images/image-panna-cotta-desktop.jpg",
    name: "Vanilla Panna Cotta",
    category: "Panna Cotta",
    price: 6.50
  }
];
</script>

 <style scoped>

        body {
            font-family: Arial, sans-serif;
            background: #f9f6f3;
            margin: 0;
        }
        .container {
            display: flex;
            gap: 40px;
            padding: 40px;
        }
        .products {
            flex: 2;
        }
        .cart {
            flex: 1;
            background: #fff;
            border-radius: 16px;
            padding: 24px;
            box-shadow: 0 2px 8px #eee;
        }
        h1 {
            margin-bottom: 24px;
        }
        .product-grid {
            display: grid;
            grid-template-columns:repeat(3, 1fr); 
            gap: 24px; 
        }
        .product-card {
            background: #fff; 
            border-radius: 12px; 
            box-shadow: 0 2px 8px #eee; 
            padding: 16px; 
            text-align: center; 
        }
        .product-card img { 
            width: 100%; 
            height: 120px; 
            object-fit: cover; 
            border-radius: 8px; 
        }
        .product-title { 
            font-weight: bold; 
            margin: 8px 0 4px; 
        }
        .product-desc { 
            color: #555; 
            font-size: 0.95em; 
            margin-bottom: 8px; 
        }
        .product-price { 
            color: #b85c2b; 
            font-weight: bold; 
            margin-bottom: 8px; 
        }
        .add-cart-btn { 
            background: #fff; 
            border: 1px solid #b85c2b; 
            color: #b85c2b; 
            border-radius: 24px; 
            padding: 8px 16px; 
            cursor: pointer; 
            font-weight: bold; 
        }
        .add-cart-btn:hover { 
            background: #b85c2b; 
            color: #fff; 
        }
        .cart-title { 
            font-size: 1.3em; 
            font-weight: bold; 
            margin-bottom: 16px; 
        }
        .cart-list { 
            margin-bottom: 16px; 
        }
        .cart-item { 
            display: flex; 
            justify-content: space-between; 
            align-items: center; 
            margin-bottom: 8px; 
        }
        .cart-item span { 
            font-size: 0.95em; 
        }
        .cart-total { 
            font-size: 1.5em; 
            font-weight: bold; 
            margin-bottom: 16px; 
        }
        .carbon-neutral { 
            background: #f3f7f3; 
            color: #4caf50; 
            padding: 8px; 
            border-radius: 8px; 
            margin-bottom: 16px; 
            font-size: 0.95em; 
        }
        .confirm-btn { 
            background: #b85c2b; 
            color: #fff; 
            border: none; 
            border-radius: 24px; 
            padding: 12px 0; 
            width: 100%; 
            font-size: 1.1em; 
            font-weight: bold; 
            cursor: pointer; 
        }
        .confirm-btn:hover { 
            background: #a04a1f; 
        }
   

</style>