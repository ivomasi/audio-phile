import React, { useState, useEffect } from "react";

//comps
import ProductGrid from "../components/ProductGrid/ProductGrid";
import Layout from "../shared/Layout";
import Spinner from "../components/Spinner/Spinner";
import Button from "../components/Button/Button";
import styled from "styled-components";
import colors from "../styled-system/colors";


//firestore
import { db } from "../firebase.js";
import { getDocs, collection, query, orderBy, limit, startAfter, endAt } from "firebase/firestore";

function Headphones() {
	const [items, setItems] = useState(null);
	const [loading, setLoading] = useState(false);
	const [lastDocumentRef, setLastDocumentRef] = useState();

	useEffect(() => {
		try {
			setLoading(true);

			fetchWithPagination("headphones", "more");

			setLoading(false);
		} catch (error) {
			console.log(error);
		}
	}, []);

	async function fetchWithPagination(collectionName, type = "none") {
		const collectionRef = collection(db, collectionName);

		let firstQuery;
		if (type === "more") {
			firstQuery = query(collectionRef, orderBy("price", "asc"), startAfter(lastDocumentRef || 0), limit(8));
		} else {
			firstQuery = query(collectionRef, orderBy("price", "asc"), endAt(lastDocumentRef || 0), limit(8));
		}
		const documentSnapshots = await getDocs(firstQuery);

		const documents = documentSnapshots.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

		const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length - 1];

		setLastDocumentRef(lastVisible);
		setItems(documents);
	}

	return (
		<Layout>
			{loading && <Spinner loading={loading} />}
			{items && items.length === 8 ? (
				<>
					<ProductGrid products={items} />
					<PagButtons>
						<Button complementary size="lg" text="next" rounded onClick={() => fetchWithPagination("headphones", "more")} />
					</PagButtons>
				</>
			) : (
				<>
					<ProductGrid products={items} />
					<PagButtons>
						<Button complementary size="lg" text="back" rounded onClick={() => fetchWithPagination("headphones")} />
					</PagButtons>
				</>
			)}
		</Layout>
	);
}

const PagButtons = styled.div`
	display: flex;
	flex-direction: row;
	width: 80%;
	margin: 0 auto;
	padding: 2rem;
	justify-content: space-around;
	align-items: center;
	background-color: ${colors.white};
`;

export default Headphones;
