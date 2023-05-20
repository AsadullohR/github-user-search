import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment/moment";
import Header from "./Header";
import SearchBar from "./SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faLink,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const Dashboard = ({ switchTheme, theme }) => {
  const [user, setUser] = useState([]);
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios(`https://api.github.com/users/${search}`);

        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchUser();
  }, [search]);

  const handleSearch = (searchedUser) => {
    setSearch(() => searchedUser);
  };

  return (
    <div className="dashboard-container">
      <Header switchTheme={switchTheme} theme={theme} />
      <SearchBar
        handleSearch={handleSearch}
        query={query}
        setQuery={setQuery}
      />
      {user ? (
        <div className="dashboard-info-container">
          <img alt="user" className="user-img" src={user.avatar_url} />
          {user !== "" ? (
            <div className="info-part">
              <div className="upper-part">
                <div className="bio">
                  <h1 className="user-name">{user.name}</h1>
                  <p className="user-login">{`@${user.login}`}</p>
                  <p className="user-bio">
                    {user.bio ? user.bio : "User has no bio."}
                    {user.bio}
                  </p>
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
                <div className="bottom bottom-left">
                  <div className="location">
                    <FontAwesomeIcon icon={faLocationDot} />
                    <p>{user.location ? user.location : "Not available"}</p>
                  </div>
                  <div className="website">
                    <FontAwesomeIcon icon={faLink} />
                    <p>{user.blog ? user.blog : "Not available"}</p>
                  </div>
                </div>
                <div className="bottom bottom-right">
                  <div className="email">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <p>{user.email ? user.email : "Not available"}</p>
                  </div>
                  <div className="company">
                    <FontAwesomeIcon icon={faBuilding} />
                    <p>{user.company ? user.company : "Not available"}</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            "Start Searching 🕵️"
          )}
        </div>
      ) : (
        "Not Found!"
      )}
    </div>
  );
};

export default Dashboard;
