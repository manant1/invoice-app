import React from "react"
import * as PropTypes from "prop-types"

const styles = {
  container: {
    height: "46px",
    width: "100px"
  },
  content: {
    lineHeight: "46px",
    verticalAlign: "middle"
  }
}

const StatusBadge = (props) => {
  switch (props.type) {
    case "success": {
      return <div
        className="bg-button-success rounded-xl text-success text-xs font-bold flex p-3 items-center self-center justify-center"
        style={styles.container}>
        <span style={styles.content} className="font-bold text-2xl">&#8226;</span><span style={styles.content}>&nbsp;{props.title}</span>
      </div>
    }
    case "warning": {
      return <div
        className="bg-button-warning rounded-xl text-warning text-xs font-bold flex p-3 items-center justify-center"
        style={styles.container}>
        <span style={styles.content} className="font-bold text-2xl">&#8226;</span><span style={styles.content}>&nbsp;{props.title}</span>
      </div>
    }
    case "draft": {
      return <div
        className="bg-button-draft items-center justify-center rounded-xl text-draft text-xs font-bold flex p-3"
        style={styles.container}>
        <span style={styles.content} className="font-bold text-2xl">&#8226;</span><span style={styles.content}>&nbsp;{props.title}</span>
      </div>
    }
    default: {
      return null
    }
  }
}

StatusBadge.propTypes = {
  type: PropTypes.oneOf(["success", "warning", "draft"]),
  title: PropTypes.string
}

export default StatusBadge