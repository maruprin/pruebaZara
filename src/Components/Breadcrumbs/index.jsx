import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";
import React from "react";
import styles from './styles.module.scss'


function Breadcrumb(props){

    function isLast(index){
        return index === props.crumbs.length -1
    }

    return(
        <nav className={styles.breadcrumb}>
            <ol className={styles.crumbItem }>
                {
                    props.crumbs.map((crumb,ci) => {
                        const disabled = isLast(ci) ? 'disabled' : '';
                        return(
                           <li key={ci}
                           className={styles.breadcrumItem}
                           >
                            <button className={styles.disabled} onClick={()=> props.selected(crumb)}>
                            { crumb }
                            </button>
                           </li> 
                        );
                    })
                }

            </ol>
        </nav>
    )
}

export default Breadcrumb