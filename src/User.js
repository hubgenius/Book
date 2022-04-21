import MaterialTable from 'material-table';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import SimpleImageSlider from "react-simple-image-slider";

function Copy() {
    // const images = [
    //     {url: "https://www.ingredion.com/content/dam/ingredion/usca-images/food/meat/cheeseburger-bread_720x560.jpg" },
    //     { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcW-NkCIIRYhbq6gMjKKxdhrT6OJV7JxbbJA&usqp=CAU" },
    //     { url: "https://i0.wp.com/vegecravings.com/wp-content/uploads/2017/03/samosa-recipe-step-by-step-instructions.jpg?fit=1801%2C1717&quality=65&strip=all&ssl=1" },
    //     { url: "https://www.nehascookbook.com/wp-content/uploads/2021/07/Fried-rice-lobi-manchurian-WS.jpg" },
    //     { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQupGwAVatFu6WkamUHdNKFTEaa8xl1csbjpA&usqp=CAU" },
    //     { url: "https://i.ytimg.com/vi/IpXqjJBf7B0/maxresdefault.jpg" },
       
    // ];
    let history = useHistory();
    const [user, setuser] = useState([])
    useEffect(() => {
        data()
    }, [])

    function data() {
        let token = localStorage.getItem("token");

        axios.get(`http://localhost:9009/profile`,{ headers: { 'x-access-token': token } })
            .then(res => {
                console.log(res)
                const tableData = res.data.data
                // const array = [];
                //  array.push(tableData);
                setuser(tableData)
                console.log(user)

            })

    }
    function deleteuser(_id) {
        console.log(_id);
        let token = localStorage.getItem("token");
        axios.delete(`http://localhost:9009/${_id}`,{ headers: { 'x-access-token': token } }).then((result) => {
            console.log("result.data", result);
            data()

        })

    }
    function adduser(){
       
        console.log('hey______add');
       history.push('/Register')
        
    }
    function updateuser(id) {
        
        console.log('heyy_____put',id);
        history.push(`/Profile`);
       
    }


    const columns = [
        {
            title: 'username', field: "username"
        },
        {
            title: "email", field: "email"

        },
        {
            title: "mobilenumber", field: "phone"

        },
        {
            title: "Image", field: "profile_url", render: (rowData) => <img src={rowData.profile_url} style={{ width: 120, height: 100}} alt="" />
        }
    ]


    return (

        <div className='container fluid' >

            {/* <SimpleImageSlider
                width={1200}
                height={704}
                images={images}
                slideDuration={1.2}
                autoPlay={1.2}
                showBullets={true}
                showNavs={true}
                
            /> */}

<MaterialTable title=" Material Table"
                data={user}
                columns={columns}

                actions={[
                    {
                        
                        icon: 'edit',
                        tooltip: 'Edit User',
                        onClick: (event, rowData) => updateuser(rowData._id),
                       
                    },
                    

                    {
                        icon: 'delete',
                        tooltip: 'Delete User',
                        onClick: (event, rowData) => deleteuser(rowData._id)

                    }, 
                    {
                        icon: 'add',
                        tooltip: 'Add User',
                        isFreeAction: true ,
                        onClick: (event, rowData) => adduser(rowData._id)
                      }
                ]}
            />


        </div>
    )
}




export default Copy