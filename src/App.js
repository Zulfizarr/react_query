import {useEffect} from "react"
import axios from "axios"
import { useMutation, useQuery, } from "react-query"
import {ReactQueryDevtools} from "react-query/devtools"
export const App = () => {
    const getUser = () => {
        return(
            axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
                return response.data
            })
        )
    }
    const{isLoading, isSuccses, isError, data} = useQuery("/users" , getUser)
    const handleClick = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`).then(response => {
            console.log(response);
        })
    }
    const query__post =useMutation((data) => {
        axios.post("https://reqres.in/api/users", data).then(response => {
            console.log(response.data);
        })
    }
    )
    const handlePostClick = () => {
        query__post.mutate({name: "Malika", job : "web developer"}) 
    }
    return(
        <div>
            {isLoading &&
            <h1>Loading</h1>
            }
            {isSuccses &&
            <>
            {data?.map(item => {
                return(
                    <div key={item.id}>
                        <h1>{item.name}</h1>
                        <button onClick={() => handleClick(item.id )}>Delete</button>
                    </div>
                )
            })}
            </>
            }
            {isError &&
            <h1 style={{color: "crimson"}}>Xatolik</h1>
            }
            <button onClick={handlePostClick}>POST USER</button>
            {query__post?.isLoading &&
            <h1>Yuborilmoqda</h1>
            }
            {query__post?.isSuccses &&
            <h1>Yuborildi</h1>
            }
            { query__post?.isError &&
            <h1>Xatolik</h1>
            }
<ReactQueryDevtools/>
        </div>
    )
}