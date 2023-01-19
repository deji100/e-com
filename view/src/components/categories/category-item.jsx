import { NavLink } from 'react-router-dom'
import { Icon } from '@iconify/react';

const CategoryItem = ({item, icon}) => {
    return (
        <>  
            <NavLink className='cat-item-link' to={`/categories/${item.id}`}>
                <Icon className='icon' icon={icon} />
            </NavLink>
            <span className='icon-name'>{item.name}</span>
        </>
    )
}

export default CategoryItem;