import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import "../../index.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "@/utils/constant";
import { DialogDescription } from "@radix-ui/react-dialog";

function Popup({ isOpen, onClose, popupContent, setUpdateUI }) {
    // eslint-disable-next-line react/prop-types
    const [input, setInput] = useState("")

    

    function updatedChanges () {
        axios.put (`${baseURL}/update/${popupContent.id}`, {
              ToDo: input,
        })
        .then((response) => {
            setUpdateUI((prevstate) => !prevstate);
            console.log(response.data);
            onClose();
        })
        .catch((error) => {
            console.log("Error updating data", error);
        });
    }



    useEffect(() => {
        setInput(popupContent.toDo || "");
      }, [popupContent.toDo]);
    

    

  return (
    <div className="dark">
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-[425px] dark">
          <DialogHeader>
            <DialogTitle>Update ToDo</DialogTitle>
            <DialogDescription>Enter the new details for your task below.</DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-4 items-center gap-10 py-4">
            <Input
              value = {input}
              onChange = {(e) => setInput(e.target.value)}
              className="col-span-3"
              
            />
            <Button type="submit" onClick={updatedChanges} >Update</Button>
            </div>
            
        </DialogContent>
        </Dialog>
        </div>
  );
}

export default Popup;

