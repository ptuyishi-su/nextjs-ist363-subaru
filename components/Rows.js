import classNames from "classnames/bind";

import styles from "./row.module.scss"

const cx = classNames.bind(styles)

const Row=({children, justifyContent})=>{
    const rowClasses =cx({
        row: true,
        [`justify-content-${justifyContent}`]: justifyContent
    });
    return <div className={StyleSheet.row}>{children}</div>
}

export default Row;