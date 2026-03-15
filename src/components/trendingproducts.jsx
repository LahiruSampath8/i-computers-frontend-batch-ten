import ProductCard from "./productCard"


export default function TrendingProducts() {
    return(
        <div>
            <h1>Trending Products</h1>
                <ProductCard 
                    name="Mac book air"    
                    price="LKR 150,000" 
                    image="https://picsum.photos/id/1/200/300" 
                />
                <ProductCard 
                    name="Dell XPS" 
                    price="LKR 200,000" 
                    image="https://picsum.photos/id/2/200/300"
                />
                <ProductCard 
                    name="HP Spectre" 
                    price="LKR 180,000" 
                    image="https://picsum.photos/id/3/200/300"
                />
                <ProductCard 
                    name="Lenovo ThinkPad" 
                    price="LKR 160,000" 
                    image="https://picsum.photos/id/4/200/300"
                />

        
        </div>

    )
}