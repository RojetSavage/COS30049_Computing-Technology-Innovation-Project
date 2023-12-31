// The state represented by the variable 'views' represents which elements of the user profile are toggled on and off 

import React from 'react'
import Favorites from './Favorites'
import ForSale from './ForSale'
import InvestmentStats from './InvestmentStats'
import RecentTransactions from './RecentTransactions'
import TransactionHistory from './TransactionHistory'
import MyPortfolio from './MyPortfolio'
import { Sidebar } from '../../components/Sidebar'
import { useState } from 'react'

const initState = {
  forSale: true,
  transactionHistory: false,
  charts: true,
  info: true
}

export const ProfileScreen = () => {
  const [views, setViews] = useState(initState)

  function handleViewChange(viewType) {
    setViews((prevState) => {
      return {
        ...prevState,
        [viewType]: !prevState[viewType]
      }
    })
  }

  return (
    <div className="flex">
      <Sidebar handleViewChange={handleViewChange} views={views} />
      <div className="flex flex-col w-full h-full">
        <div className="flex ml-24 h-screen">

          {/* for sale - the left side of the screen  */}
          {views.forSale &&
            <div className="border bg-slate-100 h-screen overflow-y-scroll overflow-x-hidden min-w-fit">
              <ForSale />
            </div>}

          {/* full transaction history - the left side of the screen  */}
          {views.transactionHistory &&
            <div className="border bg-slate-100 h-screen overflow-y-scroll overflow-x-hidden min-w-fit px-5">
              <TransactionHistory />
            </div>}

          {/* the right half of the screen  */}
          <div className="h-screen flex bg-slate-200 overflow-y-scroll w-full">
            <div className="flex flex-col h-full ">

              {/*  top half*/}
              <div className="flex flex-wrap gap-10 px-10 pt-5">
                {views.charts && <InvestmentStats />}
                {views.info && <Favorites />}
                {views.info && <RecentTransactions />}
                {views.charts && <MyPortfolio />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
