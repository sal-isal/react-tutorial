import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'
import App from './App'
import Api from './Api'
import './index.css'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />)