import React from "react"
import { ChevronRightIcon } from "@heroicons/react/solid"
import "./list.css"
import StatusBadge from "./status-badge"
import { parseDateString } from "../utils/helpers"
import { motion } from "framer-motion"

const list = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5
    }
  }
}

const listItem = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
  transition: { duration: 0.75 }
}

const List = ({ items, className }) => {
  return (
    <div className={`${className}`}>
      {items && <motion.ul variants={list} initial="hidden" animate="show">
        {items.map((item, i) => (
          <React.Fragment key={item.invoiceNo}>
            <motion.li variants={listItem}>
              <div
                className="list-item border border-transparent hover:border-primary invoice-mobile-grid md:invoice-grid rounded-xl bg-white dark:bg-fill w-full py-4 px-4 mt-7 mb-7">
                <div className="invoiceNo flex items-center self-center mb-4 md:mb-0">
                  <span className="symbol-primary text-xs">#</span> <span
                  className="text-primary text-xs font-bold">{item.invoiceNo}</span>
                </div>
                <div className="dueDate flex items-center self-center">
                  <span className="text-xs text-muted">Due {parseDateString(item.dueDate)}</span>
                </div>
                <div className="client flex items-center justify-self-end self-center mb-4 md:mb-0">
                  <span
                    className="text-xs text-muted">{item.client.name} {item.client.lastName}</span>
                </div>
                <div className="sum flex items-center justify-self-start md:justify-self-end self-center">
                  <span className="text-ms text-primary font-bold">
                    &euro;{item.sum.toLocaleString()}
                  </span>
                </div>
                <div className="status flex items-center justify-self-end md:justify-self-center self-center">
                  <StatusBadge type={item.status} title={item.type}/>
                </div>
                <div className="hidden md:block chevron flex items-center self-center">
                  <ChevronRightIcon style={{ height: 15 }} className="icon-primary icon"/>
                </div>
              </div>
            </motion.li>
          </React.Fragment>
        ))}
      </motion.ul>
      }
    </div>
  )
}

List.defaultProps = {
  items: []
}

export default List