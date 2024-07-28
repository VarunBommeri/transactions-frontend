import React, {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const TransactionForm = () => {
  const [date, setDate] = useState('')
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState('')
  const [type, setType] = useState('credit')
  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      await axios.post('https://transactions-1.onrender.com', {
        date,
        description,
        amount,
        type,
      })

      // Redirect to the list of transactions after successful submission
      navigate('/')
    } catch (error) {
      console.error('Error adding transaction:', error)
    }
  }

  return (
    <div>
      <h1>Add Transaction</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Date:</label>
          <input
            type="date"
            value={date}
            onChange={e => setDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            value={description}
            onChange={e => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={e => setAmount(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Type:</label>
          <select value={type} onChange={e => setType(e.target.value)}>
            <option value="credit">Credit</option>
            <option value="debit">Debit</option>
          </select>
        </div>
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  )
}

export default TransactionForm
