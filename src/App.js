import React from "react";

//global css
import GlobalStyle from "./shared/styles/globalStyles";

//routing
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routing } from "./routing/routing";

function App() {
	return (
		<>
			<GlobalStyle />
			<BrowserRouter>
				<Routes>
					{routing.map((route, index, ...rest) => {
						return <Route key={index} path={route.path} element={<route.component />} {...rest} />;
					})}
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
