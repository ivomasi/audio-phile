import React,{ useState, useEffect} from 'react'

//help
import getCollection from '../hooks/getCollection/getCollection';

//comps
import ProductGrid from '../components/ProductGrid/ProductGrid'
import Layout from '../shared/Layout'

function Headphones() {
  const [items, setItems] = useState(null);

	useEffect(() => {
		const setData = async () => {

      try {
        const data = await getCollection("headphones");
			  setItems(data);
      } catch (error) {
        console.error(error);
      }

			
		};

		setData();
	},[]);
  return (<Layout>
    {items && <ProductGrid products={items}/>}
  </Layout>
  )
}

export default Headphones