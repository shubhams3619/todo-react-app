import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import "./App.css";
import { useEffect, useState } from "react";
import ToDo from "./components/ToDo/ToDo";
import axios from "axios";
import { baseURL } from "@/utils/constant";
import Popup from "./components/ToDo/Popup";
import { ScrollArea } from "@/components/ui/scroll-area";

function App() {
  const [toDos, setToDos] = useState([]);
  const [input, SetInput] = useState("");
  const [updateUI, setUpdateUI] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState({});

  

  useEffect(() => {
    axios
      .get(`${baseURL}/get`)
      .then((res) => {
        setToDos(res.data);
      })
      .catch((err) => console.log(err));
  }, [updateUI]);

  function saveToDo() {
    SetInput("");
    axios
      .post(`${baseURL}/save`, { ToDo: input })
      .then((res) => {
        console.log(res.data);

        setUpdateUI((prevstate) => !prevstate);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="dark">
      <h1 className="text-4xl font-bold mb-10">TODO APP</h1>
      <div className=" w-full  flex items-center justify-center">
        <div className="w-96 flex space-x-2">
          <Input
            type="text"
            placeholder="Add a ToDo..."
            onChange={(e) => SetInput(e.target.value)}
          />
          <Button type="submit" onClick={saveToDo}>
            ADD
          </Button>
        </div>
      </div>
      <br />

      <div className="flex justify-center">
        <ScrollArea className="h-72 w-96 rounded-md border px-2">
          <div className="p-4">
            <h1 className="mb-4 text-m font-medium leading-none">ToDos</h1>
          </div>
          <div>
            
            {toDos.length == 0 ? (<h1 className="mt-16 font-bold">OOPS ! No TODO HERE</h1>) :
              (toDos.map((el) => (
                <ToDo
                  id={el._id}
                  key={el._id}
                  toDo={el.ToDo}
                  setUpdateUI={setUpdateUI}
                  setShowPopup={setShowPopup}
                  setPopupContent={setPopupContent}
                />
              )))
            }

          </div>
        </ScrollArea>
      </div>

      <Popup
        popupContent={popupContent}
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
        setUpdateUI={setUpdateUI}
      />
    </div>
  );
}

export default App;







// {toDos.map((el) => (
//   <ToDo
//     id={el._id}
//     key={el._id}
//     toDo={el.ToDo}
//     setUpdateUI={setUpdateUI}
//     setShowPopup={setShowPopup}
//     setPopupContent={setPopupContent}
//   />
// ))}