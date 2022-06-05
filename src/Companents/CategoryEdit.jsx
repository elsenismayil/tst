import React,{useRef, useContext} from 'react'
import { useLocation, useHistory } from 'react-router-dom';
import Dark from './Context'
import SDK from './Sdk'

export default function CategoryEdit() {
    const sdk = new SDK();
    const DarkMood= useContext(Dark)
    const inputRef= useRef(null)
    const router = useHistory()
    const location = useLocation()


    const edit = async () => {
        const c_name = inputRef.current.value;
        console.log(c_name)
        const listId = location.state?.list_id
        const datas = {
            name: c_name
        }
        try {
            await sdk.editName(listId, datas)

        } catch (error) {
            console.log(error)
        }

    }


    return (
        <div style={{height:"87vh"}} className="flex justify-center items-center">
    <div className="w-72 ">
    <form action=""   >
        <div className="flex flex-col ">
            <label className="my-3 mx-auto font-medium text-xl"> New Name</label>
            <input ref={inputRef} type="text" placeholder="Edit name" 
             className="p-2 rounded outline-none text-gray-800 font-semibold"
             style={ DarkMood.dark===false? {background:"black"}:{background:"white"}} />
        </div>
        <div>
            
            <button className="bg-red-600 p-2 rounded outline-none my-3 mx-auto w-full"  onClick={() => {
                            edit()
                            router.push({
                                pathname: "/",
                            })
                        }}>Edit Name</button>
        </div>
    </form>
    </div>
        </div>
      
  )
}
