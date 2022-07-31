import React,{ useState, useEffect} from 'react'

//help
import getCollection from '../hooks/getCollection/getCollection';

//comps
import ProductGrid from '../components/ProductGrid/ProductGrid'
import Layout from '../shared/Layout'

function Speakers() {

  const [speakers, setSpeakers] = useState(null);

	useEffect(() => {
		const setData = async () => {

			const data = await getCollection("speakers");
			setSpeakers(data);
		};

		setData();
	}, []);
  return (
    <Layout>
            {speakers && <ProductGrid products={speakers}/>}

    </Layout>
  )
}

export default Speakers