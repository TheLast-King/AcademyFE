import { useEffect, useState } from "react";
import axios from 'axios';
import Sidebar from "../components/sidebar.jsx";
import Config from "../config/config.js";

export default function Home(){
  const [auth, setAuth] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('token'); // Retrieve token from localStorage

                if (token) {
                    const result = await axios.get(`${Config.baseurl}/${Config.urls.users}`, {
                        headers: {
                            Authorization: `${token}` // Set token in the Authorization header
                        }
                    });
                    console.log(result.data.users);
                    setData(result.data.users);
                } else {
                  
                    // Handle if token is not found in localStorage
                    console.log('Token not found in localStorage');
                }
            } catch (error) {
                console.error('Error message:', error.message);
                setAuth(false);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="flex flex-row">
            <div className="flex justify-start">
                <Sidebar />
            </div>
            { auth === true ? <div className="w-full flex-4 m-4">
                Hello
            </div>: <div className="text-4xl ml-4 mt-4">
            User: UnAuthorised Access 
            </div>}
            
        </div>
    );
}
