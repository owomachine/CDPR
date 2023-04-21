import React from "react";

import Navbar from "../elements/navbar";
import GameForm from "../elements/game-form"
import AdminTable from "../elements/admin-table";

import "../scss/admin-page.scss"

function AdminPage() {
  return (
    <div className="adminPage">
      <Navbar />
      <GameForm/>
      <AdminTable/>
    </div>
  );
}

export default AdminPage;
