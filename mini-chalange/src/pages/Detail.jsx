import { useParams } from "react-router-dom";
import '../css/Detail.css'

export default function Detail() {


    const params = useParams();


    const p = [
        {
            "id": 0,
            "username": "",
            "image": "",
            "follower": 0,
            "following": 0
        },
        {
            "id": 1,
            "username": "jedeye__",
            "image": "https://images.unsplash.com/photo-1564564244660-5d73c057f2d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80",
            "follower": "1.1m",
            "following": "1.2k"
        },
        {
            "id": 2,
            "username": "radif_mp",
            "image": "https://images.unsplash.com/photo-1556474835-b0f3ac40d4d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            "follower": "2m",
            "following": "8k"
        },
        {
            "id": 3,
            "username": "samsul_rijal29",
            "image": "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            "follower": "5k",
            "following": "3k"
        },
        {
            "id": 4,
            "username": "ilfat_fathul",
            "image": "https://images.unsplash.com/photo-1543965170-4c01a586684e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1449&q=80",
            "follower": "2k",
            "following": "1k"
        },
        {
            "id": 5,
            "username": "suryaa6666",
            "image": "https://cdn.idntimes.com/content-images/duniaku/post/20201223/rinnegan-sasuke-c07f5e2e4fe0650927cf540a9c47a286_600x400.jpg",
            "follower": "999k",
            "following": "1k"
        }
    ]

    let index = params.id

    console.log(index)
    console.log(p[index])




    return (
        <>
            <div  style={{ backgroundColor : 'aliceblue', marginTop : '200px', width : '700px', margin : '200px auto' }} className="shadow-sm p-3 mb-5 bg-white rounded">
                <div className="detailMain">
                    <img src={p[index].image} alt="" />
                </div>

                <center>
                    <h1>{p[index].username}</h1>
                    <p>FOLLOWER : {p[index].follower}</p>
                    <p>FOLLOWER : : {p[index].following}</p>
                </center>

            </div>
            <center>
                <a href="/"> BACK</a>
            </center>

        </>
    )
}