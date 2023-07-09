import "./App.css";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/reducer";
import { toast } from "react-hot-toast";

function Users() {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");
    const [domain, setDomain] = useState("");
    const [gender, setGender] = useState("");
    const [available, setAvailable] = useState("");

    const dispatch = useDispatch();
    useEffect(() => {
        const getData = async () => {
            const response = await fetch("userData.json");
            const userData = await response.json();
            setData(userData);
        };
        getData();
    }, []);
    const SelectHandler = (val) => {
        dispatch(addToCart(val));
        toast.success("Added To MyTeam");
    };

    const selectedpageHandler = (selectedPage) => {
        if (
            selectedPage >= 1 &&
            selectedPage < data.length &&
            selectedPage != page
        )
            setPage(selectedPage);
    };
    const searchHandler = (e) => {
        e.preventDefault();
        setSearch("");
    };
    return (
        <div>
            <form className="form" onSubmit={searchHandler}>
                <input
                    className="search_input"
                    type="text"
                    placeholder="search name...."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <select
                    className="search_input"
                    onChange={(e) => setDomain(e.target.value)}
                >
                    <option value="">-Domain-</option>
                    <option value="Sales">Sales</option>
                    <option value="Finance">Finance</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Management">Management</option>
                    <option value="IT">IT</option>
                    <option value="UI Designing">UI Designing</option>
                    <option value="Business Development">
                        Business Development
                    </option>
                </select>

                <select
                    className="search_input"
                    onChange={(e) => setGender(e.target.value)}
                >
                    <option value={""}>-Gender-</option>
                    <option value={"Male"}>Male</option>
                    <option value={"Female"}>Female</option>
                </select>
                <select
                    className="search_input"
                    onChange={(e) => setAvailable(e.target.value)}
                >
                    <option value={""}>-Availability-</option>
                    <option value={"true"}>true</option>
                    <option value={"false"}>false</option>
                </select>
            </form>
            {data.length > 0 && (
                <div className="data">
                    {data
                        .filter((item) => {
                            return search.toLowerCase() === ""
                                ? item
                                : item.first_name
                                      .toLowerCase()
                                      .includes(search.toLowerCase()) ||
                                      item.last_name
                                          .toLowerCase()
                                          .includes(search.toLowerCase());
                        })
                        .filter((item) => {
                            return domain === ""
                                ? item
                                : item.domain === domain;
                        })
                        .filter((item) => {
                            return gender === ""
                                ? item
                                : item.gender === gender;
                        })
                        .filter((item) => {
                            return available === ""
                                ? item
                                : `${item.available}` === available;
                        })
                        .slice(page * 20 - 20, page * 20)
                        .map((val) => {
                            return (
                                <div className="data__single" key={val.id}>
                                    <img src={val.avatar} alt="User Avatar" />
                                    <h4>{`${val.first_name} ${val.last_name}`}</h4>
                                    <p>
                                        <b>Gender: </b>
                                        {val.gender}
                                    </p>
                                    <p>
                                        <b>Email: </b> {val.email}
                                    </p>
                                    <p>
                                        <b>Domain: </b>

                                        {val.domain}
                                    </p>
                                    <p>
                                        <b>Availability: </b>
                                        {`${val.available}`}
                                    </p>
                                    <button onClick={() => SelectHandler(val)}>
                                        Select
                                    </button>
                                </div>
                            );
                        })}
                </div>
            )}

            {data.length > 0 && (
                <div className="pagination">
                    <span
                        className={page > 1 ? "" : "page__disabled"}
                        onClick={() => selectedpageHandler(page - 1)}
                    >
                        ◀
                    </span>
                    {[...Array(data.length / 200)].map((_, i) => {
                        return (
                            <span
                                className={
                                    page === i + 1 ? "pagination__selected" : ""
                                }
                                onClick={() => selectedpageHandler(i + 1)}
                                key={i}
                            >
                                {i + 1}
                            </span>
                        );
                    })}
                    <span onClick={() => selectedpageHandler(page + 1)}>▶</span>
                </div>
            )}
        </div>
    );
}
export default Users;
