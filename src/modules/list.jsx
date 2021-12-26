import React,{useContext} from 'react';
import Context from "../context"

export default function RegistrationList(){
    let globalList = useContext(Context);
    return(
        <div>
            {
                globalList[0].map((element,index)=><div key={index}>
                    <h6>name:{element.name}</h6>
                    <h6>group:{element.group}</h6>
                    <h6>description:{element.description}</h6>
                    </div>)
            }

        </div>
    )
}