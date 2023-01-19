import useCategories from '../../hooks/categories'
import CategoryItem from './category-item'
import '../products/products.css'

const CategoryList = () => {
    const {categories} = useCategories()
    console.log(categories)

    return (
        <div className="cat">
            {
                categories.map(item => (
                    <div className='cat-item'>
                        {
                            item.name === 'Wears'?
                            <CategoryItem key={item.id} icon="emojione-v1:t-shirt" item={item}/>:null
                        }
                        {
                            item.name === 'Shoes'?
                            <CategoryItem key={item.id} icon="emojione-v1:mans-shoe" item={item}/>:null
                        }
                        {
                            item.name === 'Gadgets'?
                            <CategoryItem key={item.id} icon="emojione-v1:headphone" item={item}/>:null
                        }
                        {
                            item.name === 'Watch'?
                            <CategoryItem key={item.id} icon="emojione-v1:watch" item={item}/>:null
                        }
                        {
                            item.name === 'Bags'?
                            <CategoryItem key={item.id} icon="emojione-v1:shopping-bags" item={item}/>:null
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default CategoryList;