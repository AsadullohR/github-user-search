import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment/moment";
import Header from "./Header";
import SearchBar from "./SearchBar";

const Dashboard = () => {
  const [user, setUser] = useState([]);
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios(`https://api.github.com/users/${search}`);

      setUser(res.data);
    };

    fetchUser();
  }, [search]);

  const handleSearch = (searchedUser) => {
    setSearch(() => searchedUser);
  };

  return (
    <div className="dashboard-container">
      <Header />
      <SearchBar
        handleSearch={handleSearch}
        query={query}
        setQuery={setQuery}
      />
      {user ? (
        <div className="dashboard-info-container">
          <img className="user-img" src={user.avatar_url} />
          <div>
            <div className="upper-part">
              <div>
                <h1 className="user-name">{user ? user.name : "Not Found!"}</h1>
                <p className="user-login">{user.login}</p>
                <p className="user-bio">{user.bio}</p>
              </div>
              <div className="date-joined">
                {`Joined ${moment(user.created_at).format("Do MMM YY")}`}
              </div>
            </div>
            <div className="middle-part">
              <div className="repos">
                <p>Repos</p>
                <div>{user.public_repos}</div>
              </div>
              <div className="followers">
                <p>Followers</p>
                <div>{user.followers}</div>
              </div>
              <div className="following">
                <p>Following</p>
                <div>{user.following}</div>
              </div>
            </div>
            <div className="bottom-part">
              <div className="bottom-left">
                <div className="location">
                  <img />
                  <p>{user.location}</p>
                </div>
                <div className="website">
                  <img />
                  <p>{user.blog}</p>
                </div>
              </div>
              <div className="bottom-right">
                <div className="email">
                  <img />
                  <p>{user.email}</p>
                </div>
              </div>
              <div className="company">
                <img />
                <p>{user.company}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        "Not Found!"
      )}
    </div>
  );
};

export default Dashboard;
