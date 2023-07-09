import React, { useState } from "react";
import { useSelector } from "react-redux";
import TeamList from "./TeamList";

function Team() {
    const curstate = useSelector((state) => state.team);
    return (
        <>
            {curstate.length > 0 ? <h1 className="head">My team</h1> : ""}
            <div className="data">
                {curstate.length > 0 ? (
                    curstate.map((val) => {
                        return (
                            <TeamList
                                key={val.id}
                                avatar={val.avatar}
                                first_name={val.first_name}
                                last_name={val.last_name}
                                gender={val.gender}
                                email={val.email}
                                domain={val.domain}
                                available={val.available}
                                id={val.id}
                            />
                        );
                    })
                ) : (
                    <h1>No Team Formed...</h1>
                )}
            </div>
        </>
    );
}

export default Team;
