// npm packages
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Alert, Table } from "react-bootstrap";

// app components
import Icon from "./common/Icon";

// context providers
import { AppContext } from "../context/AppContext";

const LogGrid = () => {
  const { log } = useContext(AppContext);

  console.log(log);

  if (!log || !log.length) {
    return (
      <Alert>
        Oooops! Nothing to review here yet. Please go back to the{" "}
        <Link to="/dashboard">Dashboard</Link> and check a couple of profiles.
      </Alert>
    );
  }

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>Candidate Info</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {log.map(profile => {
          return (
            <tr key={profile.id}>
              <td>
                <p>
                  <img src={profile.thumbnailURL} alt="" />
                </p>
                <p>{profile.fullName}</p>
              </td>
              <td>
                <p>
                  <Icon code="cake-candles" />
                  {profile.dob}
                </p>
                <p>
                  <Icon code="mobile" />
                  {profile.phone}
                </p>
                <p>
                  <Icon code="envelope" />
                  <a href={`mailto:${profile.email}`}>{profile.email}></a>
                </p>
              </td>
              <td>{profile.status}</td>
              <td>Remove</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default LogGrid;
