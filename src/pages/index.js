import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Select from "../components/select"
import Button from "../components/button"
import List from "../components/list"
import { PlusIcon } from "@heroicons/react/solid"
import Sideview from "../components/sideview"

const options = [{
  name: "Paid",
  status: "success",
  value: "0"
}, {
  name: "Pending",
  status: "warning",
  value: "1"
}, {
  name: "Draft",
  status: "draft",
  value: "2"
}]

const items = [{
  invoiceNo: "MA00001",
  dueDate: "2021-07-01",
  status: options[0].status,
  type: options[0].name,
  client: {
    name: "Jensen",
    lastName: "Huang"
  },
  sum: 2000.99
}, {
  invoiceNo: "MA00002",
  dueDate: "2021-08-05",
  status: options[2].status,
  type: options[2].name,
  client: {
    name: "Alex",
    lastName: "Grim"
  },
  sum: 1500.5
}, {
  invoiceNo: "MA00002",
  dueDate: "2021-08-05",
  status: options[1].status,
  type: options[1].name,
  client: {
    name: "Anita",
    lastName: "Watkins"
  },
  sum: 1999
}]

const IndexPage = () => {
  const [open, setOpen] = React.useState(false)

  const onClose = () => {
    setOpen(false);
  }

  return (
    <Layout> <Seo title="Invoices"/> <Sideview className="bg-white dark:bg-page" open={open} onClose={onClose}/>
      <div className="flex-1 w-full py-18 px-12">
        <div className="max-w-3xl mx-auto h-full">
          <div className="flex justify-between items-center">
            <div>
              <h1>Invoices</h1>
              <span className="text-muted text-xs">There are 7 total invoices</span>
            </div>
            <div className="flex justify-between items-center">
              <Select options={options}/> <Button status={"primary"} className={"ml-6"} onClick={() => setOpen(!open)}>
              <div className="flex items-center">
              <span className="bg-white relative" style={{ borderRadius: "50%", height: 30, width: 30 }}>
                <PlusIcon style={{ height: 15, width: 15, strokeWidth: 1.75 }}
                          className="icon-primary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"/>
              </span> <span className="ml-3 mt-1 font-500">New Invoice</span>
              </div>
            </Button>
            </div>
          </div>
          <List className="mt-14" items={items}/>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
