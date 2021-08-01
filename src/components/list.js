import React from "react"
import { ChevronRightIcon } from "@heroicons/react/solid"
import "./list.css"
import StatusBadge from "./status-badge"
import { parseDateString } from "../utils/helpers"

const List = ({ items, className }) => {
  return (
    <div className={`${className}`}>
      {items.map((item, i) => (
        <div key={`invoice-list-item-${i}`} className="list-item border border-transparent hover:border-primary invoice-mobile-grid md:invoice-grid rounded-xl bg-white dark:bg-fill w-full py-4 px-4 mt-7 mb-7">
          <div className="invoiceNo flex items-center">
            <span className="symbol-primary text-xs">#</span> <span
            className="text-primary text-xs font-bold">{item.invoiceNo}</span>
          </div>
          <div className="dueDate flex items-center">
            <span className="text-xs text-muted">Due {parseDateString(item.dueDate)}</span>
          </div>
          <div className="client flex items-center">
            <span className="text-xs text-muted">{item.client.name} {item.client.lastName}</span>
          </div>
          <div className="sum flex items-center">
              <span className="text-ms text-primary font-bold">
                &euro;{item.sum.toLocaleString()}
              </span>
          </div>
          <div className="status flex items-center">
            <StatusBadge type={item.status} title={item.type}/>
          </div>
          <div className="hidden md:block chevron flex items-center">
            <ChevronRightIcon style={{ height: 15 }} className="icon-primary icon"/>
          </div>
        </div>
      ))}
    </div>
  )
}

List.defaultProps = {
  items: []
}

export default List