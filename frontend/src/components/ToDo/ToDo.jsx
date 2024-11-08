
import { Separator } from "@/components/ui/separator";
import { baseURL } from "@/utils/constant";
import axios from "axios";
import { MdEdit } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";



function ToDo({ toDo, setUpdateUI, setShowPopup, id, setPopupContent}) {


  function deleteToDo(id) {
    axios
      .delete(`${baseURL}/delete/${id}`)
      .then((res) => {
        console.log(res.data);
        setUpdateUI((prevstate) => !prevstate);
      })
      .catch((err) => console.log(err));
  }

  const updateToDo = ()=> {
    // Implement functionality to update ToDo item
    setPopupContent({toDo, id});
    setShowPopup(true);
  }


  
  return (
    

        <div>
              <div  key={id} className="text-sm flex items-center text-start mx-2">
                <div>{toDo}</div>
                <MdEdit className="ml-auto text-lg text-gray-400 hover:text-gray-600"  onClick={updateToDo}/>
                <RxCross2
                  className="ml-2 text-lg text-gray-400 hover:text-gray-600"
                  onClick={() => deleteToDo(id)}
                />
              </div>
              <Separator className="my-2" />
        </div>
      
  );
}

export default ToDo;
