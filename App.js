import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import RecipeList from './components/RecipeList';
import RecipeForm from './components/RecipeForm';

const App = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<RecipeList />} />
                <Route path="/add" element={<RecipeForm />} />
            </Routes>
        </div>
    );
};

export default App;
