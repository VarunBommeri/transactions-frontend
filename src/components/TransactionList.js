import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const TransactionList = () => {
  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get('https://transactions-1.onrender.com')
        setTransactions(response.data)
      } catch (error) {
        console.error('Error fetching transactions:', error)
      }
    }

    fetchTransactions()
  }, [])

  return (
    <div>
      <h1>Transaction List</h1>
      <Link to="/add">Add New Transaction</Link>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TransactionList
