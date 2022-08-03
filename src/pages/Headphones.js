import React, { useState, useEffect } from "react";


//comps
import ProductGrid from "../components/ProductGrid/ProductGrid";
import Layout from "../shared/Layout";
import Spinner from "../components/Spinner/Spinner";

import { db } from "../firebase.js";
import { getDocs, collection, query, orderBy, limit, startAfter } from "firebase/firestore";
import Button from "../components/Button/Button";

function Headphones() {
	const [items, setItems] = useState(null);
	const [loading, setLoading] = useState(false);
	const [lastDocumentRef, setLastDocumentRef] = useState();

	useEffect(() => {

    try {
      setLoading(true);
      
      fetchWithPagination("headphones")
      
      setLoading(false);
      
    } catch (error) {
      console.log(error)
    }
	}, []);

	async function fetchWithPagination(collectionName) {
		const collectionRef = collection(db, collectionName);

    const firstQuery = query(collectionRef, orderBy("price", "asc"), startAfter(lastDocumentRef || 0) , limit(8));
		const documentSnapshots = await getDocs(firstQuery);

		const documents = documentSnapshots.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

		const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length - 1];

		setLastDocumentRef(lastVisible);
		setItems(documents);
	}

	return (
		<Layout>
			{loading && <Spinner loading={loading} />}
			{items && <ProductGrid products={items} />}
			<Button primary size="lg" onClick={() => fetchWithPagination("headphones")} />
		</Layout>
	);
}

export default Headphones;
