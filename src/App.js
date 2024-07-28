import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import TransactionForm from './components/TransactionForm'
import TransactionList from './components/TransactionList'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<TransactionList />} />
          <Route path="/add" element={<TransactionForm />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
