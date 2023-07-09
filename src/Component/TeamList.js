import React from "react";
import { useDispatch } from "react-redux";
import { deleteCard } from "../Redux/reducer";
import { toast } from "react-hot-toast";

function TeamList({
    avatar,
    first_name,
    last_name,
    gender,
    email,
    domain,
    available,
    id,
}) {
    console.log();
    const dispatch = useDispatch();
    const deleteHandler = (id) => {
        dispatch(deleteCard(id));
        toast.error("Deleted");
    };
    return (
        <div className="data__single">
            <img src={avatar} alt="User Avatar" />
            <h4>{`${first_name} ${last_name}`}</h4>
            <p>
                <b>Gender: </b>
                {gender}
            </p>
            <p>
                <b>Email: </b> {email}
            </p>
            <p>
                <b>Domain: </b>
                {domain}
            </p>
            <p>
                <b>Availability: </b>
                {`${available}`}
            </p>
            <button onClick={() => deleteHandler(id)}>Delete</button>
        </div>
    );
}

export default TeamList;
