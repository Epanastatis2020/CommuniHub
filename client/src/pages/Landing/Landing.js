import React from 'react';
import styles from './Landing.module.css';

function Landing() {

    console.log("Landing is rendered");
    return (
        <div className="container-fluid p-0 m-0">
            <div className={styles.backgroundImg}>
            </div>
        </div>
    );
}

export default Landing;
