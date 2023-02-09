import { useEffect, useState } from "react";
import axios from "axios";
import './style.scss';
import CategoryItem from "./CategoryItem";

const Dashboard = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        var config = {
            method: 'get',
            url:  'https://qdenya.com/api/sql/index.php',
            withCredentials: false,
          };
        
          axios(config)
          .then(function (response) {
            setItems(response.data['items']);
            console.log(JSON.stringify(response.data['items']));
          })
          .catch(function (error) {
            console.log(error);
          });
    }, [])

    const renderCategory = () => {
        return(
            items.map((item, index) => {
                return (<CategoryItem
                            key={index}
                            info = {item}
                        />);
            })
        );
    }
    
    return(
        <div className="dashboard">
            <div className="dashboard_container">
                <div className="dashboard_wrapper">
                    {renderCategory()}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;